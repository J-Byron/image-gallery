// *----------* React Modules *----------*
import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

// *----------* Sub-components *----------*
import GalleryList from '../GalleryList/GalleryList';

// *----------* Material UI *----------*



class App extends Component {

  // *----------* Component *----------*
  state = {
    galleryList : []
  }

  componentDidMount(){
    // Lifecycle method
    // Runs once when component mounts to dom
    this.getGallery()
  };

  // *----------*  Requests  *----------*
  getGallery = () => {
    Axios.get('/gallery').
      then((response) => {
        this.setState({
          galleryList: response.data
        })
      }).catch((err) => {
        console.log(`Caught error: ${err}`);
      });
  }


  // *----------* Render sub-Components *----------*
  render() {
    return (
      <div className="App" style={{backgroundColor: '', height: 100 + '%'}}>
        <header className="App-header">
          <h1 className="App-title">Gallery of my Memes</h1>
        </header>
        <GalleryList galleryList={this.state.galleryList}/>
      </div>
    );
  }
}

export default App;
