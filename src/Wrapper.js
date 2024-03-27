import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './index.css'

const Wrapper = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Container>
                <Home />
            </Container>
        </div>
    )
}

export default Wrapper