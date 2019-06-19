import styled from 'styled-components'

export const StyledAuthForm = styled.form`
    position: relative;
    border: 1px solid white;
    border-radius: 95px 5px;
    bottom: 200px;
    text-align: center;
    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        bottom: 5px;
    }
`;

