import React, { useEffect, useRef } from 'react'

import './CircleText.css'

const CircleText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const text = 'FRONT-END WEB DEVELOPER'; // متن پیش‌فرض
    textElement.innerHTML = text.split('').map(
      (char, i) => `<span class="textSpan" style='transform:rotate(${i * 14.5}deg)'>${char}</span>`
    ).join('');
  }, []);

  return (
    <div className='d-none d-lg-block' style={{position:'absolute', bottom:'-40px' , right:'200px'}}>
      <div className='circle'>
        <div className='logo'></div>
        <div className='text'>
          <p ref={textRef}></p>
        </div>
      </div>
    </div>

  );
}

export default CircleText