import './assets/css/App.css';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Login from './components/Oauth/Login/Login';
import Trendings from './components/Trendings/trendings'
import Privacy from './components/privacy-terms/Privacy';
import Terms from './components/privacy-terms/Terms';
import Test from './components/Test/Test';
import VideoEditing from './components/Trendings/articles/videoEditing';
import SignUpMiddleWare from './components/Oauth/Singup/SignUpMiddleWare';
import ForgetPassword from './components/Oauth/Login/ForgetPassword';
import MyAccountMiddleWare from './components/myAccount/myAccountMiddleWare';
import Ad from './components/Trendings/Ad/Ad';
import NativeAd from './components/Trendings/Ad/NavtiveAd/NativeAd';

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route path='/Oauth/Login' element={< Login />}></Route>
                 <Route path='/Oauth/Signup' element={< SignUpMiddleWare />}></Route>
                 <Route path='/trendings' element={< Trendings />}></Route>
                 <Route path='/forgetPassword' element={<ForgetPassword/>}></Route>
                 <Route path='/myAccount/:uid' element={<MyAccountMiddleWare/>}></Route>
                 <Route path='/pigama/terms' element={< Terms />}></Route>
                 <Route path='/article/video-editing-beginners' element={< VideoEditing/>}></Route>
                 <Route path='/test' element={< Test />}></Route>
                 <Route path='/ad' element={<Ad/>}></Route>
                 <Route path='/nativead' element={<NativeAd/>}></Route>
                 <Route path='/pigama/privacy' element={< Privacy />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  

export default App;
