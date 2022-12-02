import React, { Component } from 'react';
import '../../assets/css/Footer.css';
//Logo
import logo_white from '../../assets/images/Logo_white.png'

export class Footer extends Component {
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
                    <li className='footer__link'><a href=''>Home</a></li>
                    <li className='footer__link'><a href=''>Trendings</a></li>
                    <li className='footer__link'><a href=''>Contact Us</a></li>
                    <li className='footer__link'><a href=''>Sign Up</a></li>
                </ul>
            </div>
            <div className='col-12 col-lg-3'>
                <span className='footer__title'>Others</span>
                <ul className='mt-2 footer_links'>
                    <li className='footer__link'><a href=''>Privacy</a></li>
                    <li className='footer__link'><a href=''>Terms & Condition</a></li>
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