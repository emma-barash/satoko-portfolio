import styled from 'styled-components';

export const HiddenSatoko = styled.h2`
    position: absolute;
    text-align: center;
    top: 50%;
    right: 20px;
    visibility: none; 
    transition: color 0.2s linear;
    &:hover {
        visibility: visible;
        color: white;
        cursor: pointer;
        transition: color 2s linear;
    }
`;