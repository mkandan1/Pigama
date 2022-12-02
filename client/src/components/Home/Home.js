import React, { Component } from 'react'
import './Intro.css'
import bg_hero from './bg_hero.png'
import article_1 from './Article_1.png';
import article_2 from './Article_2.png';

export class Home extends Component {
    render() {
        return (
            <div className='container'>

                {/* Intro section */}
                <div>
                    <div className='intro_left-content  mt-5 intro-container rounded-sm-bottom p-5 row'>
                        <div className='col-12 col-lg-5 text-center text-lg-start mt-5 ms-md-2 ms-lg-5'>
                            <h1 className='left-content-heading'>Earn money by reading our articles for few hours</h1>
                            <p className='left-content-subtext mt-4'>Want to earn money online? you’re at right place to earn. By using our platform for few hours per day you can earn decend money</p>
                            <div className='d-flex d-lg-block justify-content-center'>
                                <button className='btn btn-warning btn--large mt-3 mt-lg-2 mb-5'>Sign Up</button>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 ps-5 mt-3 mt-lg-4 d-flex d-lg-block justify-content-center'>
                            <img src={bg_hero} className="img-fluid" alt="hero"></img>
                        </div>
                    </div>
                </div>

                {/* How it's work section */}

                <div className='mt-5 pt-4 mb-5'>
                    <h1 className='section__title'>How it's works</h1>


                    <div className='d-flex jusitfy-content-center justify-content-lg-evenly flex-column align-items-center flex-lg-row mt-5'>
                        {/* Step 1 */}
                        <div className='d-flex flex-column align-items-center mt-2 mt-md-5 mt-lg-0 col-11 text-center col-md-6 col-lg-2 align-self-center align-self-lg-start'>
                            <div className='rounded-circle steps__number'>
                                <span>1</span>
                            </div>
                            <h3 className='step__title mt-4'>Create an Account</h3>
                            <button className='btn btn-warning mt-3'>Sign Up</button>
                        </div>
                        {/* Step 2 */}
                        <div className='d-flex flex-column align-items-center mt-4 mt-md-4 mt-lg-0 col-6 text-center col-md-6 col-lg-2 align-self-center align-self-lg-start'>
                            <div className='rounded-circle steps__number'>
                                <span>2</span>
                            </div>
                            <h3 className='step__title mt-4'>Set up payment method</h3>
                            <p className='step__description'>Enter your payment method details on our secure platform</p>
                        </div>
                        {/* Step 3 */}
                        <div className='d-flex flex-column align-items-center mt-4 mt-md-4 mt-lg-0 col-6 text-center col-md-6 col-lg-2 align-self-center align-self-lg-start'>
                            <div className='rounded-circle steps__number'>
                                <span>3</span>
                            </div>
                            <h3 className='step__title mt-4'>Read our articles</h3>
                            <p className='step__description'>Spend few hours to read our article</p>
                        </div>
                        {/* Step 4 */}
                        <div className='d-flex flex-column align-items-center mt-4 mt-md-4 mt-lg-0 col-6 text-center col-md-6 col-lg-2 align-self-center align-self-lg-start'>
                            <div className='rounded-circle steps__number'>
                                <span>4</span>
                            </div>
                            <h3 className='step__title mt-4'>Widthdraw</h3>
                            <p className='step__description'>Once you reach ₹100. You can place withdraw request.</p>
                        </div>
                    </div>
                </div>

                {/* How it's work section */}

                <div className='mt-5 pt-5 mb-5'>
                    <h1 className='section__title'>Articles</h1>

                    {/* Article category 1 */}
                    <div className='mt-5 row d-flex justify-content-evenly'>
                        <div className='articles__left col-12 col-md-7 col-lg-4'>
                            <img src={article_1} className="mb-3 img-fluid" alt="programming with laptop"/>
                            <span className='articles__label'>#Programming</span>
                            <h3 className='artciles__title mt-3'>Programming related articles</h3>
                            <p className='articles__description'>We publish programming related articles every week. The topic we discuss is not limited for this topic.</p>
                            <button className='btn btn-warning btn--small'>Go to articles</button>
                        </div>
                        <div className='articles__right col-12 col-md-7 col-lg-4 mt-4 mt-md-4 md-lg-0'>
                            <img src={article_2} className="mb-3 img-fluid" alt="programming with laptop"/>
                            <span className='articles__label'>#Sports</span>
                            <h3 className='artciles__title mt-3'>Sports related articles</h3>
                            <p className='articles__description'>We publish programming related articles every week. The topic we discuss is not limited for this topic.</p>
                            <button className='btn btn-warning btn--small'>Go to articles</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home