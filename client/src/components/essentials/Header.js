import React, { Component } from "react";
import '../../assets/css/Header.css';
import {Link} from 'react-router-dom'

//Logo
import logo from '../../assets/images/Logo.png'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
        }
    }

    render() {
        return (
            <nav className="container navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item ms-0 me-lg-3">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item ms-0 me-lg-3">
                                <Link className="nav-link" to="/trendings">Trendings</Link>
                            </li>
                            <li className="nav-item ms-0 me-lg-5">
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link btn btn-warning ps-3 pe-3 fs-7" to={this.state.isLoggedIn ? "/articles": "/Oauth/login"}>{this.state.isLoggedIn ? 'Go to Articles' : 'Login | Sign Up'}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
