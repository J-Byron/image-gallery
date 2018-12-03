import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';


const styles = {
    card: {
        height: '60px',
        width: '60%',
        margin: '40px 20%',
        backgroundColor: '#fffcca'
    },
    textField: {
        
      },
    searchButton: {

    }
};

class Searchbar extends Component {
    state = {
        input: ''
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <TextField
                    label="Search Posts"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </Card>
            );
    }
}
export default withStyles(styles)(Searchbar);