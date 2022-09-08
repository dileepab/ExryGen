import React from 'react';
import './Footer.scss';
import bg1 from "../../img/footer-bg-1.svg";
import bg2 from "../../img/footer-bg-2.svg";
import location from "../../img/location-icon.svg";
import phone from "../../img/phone-icon.svg";
import mail from "../../img/message-icon.svg";
import fb from "../../img/facebook.svg";
import linkedIn from "../../img/linkedin-icon.svg";
import twitter from "../../img/twitter.svg";
import logo from "../../img/logo-mobile.png";
import fbm from "../../img/facebook-icon.svg";
import twitterM from "../../img/twitter-3.svg";
import insta from "../../img/instagram.svg";
import sendMail from "../../img/send-mail.svg";
import Navigations from "../Navigation/Navigations";

function Footer() {
    return (
        <footer className='footer'>
            <nav className='hideOnMobile'>
                <img src={bg1} className="bg-1" alt="bg-1" />
                <img src={bg2} className="bg-2" alt="bg-2" />
                <div className='col col1'>
                    <div className='logo'>LOGO</div>
                </div>
                <div className='col col2'>
                    <h6 className='col-header'>What We Do</h6>
                    <a href='/'>Business Applications</a>
                    <a href='/'>Web Applications</a>
                    <a href='/'>Mobile Apps Development</a>
                    <a href='/'>Software Consultancy</a>
                    <a href='/'>IT Consultancy</a>
                    <a href='/'>Software For Startups</a>
                </div>
                <div className='col col3'>
                    <h6 className='col-header'>About Us</h6>
                    <div className='about'>
                        <span>TECXA designs & builds intelligent, cost-effective & intuitive bespoke applications, software prototyping & IT consultancy that help streamline processes for businesses.</span>
                        <span>Company Registration No: PV00230408</span>
                    </div>
                </div>
                <div className='col col4'>
                    <h6 className='col-header'>Contact us</h6>
                    <div className='address'>
                        <img src={location} alt={'location'}/>
                        <span>120, New kandy road, Battaramulla, Sri Lanka,</span>
                    </div>
                    <div className='address'>
                        <img src={phone} alt={'phone'}/>
                        <span>Phone: +94-11-449-3087</span>
                    </div>
                    <div className='address'>
                        <img src={mail} alt={'mail'}/>
                        <span>contact@exrygen.com</span>
                    </div>
                    <div className='social'>
                        <img src={fb} alt={'fb'}/>
                        <img src={linkedIn} alt={'linkedIn'}/>
                        <img src={twitter} alt={'twitter'}/>
                    </div>
                </div>
            </nav>
            <div className='footer-content hideOnDesktop'>
                <div className='logo'>
                    <img src={logo} alt={'logo'}/>
                </div>
                <div className='social-links'>
                    <a href='/'>
                        <img src={fbm} alt={'fb'}/>
                    </a>
                    <a href='/'>
                        <img src={twitterM} alt={'twitter'}/>
                    </a>
                    <a href='/'>
                        <img src={insta} alt={'insta'}/>
                    </a>
                </div>
                <div className='footer-links'>
                    <a href='/'>Terms and Conditions</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>Disclaimer</a>
                </div>
                <h2>COMPANY</h2>
                <div className='main-nav'>
                    <Navigations/>
                </div>
                <h2>CONTACT US</h2>
                <div className='contact-us'>
                    <span>120, New kandy road, Battaramulla, Sri Lanka,</span>
                    <span>Phone: +94-11-449-3087</span>
                    <span>contact@exrygen.com</span>
                </div>
                <h2>NEWSLETTER</h2>
                <div className='newsletter'>
                    <input type='email' placeholder='Email'/>
                    <button>
                        <img src={sendMail} alt={sendMail}/>
                    </button>
                </div>
            </div>
            <div className='copyrights'>
                Copyrights © 2021 All Rights Reserved EXRYGEN LIMITED
            </div>
        </footer>
    )
}

export default Footer;