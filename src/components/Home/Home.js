import React from 'react'
import './Home.css'
import { Row, Col } from 'react-bootstrap'

import hi from '../../images/hello.svg'
import Skills from './Skills'

const Home = () => {
    return (
        <div className='home' id='home'>
            <Row className='g-3'>
                <Col xl={6} className='order-2 order-xl-1'>
                    <div>
                        <div className='display-3 fw-bold text-center text-lg-start'>Front-End React Developer
                            <img src={hi} alt='hi-icon' style={{ width: '60px', marginLeft: '20px' }} />
                        </div>
                        <p className='text-muted fw-medium text-center text-lg-start' style={{ fontSize: '20px', marginTop: '30px', lineHeight: '40px' }}>Hi , i'm Javad khanmirzaee . A passionate Front-end React Developer based in based in Iran, Tehran

                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className='mb-2' viewBox="0 0 512 512">
                                <path fill="#d5dee4" d="M256 504.575c-13.382 0-18.231-10.848-18.231-24.23l-6-323.28c0-13.382 10.848-24.23 24.23-24.23s24.23 10.848 24.23 24.23l-6 323.28c.001 13.382-4.847 24.23-18.229 24.23"></path>
                                <path fill="#bccbd3" d="M256 132.834c-13.382 0-24.23 10.848-24.23 24.23l1.752 94.386C240.745 253.119 248.27 254 256 254s15.255-.881 22.479-2.549l1.752-94.386c-.001-13.382-10.849-24.231-24.231-24.231"></path>
                                <circle cx={256} cy={112} r={111} fill="#ff473e"></circle>
                                <ellipse cx={194.399} cy={60.749} fill="#fd7085" rx={19.076} ry={32.428} transform="rotate(33.488 194.39 60.752)"></ellipse>
                            </svg>
                        </p>
                        <div className='text-center text-lg-start'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" className='me-3 home-icon'>
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 5v5m0-8v.01M12 16v-5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
                                </g>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" className='home-icon'>
                                <g fill="none">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                    <path fill="currentColor" d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.77 6.77 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.343 9.343 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.77 6.77 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9.081 9.081 0 0 0-2.125 1.045A11.432 11.432 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9.08 9.08 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A3.986 3.986 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14"></path>
                                </g>
                            </svg>

                        </div>

                    </div>

                </Col>
                <Col xl={6} className='order-1 order-xl-2'>
                    <div className='d-flex mb-5 justify-content-center justify-content-xl-end'>
                        <div className='blob'></div>
                    </div>
                </Col>

            </Row>
            <Skills />
        </div>
    )
}

export default Home
