import styled from "styled-components";

export const Layout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid red;
    padding: 5rem 10rem;
    color: white;
`

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`

export const Image = styled.div`
    flex: 1;
    max-width: 500px;
    width: 100%;
    overflow: hidden;
    border: 1px solid yellow;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    } 
`

export const Hide = styled.div`
    overflow: hidden;
`