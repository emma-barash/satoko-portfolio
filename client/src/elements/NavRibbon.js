import styled from 'styled-components';

export const NavRibbon = styled.div`
    justify-content: center;
    font-family: "Trebuchet MS", Times;
    width: 25%;
    height: 100%;
    text-align: left;
    display: flex;
    flex-flow: column;
    margin-left: 70px;
    top: 50px;
    color: #e3e3e3;
    font-weight: lighter;
    @media(max-width: 1345px){
        display: flex;
        flex-flow: column;
        clear: left;
    }
`;
