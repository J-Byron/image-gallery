import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

// This component will act as the container for each card we display
export default class GalleryList extends Component {
    render(){

        // galleryList deconstructs the galleryList from parent and builds a gallery item from it. Gallery list is an array of galleryItems
        const galleryList = this.props.galleryList.map((item)=>{
            //{ id: , path: , description:, likes: }
            return (
                // Thinking you'd include gallery item here and send it the parts <GalleryItem item={item}>
                <GalleryItem key ={item.id} item={item}/>
            );
        })

        return(
            <ul style= {{padding: 0 + 'px'}} > {galleryList} </ul>
        )
    }
}