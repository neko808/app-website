import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faScissors, faDroplet  } from '@fortawesome/free-solid-svg-icons'
import bycicle from '../img/bycicle.jpg'


import { Layout, Description, Image, Hide } from '../styles';
import styled from 'styled-components';

const Services = () => {
    return(
        <ServicesSection>
            <Description>
                <h2>High <span>quality</span> service.</h2>
                <Cards>
                    <div className="card">
                        <div className="icon">
                             <FontAwesomeIcon icon={faPencil} size="lg" color="#2b4ad7" />
                             <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                             <FontAwesomeIcon icon={faEraser} size="lg" />
                             <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                             <FontAwesomeIcon icon={faScissors} size="lg" />
                             <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                             <FontAwesomeIcon icon={faDroplet} size="lg" />
                             <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Cards>
            </Description>
            <Image>
                <img src={bycicle} alt="bycicle" />
            </Image>
        </ServicesSection>
    )
}


const ServicesSection = styled(Layout)``
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    .card{
        flex-basis: 50%;
        padding: 2rem;
        .icon{
            display: flex;
            align-items: center;
            h3{
                margin-left: 1rem;
            }
        }
    }
`

export default Services