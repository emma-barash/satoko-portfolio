import styled from 'styled-components';

export const LandingImage = styled.img`
    height: 90vh;
    width: 45vw;
    border-radius: 100%;
    position: absolute;
    top: 40px;
    right: 35%;
    box-shadow: 10px 19px 71px 10px #2a2a2a;
    @media(max-width: 1345px){
        display: block;
        position: static;
        height: 400px;
        width: 50%;
        float: top;
    }
`;

export const FormImage = styled.img`
    height: 650px;
    position: absolute;
    right: 530px;
    top: 80px;
    width: 20vw;
    transform: rotate(270deg)
`;
