import React, { Component } from "react";
import '../../assets/css/Header.css';

//Logo
import logo from '../../assets/images/Logo.png'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,
        }
    }

    render() {
        return (
            <nav class="container navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li class="nav-item ms-0 me-lg-3">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item ms-0 me-lg-3">
                                <a class="nav-link" href="trendings">Trendins</a>
                            </li>
                            <li class="nav-item ms-0 me-lg-5">
                                <a class="nav-link" href="/contact-us">Contact Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href={this.state.isLoggedIn ? "/articles": "/Oauth/login"}>{this.state.isLoggedIn ? 'Go to Articles' : 'Login | Sign Up'}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;