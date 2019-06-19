import styled from 'styled-components';


export const HiddenSatoko = styled.h2`
    position: absolute;
    text-align: center;
    top: 50%;
    right: 20px;
    color: ${props => props.toggler && 'black'};
    z-index: 1;
    cursor: pointer;
`;
