// *----------* App modules *----------*
import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

// *----------* Material UI *----------*



class App extends Component {

  // *----------* Component *----------*
  state = {
    galleryList : []
  }

  componentDidMount(){
    // Lifecycle method
    // Runs once when component mounts to dom
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" />
        <button onClick={this.getGallery}> Click me! </button>
        <p>{JSON.stringify(this.state.galleryList)}</p>
      </div>
    );
  }
}

export default App;
