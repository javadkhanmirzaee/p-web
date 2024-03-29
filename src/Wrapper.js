import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const Wrapper = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Home />
            <AboutMe />
        </div>
    )
}

export default Wrapper