import React from 'react';
import light from '../img/light.jpg';

function About() {
  return (
    <div>
        <div className='description'>
            <div className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>your <span>dreams</span> come</h2>
                </div>
                <div className="hide">
                    <h2>true</h2>
                </div>
            </div>
            <p>Contact us for any information. We have the things you need.</p>
            <button>Contact us</button>
        </div>
        <div className="image">
            <img src={light} alt="light with black" />
        </div>
    </div>
  )
}

export default About