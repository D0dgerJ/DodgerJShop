import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="newsletter">
                <div className="container">
                    <div className="wrapper">
                        <div className="box">
                            <div className="content">
                                <h3>Join Our newsletter</h3>
                                <p>Get E-mail updates about our latest shop and <strong>special offers</strong></p>
                            </div>
                            <form action="" className="search">
                                <span className="icon-large"><i className="ri-mail-line"></i></span>
                                <input type="mail" placeholder="Your email address" required/>
                                <button type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="widgets">
                <div className="container">
                    <div className="wrapper">
                        <div className="flexwrap">
                            <div className="row">
                                <div className="item mini-links">
                                    <h4>Help & Contact</h4>
                                    <ul className="flexcol">
                                        <li><a href="#">Your Account</a></li>
                                        <li><a href="#">Your Orders</a></li>
                                        <li><a href="#">Shipping Rates</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Assistanat</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="item mini-links">
                                    <h4>Product Cetegories</h4>
                                    <ul className="flexcol">
                                        <li><a href="#">Beauty</a></li>
                                        <li><a href="#">Electronic</a></li>
                                        <li><a href="#">Women's Fashion</a></li>
                                        <li><a href="#">Men's Fashion</a></li>
                                        <li><a href="#">Girl's Fashion</a></li>
                                        <li><a href="#">Boy's Fashion</a></li>
                                        <li><a href="#">Health & Household</a></li>
                                        <li><a href="#">Home & Kitchen</a></li>
                                        <li><a href="#">Pet Supplies</a></li>
                                        <li><a href="#">Sports</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="item mini-links">
                                    <h4>Payment Info</h4>
                                    <ul className="flexcol">
                                        <li><a href="#">Bussiness Card</a></li>
                                        <li><a href="#">Shop with Points</a></li>
                                        <li><a href="#">Reload Your Balance</a></li>
                                        <li><a href="#">PayPal</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="item mini-links">
                                    <h4>About Us</h4>
                                    <ul className="flexcol">
                                        <li><a href="#">Company info</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Investors</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Policies</a></li>
                                        <li><a href="#">Customer reviews</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-info">
                <div className="container">
                    <div className="wrapper">
                        <div className="flexcol">
                            <div className="logo">
                                <a href=""><span className="circle"></span>.DJStore</a>
                            </div>
                            <div className="socials">
                                <ul className="flexitem">
                                    <li><a href="#"><i className="ri-twitter-line"></i></a></li>
                                    <li><a href="#"><i className="ri-facebook-line"></i></a></li>
                                    <li><a href="#"><i className="ri-instagram-line"></i></a></li>
                                    <li><a href="#"><i className="ri-linkedin-line"></i></a></li>
                                    <li><a href="#"><i className="ri-youtube-line"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <p className="mini-text">Copyright 2023 .DJStore All right reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;