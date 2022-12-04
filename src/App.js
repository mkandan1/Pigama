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

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/Oauth/Login' element={< Login />}></Route>
                 <Route exact path='/trendings' element={< Trendings />}></Route>
                 <Route exact path='/pigama/terms' element={< Terms />}></Route>
                 <Route exact path='/test' element={< Test />}></Route>
                 <Route exact path='/pigama/privacy' element={< Privacy />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  

export default App;
