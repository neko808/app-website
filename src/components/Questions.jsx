import React from 'react'


import { Layout, Description, Image, Hide } from '../styles';
import styled from 'styled-components';


const Questions = () => {
    return(
        <Faq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium delectus, ut aut possimus natus fugiat rem iste quidem eaque accusamus dolore, at omnis temporibus deleniti sit odio obcaecati quasi veniam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium delectus, ut aut possimus natus fugiat rem iste quidem eaque accusamus dolore, at omnis temporibus deleniti sit odio obcaecati quasi veniam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium delectus, ut aut possimus natus fugiat rem iste quidem eaque accusamus dolore, at omnis temporibus deleniti sit odio obcaecati quasi veniam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium delectus, ut aut possimus natus fugiat rem iste quidem eaque accusamus dolore, at omnis temporibus deleniti sit odio obcaecati quasi veniam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(Layout)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }

`

export default Questions