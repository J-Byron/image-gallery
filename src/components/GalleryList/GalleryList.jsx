import React, { Component } from 'react';

export default class GalleryList extends Component {
    render(){

        const galleryList = this.props.galleryList.map((el)=>{
            //{ id: , path: , description:, likes: }
            return (
                // Thinking you'd include gallery item here and send it the parts
                <li key={el.id}> {el.path} {el.description} {el.likes}</li>
            );
        })

        return(
            <ul> {galleryList} </ul>
        )
    }
}