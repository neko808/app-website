import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <StyledNav>
        <Link to="/">
            <h1><a>Logo</a></h1>
        </Link>
        
        <ul>
            <Link to="/" className='li'>
                <a>About Us</a>
            </Link>
            <Link to="/work" className='li'>
                <a>Our Work</a>
            </Link>
            <Link to="/contact" className='li'>
                <a>Contact Us</a>
            </Link>
        </ul>

    </StyledNav>
  )
}

const StyledNav = styled.nav`
    height: 70px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    border: 1px solid yellow;
    padding: 0rem 10rem;
    h1{
        padding: 1rem;
        border: 1px solid red;
        a{
            color: white;
            text-decoration: none;
        }
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        .li{
            padding: 1rem;
            position: relative;
            border: 1px solid red;
            margin-left: 3rem;

            a{
                color: white;
                text-decoration: none;
            }
        }
        
    }

`

export default Nav