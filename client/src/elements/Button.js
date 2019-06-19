import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 25px 5px;
    font-family: "Trebuchet MS", Times;
    height: 25px;
    font-size: 15px;
    margin-top: 10px;
    background-color: #D19C4C;
    margin-bottom: 3px;
    width: 40%;
    &:focus{
        outline: none;
    }
    @media(max-width: 765px){
        width: 70%;
        right: 5px;
    }
`;

export const LogoutButton = styled(Button)`
    position: fixed;
    float: right;
    right: 40px;
    bottom: 30px;
    width: 5%;
    @media(max-width: 765px){
        width: 15%;
        right: 5px;
    }
`;

export const CrudButton = styled(Button)`
    width: 20%;
    margin-top: 20px;
    /* display: inline-block;
    position: absolute;
    top: 57%;
    margin: 5px;
    right: 45%; */
    @media(max-width: 765px){
        width: 20%;
        right: 5px;
    }
`;

export const UpdateButton = styled(Button)`
    width: 17%;
    margin-top: 20px;
    display: inline-block;
    /* position: absolute;
    top: 87%;
    margin: 5px;
    right: 45%; */
`;

export const DeleteButton = styled(Button)`
    width: 17%;
    margin-top: 20px;
    display: inline-block;
    /* position: absolute;
    top: 87%;
    margin: 5px;
    right: 25%; */
`;
export const PostButton = styled(Button)`
    width: 15%;
    margin-top: 20px;
    display: inline-block;
    position: absolute;
    top: 97%;
    margin: 5px;
    right: 43%;
`;

export const UploadButton = styled(Button)`
    position: absolute;
    left: 64%;
    width: 10%;
    @media(max-width: 545px){
        width: 70px;
    }
`;


