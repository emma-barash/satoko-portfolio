import React from 'react';
import { CrudButton } from '../elements/index'

const DisplayImages = props => {
    console.log(props)
    return (
            <div style={{display: 'grid', gridColumn: '1 / -1'}}>
        { props.token && props.progress < 100 ?
            <progress max="100" value={props.progress}/>
            :
            null
        }
        <img height='200px' width='300px' src={props.imgUrl || 'http://via.placeholder.com/300x400'} alt='uploaded item'/>
        {props.token ?
        <CrudButton onClick={() => props.delete(props._id)}>delete</CrudButton>
        :
        null
        }
        {/* {props.token ?
        <CrudButton>update</CrudButton>
        :
        null
        } */}
        </div>
    );
};

export default DisplayImages;