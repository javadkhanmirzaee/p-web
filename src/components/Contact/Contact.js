import React from 'react'

import './Contact.css'
import { Container, Row, } from 'react-bootstrap'

const Contact = () => {
    return (
        <div className='contact'>
            <Container>
                <Row className='row-me'>
                    <p className='fw-bolder text-center text-xl-start header-content'>CONTACT</p>
                    <p className='text-center text-xl-start fs-3 fw-bold'>Don't be shy! Hit me up! 👇</p>
                </Row>
                <div className='d-xl-flex mt-5'>
                    <div className='d-flex justify-content-center content-location'>
                        <div className='box-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.9em" height="1.9em" viewBox="0 0 20 20" style={{ margin: '10px' }}>
                                <path fill="#147efb" d="M16.219 1.943c.653.512 1.103 1.339 1.287 2.205a.474.474 0 0 1 .065.026l2.045.946a.659.659 0 0 1 .384.597v12.367a.665.665 0 0 1-.85.634l-5.669-1.6l-6.74 1.858a.674.674 0 0 1-.371-.004L.474 17.217a.66.66 0 0 1-.474-.63V3.998c0-.44.428-.756.855-.632l5.702 1.661l2.898-.887a.734.734 0 0 1 .122-.025c.112-.656.425-1.286.95-1.9c.623-.73 1.716-1.158 2.781-1.209c1.105-.053 1.949.183 2.91.936M1.333 4.881v11.215l4.87 1.449V6.298zm8.209.614l-2.006.613v11.279l5.065-1.394v-3.295c0-.364.299-.659.667-.659c.368 0 .666.295.666.66v3.177l4.733 1.335V6.136l-1.12-.52c-.019.11-.043.218-.073.323A6.134 6.134 0 0 1 16.4 8.05l-2.477 3.093a.67.67 0 0 1-1.073-.037l-2.315-3.353c-.382-.534-.65-1.01-.801-1.436a3.744 3.744 0 0 1-.192-.822m3.83-3.171c-.726.035-1.472.327-1.827.742c-.427.5-.637.968-.679 1.442c-.05.571-.016.974.126 1.373c.105.295.314.669.637 1.12l1.811 2.622l1.91-2.385a4.812 4.812 0 0 0 .841-1.657c.24-.84-.122-2.074-.8-2.604c-.695-.545-1.22-.692-2.018-.653m.138.697c1.104 0 2 .885 2 1.977a1.988 1.988 0 0 1-2 1.977c-1.104 0-2-.885-2-1.977s.896-1.977 2-1.977m0 1.318a.663.663 0 0 0-.667.659c0 .364.299.659.667.659a.663.663 0 0 0 .666-.66a.663.663 0 0 0-.666-.658"></path>
                            </svg>
                        </div>
                        <div>
                            <p className='fw-bold m-0 text-icon-content'>Location</p>
                            <p className='content-text'>Iran, Tehran</p>
                        </div>

                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='box-icon box-mail'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.9em" height="1.9em" viewBox="0 0 24 24" style={{ margin: '10px' }}>
                                <path fill="#147efb" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className='fw-bold m-0 text-icon-content'>Mail</p>
                            <p className='content-text'>javad.kh043@gmail.com</p>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact