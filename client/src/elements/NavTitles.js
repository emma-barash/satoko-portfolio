import styled from 'styled-components';

export const StyledCtwo = styled.h2`
    margin-bottom: 20px;
    position: relative;
    left: 70px;
`;

export const StyledHtwo = styled(StyledCtwo)`
    &:hover{
        color: #c8c5aa;
        cursor: pointer;
    }
    @media(max-width: 800px){
        margin: 3px;
        left: 0;
        float: bottom;
    }
`;

export const StyledAtwo = styled(StyledCtwo)`
    position: relative;
    margin-top: 60px;
    left: 20px;
    @media(max-width: 800px){
        margin: 3px;
        left: 0;
        float: bottom;
    }
`;
export const StyledGtwo = styled(StyledCtwo)`
    position: relative;
    left: 100px;
    @media(max-width: 800px){
        margin: 3px;
        left: 0;
        float: bottom;
    }
`;

export const StyledBtwo = styled(StyledCtwo)`
    position: relative;
    left: 120px;
    @media(max-width: 800px){
        margin: 3px;
        left: 0;
        float: bottom;
    }
`;

export const StyledDottwo = styled(StyledCtwo)`
    position: relative;
    left: 170px;
    @media(max-width: 800px){
        margin: 3px;
        left: 0;
        float: bottom;
    }
`;