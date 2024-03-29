import React from 'react'

import aboutImage from '../../Assets/images/about-img.jpg'

import { Row, Col, Image, Container } from 'react-bootstrap'
import './AboutMe.css'
import CircleText from './EffectCircleText/CircleText'

const AboutMe = () => {





  return (
    <div className='about-me'>
      <Container>
        <Row className='g-3'>
          <Col xl={6} className='text-center text-xl-start' style={{ position: 'relative' }}>
            <Image src={aboutImage} alt='aboutImage' className='rounded-4 about-img' />
            <CircleText />
          </Col>
          <Col xl={6} className='d-flex flex-column align-items-center d-xl-block mt-5'>
            <p className='fw-bolder d-none d-xl-block title-about'>ABOUT ME</p>
            <p className='fs-3 fw-bold p-text'>Front-end React Developer based in Iran, Tehran

              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className='mb-2' viewBox="0 0 512 512">
                <path fill="#d5dee4" d="M256 504.575c-13.382 0-18.231-10.848-18.231-24.23l-6-323.28c0-13.382 10.848-24.23 24.23-24.23s24.23 10.848 24.23 24.23l-6 323.28c.001 13.382-4.847 24.23-18.229 24.23"></path>
                <path fill="#bccbd3" d="M256 132.834c-13.382 0-24.23 10.848-24.23 24.23l1.752 94.386C240.745 253.119 248.27 254 256 254s15.255-.881 22.479-2.549l1.752-94.386c-.001-13.382-10.849-24.231-24.231-24.231"></path>
                <circle cx={256} cy={112} r={111} fill="#ff473e"></circle>
                <ellipse cx={194.399} cy={60.749} fill="#fd7085" rx={19.076} ry={32.428} transform="rotate(33.488 194.39 60.752)"></ellipse>
              </svg>
            </p>
            <p className='p-text about-content'>
              Hi, I'm a junior frontend developer. I love designing and coding and I'm always looking to learn new things to create engaging and responsive user experiences.
            </p>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default AboutMe











// import React from 'react';
// import './CircleText.css'; // فرض بر این است که استایل‌های CSS در فایل CircleText.css ذخیره شده‌اند

// function CircleText({ imageSrc, text }) {
//   return (
//     <div className="circle-container">
//       <img src={imageSrc} alt="مرکز دایره" className="center-image"/>
//       <div className="circle-text">
//         {text.split('').map((char, index) => (
//           <span key={index} style={{ transform: `rotate(${index * 360 / text.length}deg)` }}>
//             {char}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CircleText;


// .circle-container {
//   position: relative;
//   width: 200px; /* عرض دایره */
//   height: 200px; /* ارتفاع دایره */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .center-image {
//   position: absolute;
//   width: 100px; /* عرض عکس */
//   height: 100px; /* ارتفاع عکس */
//   z-index: 1;
// }

// .circle-text {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// }

// .circle-text span {
//   position: absolute;
//   transform-origin: bottom center;
// }