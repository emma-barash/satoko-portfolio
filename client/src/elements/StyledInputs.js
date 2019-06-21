import styled from 'styled-components';

export const StyledAuthInput = styled.input` 
    margin: 10px;
    height: 20px;
    font-size: 18px;
    border-radius: 25px 5px;
    padding-left: 10px;
    &:focus{
        outline: none;
    }
    @media(max-width: 800px){
        width: 75%;
        font-size: 12px;
        position: relative;
        left: 20px;
        top: 10px;
        padding: 10px;
    }
`;

export const StyledFileUploadInput = styled(StyledAuthInput)`
    @media(max-width: 545px){
        margin: 15px;
        height: 40px;
        font-size: 18px;
        width: 95px;
        border-radius: 25px 5px;
        bottom: 40px;
        padding-left: 10px;
        &:focus{
            outline: none;
        }
    }
`;

export const StyledBlogDescriptionInput = styled(StyledAuthInput)`
    position: absolute;
    top: 0;
    right: 20%;
    width: 55%;
`;

export const StyledBlogTitleInput = styled(StyledAuthInput)`
    position: absolute;
    bottom: 100%;
    right: 20%;
    width: 55%;
`;

export const StyledAboutTitleInput = styled(StyledAuthInput)`
    position: absolute;
    bottom: 40%;
    right: 32%;
    width: 35%;
`;

