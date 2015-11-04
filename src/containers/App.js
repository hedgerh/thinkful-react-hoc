import React, { Component } from 'react';
import fetchImages from '../components/FetchImages';
import Gallery from '../components/Gallery';
import { API_URL } from '../constants';

const SlothGallery = fetchImages(Gallery, 'sloth');
const SpaceGallery = fetchImages(Gallery, 'space');

export default class App extends Component {
  render() {
    return (
      <div>
        <SlothGallery/>
        <SpaceGallery/>
      </div>
    );
  }
}
