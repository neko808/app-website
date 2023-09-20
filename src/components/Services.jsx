import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faScissors, faDroplet  } from '@fortawesome/free-solid-svg-icons'
import bycicle from '../img/bycicle.jpg'

const Services = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> service.</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                             <FontAwesomeIcon icon={faPencil} />
                             <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEraser} />
                             <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faScissors} />
                             <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faDroplet} />
                             <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={bycicle} alt="bycicle" />
            </div>
        </div>
    )
}

export default Services