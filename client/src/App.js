import './assets/css/App.css';
import Home from './Home';
import Header from './components/essentials/Header';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Footer from './components/essentials/Footer';
import Signup from './components/Oauth/Signup/Signup';
import Login from './components/Oauth/Login/Login';
import Trendings from './components/Trendins/trendins'

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Header/>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/Oauth/Login' element={< Login />}></Route>
                 <Route exact path='/Oauth/Signup' element={< Signup />}></Route>
                 <Route exact path='/trendings' element={< Trendings />}></Route>
          </Routes>
          <Footer/>
          </div>
       </Router>
   );
  }
}
  

export default App;
