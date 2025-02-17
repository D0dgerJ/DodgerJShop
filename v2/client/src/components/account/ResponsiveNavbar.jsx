import React, { useEffect, useLayoutEffect } from 'react';

// Объект с изображениями
const images = {
  iconchat: require('../../assets/icons/iconchat.jpg'),
  iconcreditcard: require('../../assets/icons/iconcreditcard.png'),
  iconeye: require('../../assets/icons/iconeye.png'),
  iconheart: require('../../assets/icons/iconheart.png'),
  iconletter: require('../../assets/icons/iconletter.png'),
  iconuserprofile: require('../../assets/icons/iconuserprofile.png'),
  iconbox: require('../../assets/icons/iconbox.png'),
  icondelivery: require('../../assets/icons/icondelivery.png'),
  iconinfo: require('../../assets/icons/iconinfo.png'),
  iconpadlock: require('../../assets/icons/iconpadlock.png'),
};

function ResponsiveNavbar({ selectedMenuItem, handleMenuItemClick }) {
  useLayoutEffect(() => {
    const tabsNewAnim = document.getElementById('navbarSupportedContent');
    const horiSelector = document.querySelector('.hori-selector');
    const navbarNav = document.querySelector('.navbar-nav');
    const navbarNavOffset = navbarNav.offsetLeft;

    const updateSelector = () => {
      const activeItem = tabsNewAnim?.querySelector('.active');
      if (activeItem && horiSelector) {
        const { offsetLeft, offsetWidth, offsetHeight } = activeItem;
        horiSelector.style.left = `${offsetLeft - navbarNavOffset}px`;
        horiSelector.style.width = `${offsetWidth}px`;
        horiSelector.style.height = `${offsetHeight}px`;
      }
    };

    const handleResize = () => {
      setTimeout(updateSelector, 500);
    };

    tabsNewAnim?.addEventListener('click', (e) => {
      const clickedElement = e.target.closest('li');
      if (clickedElement) {
        tabsNewAnim.querySelectorAll('li').forEach((li) =>
          li.classList.toggle('active', li === clickedElement)
        );
        updateSelector();
      }
    });

    updateSelector();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mainnav">
      <div className="container">
        <div className="wrapper flexitem">
          <nav className="navbar navbar-expand-custom navbar-mainbg">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <div className="hori-selector">
                  <div className="left"></div>
                  <div className="right"></div>
                </div>
                <li
                  className={`nav-item ${selectedMenuItem === 'profile' ? 'active' : ''}`}
                  onClick={() => handleMenuItemClick('profile')}
                >
                  <a className="nav-link" href="#">
                    <img src={images.iconuserprofile} alt="" />
                    my profile
                  </a>
                </li>
                <li
                  className={`nav-item ${selectedMenuItem === 'orders' ? 'active' : ''}`}
                  onClick={() => handleMenuItemClick('orders')}
                >
                  <a className="nav-link" href="#">
                    <img src={images.iconletter} alt="" />
                    my orders
                  </a>
                </li>
                <li
                  className={`nav-item ${selectedMenuItem === 'wish list' ? 'active' : ''}`}
                  onClick={() => handleMenuItemClick('wish list')}
                >
                  <a className="nav-link" href="#">
                    <img src={images.iconheart} alt="" />
                    wish list
                  </a>
                </li>
                <li
                  className={`nav-item ${selectedMenuItem === 'viewed products' ? 'active' : ''}`}
                  onClick={() => handleMenuItemClick('viewed products')}
                >
                  <a className="nav-link" href="#">
                    <img src={images.iconeye} alt="" />
                    viewed products
                  </a>
                </li>
                <li
                  className={`nav-item ${selectedMenuItem === 'my wallet' ? 'active' : ''}`}
                  onClick={() => handleMenuItemClick('my wallet')}
                >
                  <a className="nav-link" href="#">
                    <img src={images.iconcreditcard} alt="" />
                    my wallet
                  </a>
                </li>
                <li
                  className={`nav-item ${selectedMenuItem === 'my reviews' ? 'active' : ''}`}
                  onClick={() => handleMenuItemClick('my reviews')}
                >
                  <a className="nav-link" href="#">
                    <img src={images.iconchat} alt="" />
                    my reviews
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveNavbar;
