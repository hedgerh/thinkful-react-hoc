import React, { Component, PropTypes } from 'react';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.renderImages = this.renderImages.bind(this);
  }

  renderImages() {
    return this.props.images.map(image => {
      return ( 
        <li key={ image.id }>
          <img src={ image.url } alt={ image.alt } style={ { width: '100px' } }/>
        </li>
      );
    });
  }

  render() {
    const listStyles = { 
      display: 'flex', 
      border: '1px solid #000',
      'flex-flow': 'row wrap', 
      'list-style-type': 'none' 
    };

    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul style={ listStyles }>
          { this.renderImages() }
        </ul>
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array
}

Gallery.defaultProps = {
  images: []
}
