import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ListItem, ListItemText, List, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import _ from 'lodash';
import SimpleDialogDemo, { SimpleDialogWrapped } from './KeywordDialog';

const styles = theme => ({
    card: {
        maxWidth: 1000,
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

class RecipeReviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            // keywords: _.range(5).map((keyword, index) => "keyword " + index)
            keywords: [
                "keyword 0",
                "keyword 1",
                "keyword 2",
                "keyword 3",
            ],
            updateKeyword: false,
            keywordIndex: -1
        };
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !this.state.expanded }));
    };

    addNewKeyWord = (keyword) => {
        let { keywords } = this.state;
        keywords.push(keyword);
        this.setState(state => ({ keywords }))
    }

    deleteKeyword = (index) => {
        let { keywords } = this.state;

        keywords = keywords.filter((keyword, k_index) => k_index !== index)

        this.setState({ keywords });
    }

    handleDelete = () => {
        this.props.removePhoto(this.props.id);
        console.log("deleted");
    }

    updateKeyword = (index = -1) => {
        this.setState({ updateKeyword: true, keywordIndex: index })
    }

    cancelUpdatingKeyword = () => {
        this.setState({ updateKeyword: false, keywordIndex: -1 })
    }

    onUpdateKeyword = (value) => {
        let keywords = this.state.keywords.map((keyword, index) => index === this.state.keywordIndex ? value : keyword);
        this.setState({ keywords });
        this.cancelUpdatingKeyword();
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <DeleteIcon onClick={this.handleDelete} />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image={this.props.img}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>

                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <SimpleDialogDemo addNewKeyword={this.addNewKeyWord} />
                        {
                            this.state.updateKeyword &&
                            <SimpleDialogWrapped
                                open={this.state.updateKeyword}
                                selectedValue={this.state.keywords[this.state.keywordIndex]}
                                cancelAddingKeyword={this.cancelUpdatingKeyword}
                                updateButton={"Update"}
                                onClose={this.onUpdateKeyword}
                            />
                        }
                        <List component="nav">
                            {
                                this.state.keywords.map((keyword, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={keyword} />
                                        <Tooltip title="Edit">
                                            <IconButton aria-label="Edit">
                                                <EditIcon onClick={() => this.updateKeyword(index)} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton aria-label="Delete">
                                                <DeleteIcon onClick={() => this.deleteKeyword(index)} />
                                            </IconButton>
                                        </Tooltip>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);