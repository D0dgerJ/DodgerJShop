import React, { useEffect, useContext, useLayoutEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useAuthCheck } from "../../hooks/useAuthCheck"; 

import ModalAccountPage from '../AccountPage/ModalAccountPage';
import Header from "../Header/Header";
import ProfileSection from '../AccountPage/ProfileSection';
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";

import iconchat from '../../assets/icons/iconchat.jpg';
import iconcreditcard from '../../assets/icons/iconcreditcard.png';
import iconeye from '../../assets/icons/iconeye.png';
import iconheart from '../../assets/icons/iconheart.png';
import iconletter from '../../assets/icons/iconletter.png';
import iconuserprofile from '../../assets/icons/iconuserprofile.png';
import iconbox from '../../assets/icons/iconbox.png';
import icondelivery from '../../assets/icons/icondelivery.png';
import iconinfo from '../../assets/icons/iconinfo.png';
import iconpadlock from '../../assets/icons/iconpadlock.png';


const images = {
    iconchat: iconchat,
    iconcreditcard: iconcreditcard,
    iconeye: iconeye,
    iconheart: iconheart,
    iconletter: iconletter,
    iconuserprofile: iconuserprofile,
    iconbox: iconbox,
    icondelivery: icondelivery,
    iconinfo: iconinfo,
    iconpadlock: iconpadlock,
  };
  
