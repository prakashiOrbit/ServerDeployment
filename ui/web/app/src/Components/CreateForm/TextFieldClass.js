import { TextField } from '@mui/material';
import React, { Component } from 'react'

export default class TextFieldClass extends Component {
    constructor(props) {
        super(props);
        console.log(this.props, "text field input");
    }
    render() {
        return (
            <>
                {

                    <TextField
                       error={this.props.formErrors[this.props.formDetails.id] ? this.props.formErrors[this.props.formDetails.id] : false}
                        //helperText="Validation error"
                        id="outlined-read-only-input"
                        required ={this.props.formDetails.validate ? true : false}
                        label={this.props.formDetails.id}
                        fullWidth
                        multiline
                        rows={this.props.formDetails.rows}
                        minRows={this.props.formDetails.minRows}
                        // size='small'
                        variant='outlined'
                        onChange={this.props.onChange}
                        name={this.props.formDetails.id}
                        value={this.props.inputDetails[this.props.formDetails.id]}
                        InputProps={{
                            readOnly: this.props.editFlag == 'edit' ? this.props.formDetails.disabled : this.props.editFlag == 'view' ? true : false
                        }}

                    />

                }
            </>

        )
    }
}