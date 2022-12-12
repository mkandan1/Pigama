import './assets/css/App.css';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Login from './components/Oauth/Login/Login';
import Trendings from './components/Trendings/Trendings'
import Privacy from './components/privacy-terms/Privacy';
import Terms from './components/privacy-terms/Terms';
import Test from './components/Test/Test';
import VideoEditing from './components/Trendings/articles/videoEditing';
import SignUpMiddleWare from './components/Oauth/Singup/SignUpMiddleWare';
import ForgetPassword from './components/Oauth/Login/ForgetPassword';
import MyAccountMiddleWare from './components/myAccount/myAccountMiddleWare';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import config from './config';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { authState: false, uid: "" };
    }


    fetchUid() {
        const auth = getAuth(config)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({
                    authState: true,
                    uid: user.uid
                })
            }
        })
    }
    componentWillMount() {
        this.fetchUid()
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route exact path='/' element={< Home />}></Route>
                        <Route path='/Oauth/login' element={< Login />}></Route>
                        <Route path='/Oauth/Signup' element={< SignUpMiddleWare />}></Route>
                        <Route path='/trendings' element={< Trendings />}></Route>
                        <Route path='/forgetPassword' element={<ForgetPassword />}></Route>
                        <Route path={`/myAccount/${this.state.uid}`} element={<MyAccountMiddleWare />}></Route>
                        <Route path='/pigama/terms' element={< Terms />}></Route>
                        <Route path='/article/video-editing-beginners' element={< VideoEditing />}></Route>
                        <Route path='/test' element={< Test />}></Route>
                        <Route path='/pigama/privacy' element={< Privacy />}></Route>
                    </Routes>
                    <Routes>
                        <Route path='/trendings' element={< Trendings />}></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}


export default App;
