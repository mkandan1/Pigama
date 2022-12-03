import React, { Component } from 'react';
import Footer from './essentials/Footer';
import Header from './essentials/Header'
import Home from './Home/Home';

export class HomeMain extends Component {
  render() { return(
    <div className="HomePage">
      <Header />
      <Home />
      <Footer />
    </div>);
  }
}

export default HomeMain