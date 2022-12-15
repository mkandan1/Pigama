import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
import './Signup.css'
import config from '../../../config';

function createAnAccount() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const number = document.getElementById('number').value;
    const dob = document.getElementById('birthdayDate').value;



    if (validateName(firstName) === false || validateEmail(email) === false || validateDob(dob) === false || validatePassword(password) === false || validateNumber(number) === false) {
        return
    }

    const auth = getAuth(config)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const uid = userCredential.user.uid;
            const role = 'user';
            const balance = 0;
            const withdrawHistory = 0;
            const upiID = 0;
            const limit = {total: 0, date: ''}
            const db = getDatabase(config)
            function writeUser(uid, firstName, lastName, email, number, role, balance, withdrawHistory, upiID, limit) {
    
    
                set(ref(db, 'Users/' + uid), {
                    uid: uid,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    role: role,
                    limit: limit,
                    balance: balance,
                    number: number,
                    upiID: upiID,
                    withdrawHistory: withdrawHistory
                }
                )
            }
            
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/firebase.User
                  const uid = user.uid;
                  console.log(uid);
                  // ...
                } else {
                  // User is signed out
                  // ...
                }
    
        }
        
        )

        
        writeUser(uid, firstName, lastName, email, number, role, balance, withdrawHistory, upiID, limit)
        window.location.href = '/trendings'
}
)  
.catch((error) => {
    console.log(error);
})
}

function validateDob(dob) {
    if (dob === '') {
        document.getElementById('dob-error').innerText = 'Enter valid Date Of Birth';
        return false
    }
    else if (dob === " ") {
        document.getElementById('dob-error').innerText = 'Enter valid Date Of Birth';
        return false
    }
    else {
        document.getElementById('dob-error').innerText = '';
        return true
    }
}


function validateName(name) {
    const reg = /^[a-zA-Z ]{2,30}$/;
    if (reg.test(name) === false) {
        document.getElementById('name-error').innerText = 'Enter valid name'
        return false
    }
    else {
        document.getElementById('name-error').innerText = ''
        return true
    }
}

function validateNumber(number) {
    const reg = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (reg.test(number) === false) {
        document.getElementById('number-error').innerText = 'Enter valid number'
        return false
    }
    else {
        document.getElementById('number-error').innerText = ''
        return true
    }
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

function validatePassword(password) {
    const reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (reg.test(password) === false) {
        document.getElementById('password-error').innerText = 'Password must be greater than 6'
        return false
    }
    else {
        document.getElementById('password-error').innerText = ''
        return true
    }
}

class Signup extends Component {
    render() {
        return (
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: 15 + 'px' }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Create an account</h3>
                                    <div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">First Name</label>
                                                    <input type="text" id="firstName" className="form-control form-control-lg" />
                                                </div>
                                                <span id="name-error" className='error'></span>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="lastName">Last Name</label>
                                                    <input type="text" id="lastName" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">

                                                <div className="form-outline datepicker w-100">
                                                    <label htmlFor="birthdayDate" className="form-label">Birthday</label>
                                                    <input type="date" className="form-control form-control-lg" id="birthdayDate" />
                                                    <span id='dob-error' className='error'></span>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="emailAddress">Email</label>
                                                    <input type="email" id="email" className="form-control form-control-lg" />
                                                    <span className='error' id='email-error'></span>
                                                </div>


                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                    <input type="password" id="password" className="form-control form-control-lg" />
                                                    <span className='error' id='password-error'></span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                <input type="tel" id="number" className="form-control form-control-lg" />
                                            </div>
                                            <span id='number-error' className='error'></span>
                                        </div>

                                        <span>By creating an account you're agree to our <Link to='/privacy'>Privacy</Link> and <Link to='/terms'>Terms</Link></span>
                                        <div className="mt-4 pt-2">
                                            <input className="btn btn-primary btn-lg" type="submit" value="Submit" onClick={createAnAccount} />
                                        </div>

                                    </div>

                                    <div className='option__login mt-4'>
                                        <span>Already have an account? <Link to='/Oauth/Login'>Login</Link></span>
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

export default Signup