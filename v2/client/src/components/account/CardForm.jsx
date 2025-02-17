import React, { useState, useEffect, useRef, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './CardForm.module.scss';
import { AuthContext } from './AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CardForm({ customerId, onSave, onDelete }) {
  const { user } = useContext(AuthContext);

  const existingCard = {
    card_id: 1,
    card_number: '1234567812345678',
    card_holder: 'DodgerJ',
    expiry_date: `${String(new Date().getMonth() + 1).padStart(2, '0')}/${String(new Date().getFullYear()).slice(-2)}`,
    cvc: '123',
  };

  const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
  const currentYear = String(new Date().getFullYear()).slice(-2);
  
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [focusElementStyle, setFocusElementStyle] = useState(null);
  const [existingCards, setExistingCards] = useState([]);
  const cardNumberRef = useRef(null);
  const cardNameRef = useRef(null);
  const cardDateRef = useRef(null);
  const minCardYear = new Date().getFullYear();

  const [cardBackgroundImage, setCardBackgroundImage] = useState(
    `https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${Math.floor(Math.random() * 25 + 1)}.jpeg`
  );

  useEffect(() => {
    const imageUpdateInterval = setInterval(() => {
      setCardBackgroundImage(
        `https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${Math.floor(Math.random() * 25 + 1)}.jpeg`
      );
    }, 60000);

    return () => clearInterval(imageUpdateInterval);
  }, []);

  const fetchExistingCards = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token is not available');
      return;
    }

    try {
      const response = await fetch('/api/cards', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setExistingCards(data);
      } else {
        console.error('Failed to fetch existing cards');
      }
    } catch (error) {
      console.error('Error fetching existing cards:', error);
    }
  };

  useEffect(() => {
    fetchExistingCards();
  }, []);

  const getCardType = () => {
    const number = cardNumber || existingCard?.card_number || '';
    const cardTypes = [
      { regex: /^4/, type: 'visa' },
      { regex: /^(34|37)/, type: 'amex' },
      { regex: /^5[1-5]/, type: 'mastercard' },
      { regex: /^6011/, type: 'discover' },
      { regex: /^9792/, type: 'troy' }
    ];
    const foundType = cardTypes.find(cardType => number.match(cardType.regex));
    return foundType ? foundType.type : 'visa';
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 16) {
      setCardNumber(value);
    }
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvc(value);
    }
  };

  const flipCard = (status) => {
    setIsCardFlipped(status);
  };

  const focusInput = (e) => {
    const targetRef = e.target.dataset.ref;
    const target = targetRef === 'cardNumber'
      ? cardNumberRef.current
      : targetRef === 'cardName'
      ? cardNameRef.current
      : cardDateRef.current;

    setFocusElementStyle({
      width: `${target.offsetWidth}px`,
      height: `${target.offsetHeight}px`,
      transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
    });
  };

  const blurInput = () => {
    setTimeout(() => {
      setFocusElementStyle(null);
    }, 300);
  };

  const handleDelete = async (cardId) => {
    try {
        const response = await fetch(`/api/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
            console.log(`Card with ID ${cardId} deleted successfully`);
            setExistingCards(prevCards => prevCards.filter(card => card.card_id !== cardId));
            toast.success('Card successfully deleted!');  // Уведомление об успешном удалении
            if (onDelete) onDelete(cardId);
        } else {
            console.error('Failed to delete card');
            toast.error('Failed to delete card');  // Уведомление об ошибке удаления
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error('Error occurred while deleting card');  // Уведомление об ошибке
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const cardData = {
        customer_id: customerId,
        card_number: cardNumber,
        card_holder: cardHolder,
        expiry_date: `${expiryMonth}/${expiryYear}`,
        cvc: cvc,
    };
  
    try {
        const response = await fetch('/api/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cardData),
        });
  
        if (response.ok) {
            const savedCard = await response.json();
            console.log('Card data saved successfully:', savedCard);
            setExistingCards(prevCards => [...prevCards, savedCard]);
            toast.success('Card successfully added!');  // Уведомление об успешном добавлении
            if (onSave) onSave(savedCard);
        } else {
            console.error('Failed to save card data');
            toast.error('Failed to add card');  // Уведомление об ошибке добавления
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error('Error occurred while adding card');  // Уведомление об ошибке
    }
  };

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      {existingCards.map((card, index) => {
        const [expiryMonth, expiryYear] = card.expiry_date.split('/');

        return (
          <SwiperSlide key={index}>
            <div className={styles.wrapper}>
              <div className={styles.cardForm}>
                <div className={styles.cardList}>
                  <div className={`${styles.cardItem}`}>
                    <div className={`${styles.cardItem__side} ${styles['-front']}`}>
                      <div className={styles.cardItem__focus}></div>
                      <div className={styles.cardItem__cover}>
                        <img
                          src={cardBackgroundImage}
                          className={styles.cardItem__bg}
                          alt="Card Background"
                        />
                      </div>
                      <div className={styles.cardItem__wrapper}>
                        <div className={styles.cardItem__top}>
                          <img
                            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                            className={styles.cardItem__chip}
                            alt="Chip"
                          />
                          <div className={styles.cardItem__type}>
                            <img
                              src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType(card.card_number)}.png`}
                              className={styles.cardItem__typeImg}
                              alt="Card Type"
                            />
                          </div>
                        </div>
                        <label htmlFor="cardNumber" className={styles.cardItem__number}>
                          {card.card_number.padEnd(16, '•').replace(/(.{4})/g, '$1 ')}
                        </label>
                        <div className={styles.cardItem__content}>
                          <label htmlFor="cardName" className={styles.cardItem__info}>
                            <div className={styles.cardItem__holder}>Card Holder</div>
                            <div className={styles.cardItem__name}>
                              {card.card_holder || 'Full Name'}
                            </div>
                          </label>
                          <div className={styles.cardItem__date}>
                            <label htmlFor="cardMonth" className={styles.cardItem__dateTitle}>Expires</label>
                            <label htmlFor="cardMonth" className={styles.cardItem__dateItem}>
                              {expiryMonth || 'MM'}
                            </label>/
                            <label htmlFor="cardYear" className={styles.cardItem__dateItem}>
                              {expiryYear.slice(-2) || 'YY'}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.cardItem__side} ${styles['-back']}`}>
                      <div className={styles.cardItem__cover}>
                        <img
                          src={cardBackgroundImage}
                          className={styles.cardItem__bg}
                          alt="Card Background"
                        />
                      </div>
                      <div className={styles.cardItem__band}></div>
                      <div className={styles.cardItem__cvv}>
                        <div className={styles.cardItem__cvvTitle}>CVV</div>
                        <div className={styles.cardItem__cvvBand}>
                          {card.cvc.padEnd(3, '•')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardForm__inner}>
                  <button 
                    className={styles.cardForm__button} 
                    onClick={() => handleDelete(card.card_id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      {/* Слайд для добавления новой карты */}
      <SwiperSlide>
        <div className={styles.wrapper}>
          <div className={styles.cardForm}>
            <div className={styles.cardList}>
              <div className={`${styles.cardItem} ${isCardFlipped ? styles['-active'] : ''}`}>
                <div className={`${styles.cardItem__side} ${styles['-front']}`}>
                  <div className={styles.cardItem__focus} style={focusElementStyle}></div>
                  <div className={styles.cardItem__cover}>
                    <img
                      src={cardBackgroundImage}
                      className={styles.cardItem__bg}
                      alt="Card Background"
                    />
                  </div>
                  <div className={styles.cardItem__wrapper}>
                    <div className={styles.cardItem__top}>
                      <img
                        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                        className={styles.cardItem__chip}
                        alt="Chip"
                      />
                      <div className={styles.cardItem__type}>
                        <img
                          src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`}
                          className={styles.cardItem__typeImg}
                          alt="Card Type"
                        />
                      </div>
                    </div>
                    <label htmlFor="cardNumber" className={styles.cardItem__number} ref={cardNumberRef}>
                      {cardNumber.padEnd(16, '•').replace(/(.{4})/g, '$1 ')}
                    </label>
                    <div className={styles.cardItem__content}>
                      <label htmlFor="cardName" className={styles.cardItem__info} ref={cardNameRef}>
                        <div className={styles.cardItem__holder}>Card Holder</div>
                        <div className={styles.cardItem__name}>
                          {cardHolder || 'Full Name'}
                        </div>
                      </label>
                      <div className={styles.cardItem__date} ref={cardDateRef}>
                        <label htmlFor="cardMonth" className={styles.cardItem__dateTitle}>Expires</label>
                        <label htmlFor="cardMonth" className={styles.cardItem__dateItem}>
                          {expiryMonth || 'MM'}
                        </label>/
                        <label htmlFor="cardYear" className={styles.cardItem__dateItem}>
                          {expiryYear.slice(-2) || 'YY'}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.cardItem__side} ${styles['-back']}`}>
                  <div className={styles.cardItem__cover}>
                    <img
                      src={cardBackgroundImage}
                      className={styles.cardItem__bg}
                      alt="Card Background"
                    />
                  </div>
                  <div className={styles.cardItem__band}></div>
                  <div className={styles.cardItem__cvv}>
                    <div className={styles.cardItem__cvvTitle}>CVV</div>
                    <div className={styles.cardItem__cvvBand}>
                      {cvc.padEnd(3, '•')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardForm__inner}>
              <div className={styles.cardInput}>
                <label htmlFor="cardNumber" className={styles.cardInput__label}>Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  className={styles.cardInput__input}
                  value={cardNumber}
                  placeholder={existingCard.card_number}
                  onChange={handleCardNumberChange}
                  onFocus={focusInput}
                  onBlur={blurInput}
                  maxLength="16"
                  data-ref="cardNumber"
                />
              </div>
              <div className={styles.cardInput}>
                <label htmlFor="cardName" className={styles.cardInput__label}>Card Holder</label>
                <input
                  type="text"
                  id="cardName"
                  className={styles.cardInput__input}
                  value={cardHolder}
                  placeholder={existingCard.card_holder}
                  onChange={handleCardHolderChange}
                  onFocus={focusInput}
                  onBlur={blurInput}
                  data-ref="cardName"
                />
              </div>
              <div className={styles.cardForm__row}>
                <div className={styles.cardForm__col}>
                  <div className={styles.cardForm__group}>
                    <label htmlFor="cardMonth" className={styles.cardInput__label}>Expiration Date</label>
                    <select
                      className={`${styles.cardInput__input} ${styles['-select']}`}
                      id="cardMonth"
                      value={expiryMonth}
                      onChange={(e) => setExpiryMonth(e.target.value)}
                      onFocus={focusInput}
                      onBlur={blurInput}
                      data-ref="cardDate"
                      disabled={!expiryYear} 
                    >
                      <option value="" disabled>Month</option>
                      {Array.from({ length: 12 }, (_, i) => {
                        const monthValue = String(i + 1).padStart(2, '0');
                        const isDisabled = expiryYear === String(currentYear).slice(-2) && i + 1 < currentMonth;

                        return (
                          <option key={i + 1} value={monthValue} disabled={isDisabled}>
                            {monthValue}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      className={`${styles.cardInput__input} ${styles['-select']}`}
                      id="cardYear"
                      value={expiryYear}
                      onChange={(e) => {
                        setExpiryYear(e.target.value);
                        if (e.target.value !== String(currentYear).slice(-2)) {
                          setExpiryMonth(''); // Сбрасываем месяц при смене года
                        }
                      }}
                      onFocus={focusInput}
                      onBlur={blurInput}
                      data-ref="cardDate"
                    >
                      <option value="" disabled>Year</option>
                      {Array.from({ length: 20 }, (_, i) => (
                        <option key={i} value={String(minCardYear + i).slice(-2)}>
                          {minCardYear + i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={`${styles.cardForm__col} ${styles['-cvv']}`}>
                  <div className={styles.cardInput}>
                    <label htmlFor="cardCvv" className={styles.cardInput__label}>CVV</label>
                    <input
                      type="text"
                      id="cardCvv"
                      className={styles.cardInput__input}
                      value={cvc}
                      placeholder={existingCard.cvc} 
                      onChange={handleCvcChange}
                      onFocus={(e) => {
                        flipCard(true);
                        focusInput(e);
                      }}
                      onBlur={(e) => {
                        flipCard(false);
                        blurInput(e);
                      }}
                      maxLength="3"
                      data-ref="cardCvv"
                    />
                  </div>
                </div>
              </div>
              <button className={styles.cardForm__button} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  );
}

export default CardForm;