import React from 'react';
import light from '../img/light.jpg';
//import styled
import styled from 'styled-components';

import { Layout, Description, Image, Hide } from '../styles';

function About() {
  return (
    <Layout>
        <Description>
            <div className="title">
                <Hide>
                    <h2>We work to make</h2>
                </Hide>
                <Hide>
                    <h2>your <span>dreams</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true</h2>
                </Hide>
            </div>
            <p>Contact us for any information. We have the things you need.</p>
            <button>Contact us</button>
        </Description>
        <Image>
            <img src={light} alt="light with black" />
        </Image>
    </Layout>
  )
}


//Styled components






export default About