import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { Card, Button, withStyles } from '@material-ui/core';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
}

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


class UploadPhoto extends Component {
    constructor(props) {
        super(props);
        
        this.state = { files: [] }
    }

    onDrop(files) {
        this.setState({
            files: files.map(file => ({
                ...file,
                preview: URL.createObjectURL(file)
            }))
        });
    }

    componentWillUnmount() {
        const { files } = this.state;
        for (let i = files.length; i >= 0; i--) {
            const file = files[0];
            URL.revokeObjectURL(file.preview);
        }
    }

    onCancel = () => {
        console.log("cancel upload");

        this.props.closeUpload();
    }

    onAdd = () => {
        console.log("cancel upload");
        debugger;

        this.props.closeUpload();
        this.props.addPhoto(this.state.files[0].preview);
    }

    render() {
        const { classes } = this.props;
        return (
            <Card>
                <div className="dropzone">
                    <Dropzone
                        onDrop={this.onDrop.bind(this)}
                        accept="image/jpeg,image/jpg,image/tiff,image/gif" multiple={false}
                    // onFileDialogCancel={this.onCancel.bind(this)}
                    >
                        <p>Try dropping some photos here, or click to select photos to upload.</p>
                    </Dropzone>
                </div>
                <Button color="secondary" className={classes.button}
                    onClick={this.onCancel}
                >
                    Cancel
                </Button>
                <Button color="primary" className={classes.button}
                    onClick={this.onAdd} disabled={this.state.files.length <= 0}
                >
                    Add
                </Button>
                {
                    this.state.files.map(file => (
                        <div style={thumb}>
                            <div style={thumbInner}>
                                <img
                                    src={file.preview}
                                    style={img}
                                />
                            </div>
                        </div>
                    ))
                }

            </Card>
        );
    }
}

UploadPhoto.propTypes = {
    closeUpload: PropTypes.func,
};

export default withStyles(styles)(UploadPhoto);
