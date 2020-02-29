import React from 'react';
import '../css/imageList.css';

const imageList = (props) => {

    const images = props.images.map(({id, description, urls})=> {
        return <img key={id} src={urls.small} alt={description}/>
    })

    return <div>{images}</div>;
}


export default imageList;