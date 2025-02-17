import React, { useEffect, useContext, useLayoutEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useAuthCheck } from "../../hooks/useAuthCheck"; 
import ResponsiveNavbar from './ResponsiveNavbar';

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