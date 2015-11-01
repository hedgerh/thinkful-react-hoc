import React, { Component } from 'react';
import fetchImages from '../components/FetchImages';
import Gallery from '../components/Gallery';
import { API_URL } from '../constants';

const DogGallery = fetchImages(Gallery, API_URL, 'sloth');
const CatGallery = fetchImages(Gallery, API_URL, 'space');

export default class App extends Component {
  render() {
    return (
      <div>
        <DogGallery/>
        <CatGallery/>
      </div>
    );
  }
}