function ResponsiveNavbar({ selectedMenuItem, handleMenuItemClick }) {
   
    useLayoutEffect(() => {
      const tabsNewAnim = document.getElementById('navbarSupportedContent');
      const horiSelector = document.querySelector('.hori-selector');
      const navbarNav = document.querySelector('.navbar-nav');
      const navbarNavOffset = navbarNav.offsetLeft; // Получаем смещение .navbar-nav относительно левого края страницы
  
      const test = () => {
        const tabsNewAnim = document.getElementById('navbarSupportedContent');
        const horiSelector = document.querySelector('.hori-selector');
        const navbarNav = document.querySelector('.navbar-nav');
        const navbarNavOffset = navbarNav.offsetLeft;
      
        const activeItemNewAnim = tabsNewAnim.querySelector('.active');
      
        if (activeItemNewAnim) {
          const { offsetHeight: activeWidthNewAnimHeight, offsetWidth: activeWidthNewAnimWidth, left: itemPosNewAnimLeft } = activeItemNewAnim;
          
          if (horiSelector) {
            horiSelector.style.left = `${itemPosNewAnimLeft - navbarNavOffset}px`;
            horiSelector.style.height = `${activeWidthNewAnimHeight}px`;
            horiSelector.style.width = `${activeWidthNewAnimWidth}px`;
          }
        } else {
          // Обработка случая, когда activeItemNewAnim равен null
          console.error('activeItemNewAnim is null');
        }
      };
  
      const handleResize = () => {
        setTimeout(test, 500);
      };
  
      tabsNewAnim.addEventListener('click', (e) => {
        const clickedElement = e.target.closest('li');
        if (clickedElement) {
          tabsNewAnim.querySelectorAll('li').forEach((li) => li.classList.toggle('active', li === clickedElement));
  
          const { offsetHeight: activeWidthNewAnimHeight, offsetWidth: activeWidthNewAnimWidth } = clickedElement;
          const { left: itemPosNewAnimLeft } = clickedElement.getBoundingClientRect();
  
          if (horiSelector) {
            horiSelector.style.left = `${itemPosNewAnimLeft - navbarNavOffset}px`; // Вычитаем смещение .navbar-nav
            horiSelector.style.height = `${activeWidthNewAnimHeight}px`;
            horiSelector.style.width = `${activeWidthNewAnimWidth}px`;
          }
        }
      });
  
      test(); // Вызов функции при монтировании компонента
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useLayoutEffect(() => {
      const path = window.location.pathname.split('/').pop() || 'index.html';
      const target = document.querySelector(`#navbarSupportedContent ul li a[href="${path}"]`);
      if (target) {
        target.parentNode.classList.add('active');
      }
    }, []);
    useEffect(() => {
        updateHoriSelector();
        window.addEventListener('resize', updateHoriSelector);
        return () => {
          window.removeEventListener('resize', updateHoriSelector);
        };
      }, [selectedMenuItem]);
    
      const updateHoriSelector = () => {
        const activeItem = document.querySelector('.nav-item.active');
        const horiSelector = document.querySelector('.hori-selector');
        if (activeItem && horiSelector) {
          const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = activeItem;
          horiSelector.style.top = `${offsetTop}px`;
          horiSelector.style.left = `${offsetLeft}px`;
          horiSelector.style.width = `${offsetWidth}px`;
          horiSelector.style.height = `${offsetHeight}px`;
        }
      };
  
    return (
      <div className='mainnav'>
        <div className='container'>
          <div className='wrapper flexitem'>
            <nav className="navbar navbar-expand-custom navbar-mainbg">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                  <li className={`nav-item ${selectedMenuItem === 'profile' ? 'active' : ''}`} onClick={() => handleMenuItemClick('profile')}>
                    <a className="nav-link" href="#"><img src={images.iconuserprofile} alt=""/>my profile</a>
                  </li>
                  <li className={`nav-item ${selectedMenuItem === 'orders' ? 'active' : ''}`} onClick={() => handleMenuItemClick('orders')}>
                    <a className="nav-link" href="#"><img src={images.iconletter} alt=""/>my orders</a>
                  </li>
                  <li className={`nav-item ${selectedMenuItem === 'wish list' ? 'active' : ''}`} onClick={() => handleMenuItemClick('wish list')}>
                    <a className="nav-link" href="#"><img src={images.iconheart} alt=""/>wish list</a>
                  </li>
                  <li className={`nav-item ${selectedMenuItem === 'viewed products' ? 'active' : ''}`} onClick={() => handleMenuItemClick('viewed products')}>
                    <a className="nav-link" href="#"><img src={images.iconeye} alt=""/>viewed products</a>
                  </li>
                  <li className={`nav-item ${selectedMenuItem === 'my wallet' ? 'active' : ''}`} onClick={() => handleMenuItemClick('my wallet')}>
                    <a className="nav-link" href="#"><img src={images.iconcreditcard} alt=""/>my wallet</a>
                  </li>
                  <li className={`nav-item ${selectedMenuItem === 'my reviews' ? 'active' : ''}`} onClick={() => handleMenuItemClick('my reviews')}>
                    <a className="nav-link" href="#"><img src={images.iconchat} alt=""/>my reviews</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }

  const Accountpage = ({ selectedMenuItem, handleMenuItemClick }) => {

    const { user } = useContext(AuthContext);
    const { isModalOpen, setIsModalOpen } = useAuthCheck();
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

return (
    <div id="page" className="site page-home">

    <aside className="site-off desktop-hide">
        <div className="off-canvas">
            <div className="canvas-head flexitem">
                <div className="logo"><a href="/"><span className="circle"></span>.DJStore</a></div>
                <a href="#" className="t-close flexcenter"><i className="ri-close-line"></i></a>
            </div>
            <div className="departments"></div>
            <nav></nav>
            <div className="thetop-nav"></div>
        </div>
    </aside>

    <Header />

    <main>
        <ModalAccountPage
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />

       <ResponsiveNavbar
          selectedMenuItem={selectedMenuItem}
          handleMenuItemClick={handleMenuItemClick}
        />                 

        <ProfileSection
          selectedMenuItem={selectedMenuItem}
          customerId={user?.customer_id}
        />

        <Brands />
        
    </main>

    <Footer />

    <div className="menu-bottom desktop-hide">
        <div className="container">
            <div className="wrapper">
                <nav>
                    <ul className="flexitem">
                        <li>
                            <a href="#">
                                <i className="ri-bar-chart-line"></i>
                                <span>Trending</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="ri-user-6-line"></i>
                                <span>Account</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="ri-heart-line"></i>
                                <span>Wishlist</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0" className="t-search">
                                <i className="ri-search-line"></i>
                                <span>Search</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <i className="ri-shopping-cart-line"></i>
                                <span>Cart</span>
                                <div className="fly-item">
                                    <span className="item-number">0</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div className="search-bottom desktop-hide">
        <div className="container">
            <div className="wrapper">
                
                <form action="" className="search">
                    <a href="#" className="t-close search-close flexcenter"><i className="ri-close-line"></i></a>
                    <span className="icon-large"><i className="ri-search-line"></i></span>
                    <input type="search" placeholder="Your email address" required/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    </div>

    <div className="overlay"></div>
</div> 
  );
};

export default Accountpage;