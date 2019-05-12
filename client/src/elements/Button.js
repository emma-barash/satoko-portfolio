import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 25px 5px;
    font-family: "Trebuchet MS", Times;
    height: 25px;
    font-size: 15px;
    margin-top: 10px;
    width: 40%;
    &:focus{
        outline: none;
    }
`;

export const LogoutButton = styled(Button)`
    position: fixed;
    float: right;
    right: 40px;
    bottom: 30px;
    width: 5%;
    display: inline;
`;

