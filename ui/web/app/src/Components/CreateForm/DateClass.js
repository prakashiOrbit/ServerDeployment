<<<<<<< HEAD
import { TextField } from '@mui/material';
import React, { Component } from 'react'

export class DateClass extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <>            {
                this.props.inputDetails != undefined ? (
                    <TextField
                        focused
                        id="outlined-uncontrolled"
                        fullWidth
                        required
                        label={this.props.formDetails.label}
                        // size='small'
                        type="date"
                        variant='outlined'
                        onChange={this.props.onChange}
                        name={this.props.formDetails.label}
                        value={this.props.inputDetails.date}
                    />
                ) : (<></>)
            }
            </>

        )
    }
}

=======
import { TextField } from '@mui/material';
import React, { Component } from 'react'

export class DateClass extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <>            {
                this.props.inputDetails != undefined ? (
                    <TextField
                        focused
                        id="outlined-uncontrolled"
                        fullWidth
                        required
                        label={this.props.formDetails.label}
                        // size='small'
                        type="date"
                        variant='outlined'
                        onChange={this.props.onChange}
                        name={this.props.formDetails.label}
                        value={this.props.inputDetails.date}
                    />
                ) : (<></>)
            }
            </>

        )
    }
}

>>>>>>> b7f219a4b8c6bcdf007d6233637736215ac64634
export default DateClass