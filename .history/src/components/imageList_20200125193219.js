import React from 'react';

const imageList = (props) => {

    const images = props.images.map(({id, description, urls})=> {
        return <img key={id} src={urls.regular} alt={description}/>
    })

    return <div>{images}</div>;
}