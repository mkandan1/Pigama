import React from 'react'
import AdminLoginFun from './AdminLoginFun'
function AdminLogin() {

  
  return (
    <div className='container'>

      <h4 className='mt-5'>Login to Pigama Platform</h4>
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

            {/* Submit Button */}
            <div className='mt-2 text-center'>
            <input type='submit' className='btn btn-warning mt-3 btn--large' onClick={AdminLoginFun}></input>
          </div>
    </div>
  )
}

export default AdminLogin