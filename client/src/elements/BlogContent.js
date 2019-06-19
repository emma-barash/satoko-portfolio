import styled from 'styled-components';

export const BlogContainer = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 30vh;
    width: 30vw;
    margin: auto;
    position: absolute;
    top: 35%;
    right: 35%;
`;

export const FlexBlogs = styled.div`
    display: flex;
    flex-flow: column;
    width: 50%;
    margin-left: 25%;
    margin-bottom: 15px;
    margin-top: ${props => props.token ? '550px' : '200px'};
    @media(max-width: 545px){
        text-align: center;
    }
`;

export const BlogImages = styled.img`
    box-shadow: 5px 5px 5px #808080;
    /* position: relative;
    left: 15%; */
    margin: auto;
    @media(max-width: 545px){
        margin: auto;
        height: 200px;
        width: 250px;
    }
`;