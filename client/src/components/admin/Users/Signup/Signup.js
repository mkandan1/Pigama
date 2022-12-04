import React, { Component } from 'react';
import logo from '../../../../assets/images/Logo.png'
import './Signup.css'
import CreateUserAccount from './CreateUserAccount';
import { Link } from 'react-router-dom'
import CheckAdminRole from '../CheckAdminRole/CheckAdminRole';

class Signup extends Component {




  render() {
    return (
      <div className='User__create container' onLoad={CheckAdminRole}>
        <div className='logo-section'>
          <img src={logo} alt='Pigama Logo' className='mt-5' />
        </div>
        <div className='sigup__header text-center'>
          <h1 className='section__title mt-5'>Create an Account</h1>
          <span className='section__description m-5'>Enter the below details to procced</span>
        </div>
        <div className='form'>

          {/* Name */}
          <div className='mt-5'>
            <label className='label__name'>Name</label>
            <input type='text' className='input-group mt-2' id='name'></input>

            <div className="error-container d-block">
              <span id="name-error-message"></span>
            </div>
          </div>
          {/* Email */}
          <div className='mt-5'>
            <label className='label__name'>Email</label>
            <input type='email' className='input-group mt-2' id='email'></input>

            <div className="error-container d-block">
              <span id="email-error-message"></span>
            </div>
          </div>
          {/* Password */}
          <div className='mt-5'>
            <label className='label__name'>Password</label>
            <input type='password' className='input-group mt-2' id='pass'></input>

            <div className="error-container d-block">
              <span id="pass-error-message"></span>
            </div>
          </div>
          {/* Phone number */}
          <div className='mt-5'>
            <label className='label__name'>Phone number</label>
            <input type='tel' className='input-group mt-2' id='number'></input>

            <div className="error-container d-block">
              <span id="number-error-message"></span>
            </div>
          </div>
          {/* Role */}
          <div className='mt-5'>
            <label className='label__name d-block'>Role</label>
            <select id='roles' className='mt-2'>
              <option value='None'>Choose Role</option>
              <option value='Tester'>Tester</option>
              <option value='User'>User</option>
              <option value='Admin'>Admin</option>
            </select>

            <div className="error-container d-block">
              <span id="role-error-message"></span>
            </div>
          </div>
          {/* Reference */}
          <div className='mt-5'>
            <label className='label__name'>Who refered?</label>
            <span className='d-block info'>Enter he/she email</span>
            <input type='email' className='input-group mt-3' id='reference'></input>
          </div>

          {/* Agreemen */}
          <div className='text-center mt-4'>
            <span className='agreement'>By creating account you're agree to our <Link to='/pigama/privacy'>Privacy Policy</Link> and <Link to='/pigama/terms'>Terms & Condition</Link></span>
          </div>

          {/* Submit Button */}
          <div className='mt-2 text-center'>
            <input type='submit' className='btn btn-warning mt-3 btn--large' onClick={CreateUserAccount}></input>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup