
// *----------* Modules *----------*
import React, { Component } from 'react';
import swal from 'sweetalert2'

// *----------* Material UI *----------*
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
    card: {
        height: 300,
        width: 345,
        margin: 10,
        maxWidth: 345,
        display: 'inline-block',
        backgroundColor: '#6d655948',
        boxShadow: '5px 10px 8px rgba(20, 20, 20, 0.2)',
    },
    details: {
        height: 300,
        width: 345,
        padding: '130px 0px',
        color: '#fffcca',
        fontSize: '40px',
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    }
};

class GalleryAddItem extends Component {

    handleClick = () => {
        swal({
            title: 'Create a task',
            html:
                '<input id="imgIn" class="swal2-input" placeholder="Insert an image">' +
                '<input id="descIn" class="swal2-input" placeholder="Write a short description here">',
            confirmButtonText: 'Post',
            inputPlaceholder: "ex. Submit Prime feedback",
            showCancelButton: true,
            animation: "slide-from-top",
            preConfirm: () => {
                return [
                    document.getElementById('imgIn').value,
                    document.getElementById('descIn').value
                ]
            }
        }).then((result) => {
                 const values = result.value
                // Post to DB
                //postTask(result.value);
                if(values !== undefined){
                    if((values[0] !== '') && (values[1] !== '')){
                        const item = {imgPath: values[0],description: values[1]};
                        console.log(`${item.description} ${item.imgPath}`);
                        this.props.addItem(item);
    
                    }
                }
        })
    }

    render() {

        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <div className={classes.details} onClick={this.handleClick}>
                        Add meme
                        </div>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(GalleryAddItem);