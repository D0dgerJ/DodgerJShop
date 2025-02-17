import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountdownTimer = ({ productId }) => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const fetchPromotionEndTime = async () => {
      try {
        const response = await axios.get(`/api/offers/${productId}`);
        updateTimer(response.data.end_date);
      } catch (error) {
        console.error('Failed to fetch promotion end time:', error);
      }
    };

    if (productId) {
      fetchPromotionEndTime();
    }
  }, [productId]);

  const updateTimer = (endTime) => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endTime) - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeRemaining(newTimeLeft);
      if (newTimeLeft.seconds <= 0 && newTimeLeft.minutes <= 0 && newTimeLeft.hours <= 0 && newTimeLeft.days <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  };

  return (
    <div className="offer">
      <p>Offer ends at</p>
      <ul className="flexcenter">
        <li>{timeRemaining.days}</li>
        <li>{timeRemaining.hours}</li>
        <li>{timeRemaining.minutes}</li>
        <li>{timeRemaining.seconds}</li>
      </ul>
    </div>
  );
};

export default CountdownTimer;