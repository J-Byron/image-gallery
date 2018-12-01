// *----------*  React Modules *----------*
import React, { Component } from 'react';

// *----------* Material UI *----------*
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        height: 300,
        width: 345,
        margin: 10,
        maxWidth: 345,
        display: 'inline-block'
    },
    media: {
        height: 250,
    },
};

// *----------*  Gallery Item *----------*
class GalleryItem extends Component {
    state = {
        isFlipped : false
    }

    handleMediaClick = () =>{
        this.setState({
            isFlipped: !this.state.isFlipped
        },()=>{
            console.log(this.state);
        })

        
    }

    render() {
        const { classes } = this.props;
        const item = this.props.item;

        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={item.path}
                        onClick={this.handleMediaClick}
                    />
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Like
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                </CardActions>
            </Card>

        );
    }
}

export default withStyles(styles)(GalleryItem);