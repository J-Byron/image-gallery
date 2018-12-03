// *----------*  React Modules *----------*
import React, { Component } from 'react';

// *----------* Material UI *----------*
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Thumb_up from '@material-ui/icons/ThumbUp';
import Edit from '@material-ui/icons/Edit';

// *----------* Styling *----------*

const styling = {
    pallete : {background:'#537780',icons:'#11d3bc',footerBar:'#fffcca'},
    text : {color:'#fffcca',descriptionSize:'20px',likeSize:'20px',family:'Helvetica Neue, Helvetica, Arial, sans-serif'}
}

const styles = {
    card: {
        height: 300,
        width: 345,
        margin: 10,
        maxWidth: 345,
        display: 'inline-block',
        backgroundColor: styling.pallete.background,
        boxShadow: '0px 0px 30px rgba(20, 20, 20, 0.3)'
    },
    media: {
        height: 240,
    },
    details: {
        height: 30,
        textAlign: 'center',
        padding: '70px 0px',
        color: styling.text.color,
        fontFamily: styling.text.family,
        fontSize: styling.text.descriptionSize,
        margin:'35px 0px'
    },
    edit: {
        marginLeft: 'auto',
        marginRight: -8
    },
    p:{
        color: styling.text.color,
        fontFamily: styling.text.family,
        fontSize: styling.text.likeSize
    }
};

// *----------*  Gallery Item *----------*
class GalleryItem extends Component {
    // *----------* State *----------*
    state = {
        isFlipped: false
    }

    // *----------* Components *----------*
    cardComponent = () => {
        const { classes } = this.props;
        const item = this.props.item;
        console.log(`ID: ${item.id} - ${(this.state.isFlipped) ? 'Back': 'Front'}`);
        if (this.state.isFlipped) {
            return (
                <Card className={classes.card}>
                    <CardActionArea>
                        <div className={classes.details} onClick={this.handleMediaClick}>
                            {item.description}
                        </div>
                    </CardActionArea>
                    <CardActions style={{backgroundColor: styling.pallete.footerBar}}>
                        <IconButton onClick={event=>this.props.increaseLikes(item.id)}>
                            <Thumb_up style={{color: styling.pallete.icons}}/>
                        </IconButton>
                        <p>{item.likes}</p>
                        <IconButton className={classes.edit} >
                            <Edit style={{color: styling.pallete.icons}} />
                        </IconButton>
                    </CardActions>
                </Card>
            );

        } else {
            return (
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={item.imgpath}
                            onClick={this.handleMediaClick}
                        />
                    </CardActionArea>
                    <CardActions style={{backgroundColor: styling.pallete.footerBar}}>
                        <IconButton onClick={event=>this.props.increaseLikes(item.id)}>
                            <Thumb_up style={{color: styling.pallete.icons}}/>
                        </IconButton>
                        <p>{item.likes}</p>
                        <IconButton className={classes.edit}>
                            <Edit style={{color: styling.pallete.icons}}/>
                        </IconButton>
                    </CardActions>
                </Card>
            );
        }
    }

    // *----------* Handlers *----------*
    handleMediaClick = () => {
        // Change state of card
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    render() {
        // Card is rerendered whenever state is changes (description displayed)
        return this.cardComponent();
    }
}

export default withStyles(styles)(GalleryItem);