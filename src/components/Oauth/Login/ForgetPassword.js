import React, { Component } from 'react';
function forgetPassword(){

    const email = document.getElementById('email').value;

    if(validateEmail(email)===false){
        return
    }

    fetch(`${process.env.REACT_APP_API_LINK}/forgetPassword`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': `${process.env.REACT_APP_PROUDI_LINK}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email})
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        if (data.result === 'ok'){
            document.getElementById('result').innerText = 'Email has been sent for password reset';
            document.getElementById('result').style.color = 'green';
        }
    })
    .catch((error)=>{
        console.log(error);
    })

}

function validateEmail(email) {
    const reg = /\S+@\S+\.\S+/;
    if (reg.test(email) === false) {
        document.getElementById('email-error').innerText = 'Enter valid email'
        return false
    }
    else {
        document.getElementById('email-error').innerText = ''
        return true
    }
}

class ForgetPassword extends Component {
  render() {
    return (
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: 15 + 'px' }}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Forget Password</h3>
                  <div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <label className="form-label" htmlFor="emailAddress">Email</label>
                          <input type="email" id="email" className="form-control form-control-lg" />
                          <span className='error' id='email-error'></span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 d-flex justify-content-between">
                      <input className="btn btn-primary btn-sm" type="submit" value="Send Link" onClick={forgetPassword} />
                    </div>
                      <span id='result' className='error'></span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ForgetPassword