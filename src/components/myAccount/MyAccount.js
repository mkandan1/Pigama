import React, { Component } from 'react';
import Header from './../essentials/Header';
import { Link } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import './myprofile.css';
import config from '../../config';

function logOut() {
  const auth = getAuth(config);
  signOut(auth).then(() => {
    window.location.href = '/Oauth/login'
  }).catch((error) => {
    // An error happened.
  });
}

class MyAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 0,
      name: '',
      email: '',
      number: 0,
      upiID: 0,
      withdrawHistory: [],
      authState: true
    }
    this.withdraw = this.withdraw.bind(this);
    this.addUpiId = this.addUpiId.bind(this);
  }

  addUpiId(){
    const upiId = document.getElementById('upi__id').value;

    if(this.validateUpiId(upiId)=== false){
      return
    }

    const auth = getAuth(config);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const data = {uid: uid, upiId: upiId}

        fetch(`${process.env.REACT_APP_API_LINK}/updateUpiId`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res)=>{
          return res.json()
        }).then((data)=>{
          if(data.result === 'ok'){
            document.getElementById('upi-error').innerText = 'Updated';
            document.getElementById('upi-error').style.color = 'green';
          }
        })

      }})
      

  }

  validateUpiId(id){
    const reg = /[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}/;
    if(reg.test(id)===false){
      document.getElementById('upi-error').innerText = 'Invalid UPI ID'
      document.getElementById('upi-error').style.color = 'red'
    }
    else{
      document.getElementById('upi-error').innerText = ''
      document.getElementById('upi-error').style.color = ''
    }
 }

  fetchUserDetails() {

    const auth = getAuth(config);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        this.setState({
          authState: true
        })

        fetch(`${process.env.REACT_APP_API_LINK}/api/user/${uid}`,
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": `${process.env.REACT_APP_PROUDI_LINK}`,
              "Accept": "application/json"
            }
          })
          .then(res => {
            return res.json()
          })
          .then(data => {
            this.setState({
              name: data.name,
              email: data.email,
              number: data.phone_number,
              balance: data.balance,
              upiID: data.upiID,
              withdrawHistory: data.withdrawHistory
            })

          }

          );
        // ...
      } else {
        this.setState({
          authState: false
        })
      }
    });

  }

  withdraw() {
    const auth = getAuth(config);
    onAuthStateChanged(auth, (user) => {
      const uid = user.uid;

      fetch(`${process.env.REACT_APP_API_LINK}/api/withdrawRequest/${uid}`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_PROUDI_LINK}`,
          'Content-Type': 'application/json'
        }

      }).then((res) => {
        return res.json();
      }).then((data) => {
        if(data.result === 'ok'){
          document.getElementById('withdraw__message').innerText = 'Withdraw request has been sent'
          document.getElementById('withdraw__message').style.color = 'green';
        }
        else if(data.result === 'duplicate'){
          document.getElementById('withdraw__message').innerText = 'Depulicate request'
          document.getElementById('withdraw__message').style.color = 'red';
        }
      }).catch((err) => {
        console.log(err);
      })

    })
  }

  componentWillMount() {
    this.fetchUserDetails()
  }
  render() {
    const approved = {
      color: 'green'
    }
    const rejected = {
      color: 'red'
    }
    const history = this.state.withdrawHistory;
    return (
      <>
        {
          this.state.authState ? <div> <Header />
            {/* Profile Header */}
            <div className='myAccount container p-5'>
              <div className='profile__card p-5'>

                <div className='d-md-flex justify-content-between '>
                  <div className='d-flex d-md-block align-items-center flex-column'>
                    {/* User Profile Icon */}
                    <div className='round' id='user__profile'>
                      <img src='https://t3.ftcdn.net/jpg/04/51/93/48/360_F_451934847_V7rc18Ibs9UNU5sSihQBY0MzSDgei4Cr.jpg' className='img-fluid' alt='User Profile' />
                    </div>
                    <h5 className='mt-3'>{this.state.name}</h5>
                  </div>
                  <div className='text-center text-md-start mt-3 mt-md-0'>
                    <h5><b>Basic Information</b></h5>
                    <p>Email: {this.state.email}</p>
                    <p>Phone number: {this.state.number}</p>
                    <button className='btn btn-primary' onClick={logOut}>Log Out</button>
                  </div>
                </div>

                <hr />

                <div className='statistics d-block d-md-flex justify-content-between'>
                  <div className=''>
                    <h6><b>Balance:</b></h6>
                    <p>₹ {this.state.balance}</p>
                  </div>
                  <div className='d-md-flex d-block'>
                    <span><b>UPI ID:</b></span>
                    {(this.state.upiID === 0) ?
                      <div className='ms-md-2 ms-0'>
                        <input type='text' placeholder='Add UPI ID' id='upi__id' />
                        <input type='submit' value='Add' onClick={this.addUpiId} />
                        <span className='d-block' id='upi-error'></span>
                      </div> :
                      <p className='ms-2'>{this.state.upiID}</p>
                    }
                  </div>
                </div>

                <div className='withdrawHistory mt-5'>
                  <div className='d-md-flex d-block justify-content-between'>
                    <h6><b>Withdraw History</b></h6>
                    {(this.state.balance >= 100) ?
                      <div>
                        <button className='btn btn-outline-primary' onClick={this.withdraw}>Request Money ₹ {this.state.balance}</button>
                        <span className='d-block' id='withdraw__message'></span>
                      </div> : <div> <button className='btn disabled'>Request Money</button>  <p>Need minimum Rs. 100 to withdraw</p></div>}
                  </div>

                  <div className='mt-3 bg-light'>
                    <div className='hsitory__header bg-light row d-md-flex d-block'>
                      <span className='col-3'><b>Transaction ID</b></span>
                      <span className='col-4'><b>Amount</b></span>
                      <span className='col-4'><b>Status</b></span>
                      <hr />
                    </div>
                    <div className='row p-1'>
                      {
                        Object.keys(history).map((key, i) => (
                          <div key={i} className='row'>
                            <span className='col-12 col-md-3 withdraw_heading'>{history[key].id}</span>
                            <span className='col-12 col-md-4 ms-1 withdraw_heading'>Rs {history[key].amount}</span>
                            <span className='col-12 col-md-4 ms-1 mb-3 withdraw_heading'>{(history[key].status === 'Approved') ? <span style={approved}>{history[key].status}</span> : <span style={rejected}>{history[key].status}</span>}</span>
                            <hr />
                          </div>
                        )
                        )}
                    </div>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div></div> :
            <div className='text-center mt-5 pt-5'>
              <p>Please sign in <Link to='/Oauth/Login'>here</Link> to proceed</p>
            </div>
        }
      </>
    )
  }
}

export default MyAccount