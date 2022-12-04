import React, { Component } from 'react';
import '../../assets/css/Footer.css';
import {Link} from 'react-router-dom'
//Logo
import logo_white from '../../assets/images/Logo_white.png'

class Footer extends Component {
  render() {
    return (
      <div className='footer p-5 pb-4'>
        <div className='row container d-flex justify-content-between'>
            <div className='col-12 col-lg-3'>
                <img src={logo_white} alt="Pigama Logo"></img>
                <p className='org__description mt-4'>Pigama is a blogging website which is created by youngters from Tamil Nadu, India</p>
            </div>
            <div className='col-12 col-lg-3'>
                <span className='footer__title'>Organization</span>
                <ul className='mt-2 footer_links'>
                    <li className='footer__link'><Link to='/'>Home</Link></li>
                    <li className='footer__link'><Link to='/trendings'>Trendings</Link></li>
                    <li className='footer__link'><Link to='/contact-us'>Contact Us</Link></li>
                    <li className='footer__link'><Link to='/Oauth/Signup'>Sign Up</Link></li>
                    <li className='footer__link'><Link to='/test'>Test</Link></li>
                
                </ul>
            </div>
            <div className='col-12 col-lg-3'>
                <span className='footer__title'>Others</span>
                <ul className='mt-2 footer_links'>
                    <li className='footer__link'><Link to='/pigama/privacy'>Privacy</Link></li>
                    <li className='footer__link'><Link to='/pigama/terms'>Terms & Condition</Link></li>
                </ul>
            </div>
        </div>

        <hr className='line'></hr>
        <div className='copyright__content text-center mt-4'>
            <span>&#169; 2022 PIGAMA, Powered by Looficats Organization</span>
        </div>
        
      </div>
    )
  }
}

export default Footer