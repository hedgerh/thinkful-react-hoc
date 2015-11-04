import React, { Component } from 'react';
import axios from 'axios';
import {
  CLIENT_ID,
  CLIENT_SECRET
} from '../constants';

const AUTH = btoa(CLIENT_ID + ':' + CLIENT_SECRET);
const API_URL = 'https://api.shutterstock.com/v2/images/search';

export default (ComposedComponent, query) => class extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }
  componentDidMount() {
    axios.get(API_URL, {
      params: {
        query: query
      },
      headers: {
        Authorization: 'Basic ' + AUTH
      }
    }).then(response => {
      const images = response.data.data.map(image => {
          return {
              url: image.assets.preview.url,
              id: image.id,
              alt: image.description
          };
      });
      
      this.setState({
          images: images
      });
    }.bind(this));
  }
  render() {
    return <ComposedComponent {...this.props} images={this.state.images} title={query}/>;
  }
};