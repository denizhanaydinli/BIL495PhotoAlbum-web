import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import { Tooltip, TextField } from '@material-ui/core';

const styles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
};

class SimpleDialog extends React.Component {
    state = {
        name: ''
    }

    handleClose = () => {
        debugger;
        this.props.onClose(this.state.name);
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    handleChange = event => {
        this.setState({
            name: event.target.value,
        });
    };

    render() {
        const { classes, onClose, selectedValue, open, ...other } = this.props;

        return (
            <Dialog
                open={open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Add New Keyword</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add New Keyword To Search Photo                        
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Keyword"
                        type="keyword"
                        fullWidth
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
              </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Add
              </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
    state = {
        open: false,
        selectedValue: undefined,
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.props.addNewKeyword(value);
        this.setState({ selectedValue: value, open: false });
        
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Tooltip title="Add New Keyword">
                    <Button variant="fab" color="primary" aria-label="Add" className={classes.fab}
                        onClick={this.handleClickOpen}
                    >
                        <AddIcon />
                    </Button>
                </Tooltip>
                <SimpleDialogWrapped
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </div>
        );
    }
}

SimpleDialogDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleDialogDemo);
