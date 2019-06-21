import styled from 'styled-components';

export const LandingImage = styled.img`
    height: 100vh;
    width: 45vw;
    border-radius: 100%;
    position: absolute;
    top: 0px;
    right: 33%;
    box-shadow: 10px 19px 71px 10px #2a2a2a;
    @media(max-width: 1345px){
        display: block;
        top: 90px; 
        /* height: 400px; */
        /* width: 35vw; */
        float: top; 
    }
    @media(max-width: 1224px){
        right: 20%;
        height: 50vw;
    }
    @media (max-width: 821px){
        display: block;
        position: static;
        height: 400px;
        width: 80%;
        float: top;
    }
    @media(max-width: 545px){
         height: 330px; 
         width: 70%;
    }
`;

export const FormImage = styled.img`
    height: 650px;
    position: absolute;
    right: 530px;
    top: 80px;
    width: 20vw;
    transform: rotate(270deg);
    margin: 0;
    @media(max-width: 1270px){
        display: none;
    }
`;


        