import React from 'react';

class ImageCard extends React.Component {
    render(){
        <div>
            <img 
            alt={this.props.image.description}
            src={this.props.image.urls.regular}
            />
        </div>
    }
}

export default ImageCard;