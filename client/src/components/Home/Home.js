import React, { Component } from 'react'
import './Intro.css'
import bg_hero from './bg_hero.png'
export class Home extends Component {
    render() {
        return (
            <div className='container mt-5 intro-container p-5'>
                <div className='intro_left-content row'>
                    <div className='col-12 col-lg-5 text-center text-lg-start mt-5 ms-md-2 ms-lg-5'>
                        <h1 className='left-content-heading'>Earn money by reading our articles for few hours</h1>
                        <p className='left-content-subtext mt-4'>Want to earn money online? you’re at right place to earn. By using our platform for few hours per day you can earn decend money</p>
                        <div className='d-flex d-lg-block justify-content-center'>
                            <button className='btn btn-warning btn--large mt-3 mt-lg-2 mb-5'>Sign Up</button>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 ps-5 mt-3 mt-lg-4 d-flex d-lg-block justify-content-center'>
                        <img src={bg_hero} alt="hero"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home