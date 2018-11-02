import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import tileData from '../data/tileData';
import red from '@material-ui/core/colors/red';
import ImgMediaCard from './photo';


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
});




class TitlebarGridList extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {
                    tileData.map((tile, index) => (
                        <ImgMediaCard key={index} img={tile.img} />
                    ))
                }
            </div>
        );
    }
}

TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const AlbumPage = withStyles(styles)(TitlebarGridList);

export { AlbumPage };