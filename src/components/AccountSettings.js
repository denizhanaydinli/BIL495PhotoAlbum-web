import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';
import _ from 'lodash';

const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});



class AccountSettings extends Component {
    state = {
        age: '',
        open: false,
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const { classes } = this.props;

        return (
            <form autoComplete="off">
                <Button className={classes.button} onClick={this.handleOpen}>
                    Select Hour for deleting photos automatically
                </Button>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select">Hour</InputLabel>
                    <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.age}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'demo-controlled-open-select',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            _.range(1,24).map(hour => <MenuItem value={hour}>{hour}</MenuItem>)
                        }
                    </Select>
                    <Button color="primary" className={classes.button}>
                        Save
                    </Button>
                </FormControl>
            </form>
        );
    }
}

AccountSettings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountSettings);
