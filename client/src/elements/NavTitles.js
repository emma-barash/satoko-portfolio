import styled from 'styled-components';

export const StyledCtwo = styled.h2`
    margin-bottom: 20px;
    position: relative;
    /* color: #D19C4C; */
    left: 70px;
    @media (max-width: 1245px){
        left: 0;
    }
    @media(max-width: 800px){
        /* font-size: 25px; */
    }
`;
export const StyledCeramicstwo = styled.h2`
    margin-bottom: 20px;
    position: relative;
    left: 70px;
    color: #D19C4C;
    /* color: black; */
    @media (max-width: 1245px){
        left: 0;
    }
    @media(max-width: 800px){
        font-size: 16px;
    }
`;

export const StyledHtwo = styled(StyledCtwo)`
    &:hover{
        /* color: #c8c5aa; */
        color: black;
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
    color: black;
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
    color: black;
    @media(max-width: 800px){
        margin: 3px;
        left: 0;
        float: bottom;
    }
`;

export const StyledBtwo = styled(StyledCtwo)`
    position: relative;
    left: 120px;
    color: black;
    @media(max-width: 800px){
        margin: 3px;
        left: 0;
        float: bottom;
    }
`;

export const StyledDottwo = styled(StyledCtwo)`
    position: relative;
    left: 170px;
    color: black;
    @media(max-width: 800px){
        margin: 3px;
        left: 0;
        float: bottom;
    }
`;