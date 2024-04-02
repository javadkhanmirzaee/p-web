import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Footer from './components/Footer/Footer';


const Wrapper = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Home />
            <AboutMe />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default Wrapper