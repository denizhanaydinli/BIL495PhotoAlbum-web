import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import tileData from '../data/tileData';
import red from '@material-ui/core/colors/red';
import ImgMediaCard from './photo';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import AddIcon from '@material-ui/icons/Add';
import { Tooltip } from '@material-ui/core';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1200,
        height: 1600,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    card: {
        // maxWidth: 800,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        // display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },

});




class TitlebarGridList extends Component {

    state = {
        tileData
    }

    removePhoto = (id) => {
        let filteredTileData = this.state.tileData.filter(tile => tile.id !== id)
        this.setState({
            tileData: filteredTileData
        })
    }

    uploadNewPhoto = () => {
        console.log("upload new photo");
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div>
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Photo layout
                        </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Something short and leading about the collection below—its contents
                        </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    <Grid item>
                                        <Tooltip title="Upload New Photo">
                                            <Button variant="fab" color="primary" aria-label="Add" className={classes.fab}
                                                onClick={this.uploadNewPhoto}
                                            >
                                                <AddIcon />
                                            </Button>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {
                            this.state.tileData.map((tile, index) => (
                                <ImgMediaCard key={tile.id} removePhoto={this.removePhoto} {...tile} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const AlbumPage = withStyles(styles)(TitlebarGridList);

export { AlbumPage };