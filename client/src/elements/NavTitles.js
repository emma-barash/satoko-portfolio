import styled from 'styled-components';

export const StyledCtwo = styled.h2`
    margin-bottom: 20px;
`;

export const StyledHtwo = styled(StyledCtwo)`
    &:hover{
        color: #c8c5aa;
        cursor: pointer;
    }
`;