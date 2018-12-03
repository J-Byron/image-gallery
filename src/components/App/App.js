// *----------* React Modules *----------*
import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

// *----------* Sub-components *----------*
import GalleryList from '../GalleryList/GalleryList';
//import Searchbar from '../Searchbar/Searchbar';

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

  addItem = (item) =>[
    Axios.post('/gallery',item)
    .then((response)=>{
      this.getGallery();
    })
    .catch((err)=>{
      console.log(`Error from Server ${err}`);
    })
  ]

  deleteItem = (id) =>{
    Axios.delete(`/gallery/delete/${id}`)
    .then((response)=>{
      this.getGallery()
    }).catch((err)=>{
      console.log(`Error from server ${err}`);
    })
  }

  increaseLikes = (id) =>{
    console.log(`${id}`);
    Axios.put(`/gallery/like/${id}`).then((response)=>{
      this.getGallery();
    }).catch((err)=>{
      console.log(`Error from server: ${err}`);
    })
  }

  // *----------* Render sub-Components *----------*
  render() {
    return (
      <div className="App" style={{backgroundColor: '', height: 100 + '%'}}>
        <header className="App-header" style={{backgroundColor:'#537780'}}>
          <h1 className="App-title" style={{color:'#fffcca',fontSize: 40+'px' }}></h1>
        </header>
        {/* <Searchbar/> */}
        <GalleryList deleteItem= {this.deleteItem} addItem={this.addItem} increaseLikes={this.increaseLikes} galleryList={this.state.galleryList}/>
      </div>
    );
  }
}

export default App;
