import React from 'react';
import { UpdateButton, DeleteButton } from '../elements/index';

const AboutStuff = props => {
    const { title, content, deleteAbout, updateAbout, _id, token } = props
    return (
        <div>
            <h2>{ title }</h2>
            <p>{ content }</p>
            { token && 
            <> 
                <UpdateButton onClick={ () => updateAbout(_id) }>update</UpdateButton>
                <DeleteButton onClick={ () => deleteAbout(_id) }>delete</DeleteButton> 
            </> }
        </div>
    );
};

export default AboutStuff;