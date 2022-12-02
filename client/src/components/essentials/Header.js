import React, { Component } from "react";
import '../../assets/css/Header.css';

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
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item ms-0 me-lg-3">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item ms-0 me-lg-3">
                                <a className="nav-link" href="trendings">Trendings</a>
                            </li>
                            <li className="nav-item ms-0 me-lg-5">
                                <a className="nav-link" href="/contact-us">Contact Us</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link btn btn-warning ps-3 pe-3 fs-7" href={this.state.isLoggedIn ? "/articles": "/Oauth/login"}>{this.state.isLoggedIn ? 'Go to Articles' : 'Login | Sign Up'}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
