<<<<<<< HEAD
import { Button } from '@mui/material';
import React, { Component } from 'react'

export class ButtonClass extends Component {
    constructor(props) {
        super(props);
        // const { aev } = this.props.params;
      

    }
    render() {
        return (
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={this.props.formDetails.submitURL ? () => this.props.showData(this.props.formDetails.submitURL,this.props.search ? true : false) : ''}
            >
                {this.props.aev != 'edit' ? this.props.formDetails.label : this.props.formDetails.submitURL ? "Save" : "Cancel"}
            </Button>
        )
    }
}

export default ButtonClass
=======
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const ButtonClass = (props) => {
const navigate = useNavigate();
const { aev, formDetails } = props;
let submitURL = formDetails.submitURL;
if (aev === 'edit' && formDetails.submitURL) {
submitURL = formDetails.submitURLForEdit;
}

return (
<Button
type="submit"
fullWidth
variant="contained"
sx={{ mt: 3, mb: 2, ml: 3 }}
onClick={formDetails.redirect ? () => navigate(formDetails.redirect) : submitURL ? () => props.showData(submitURL, props.search ? true : false) : ''}
>
{aev !== 'edit' ? formDetails.label : formDetails.submitURL ? "Save" : "Cancel"}
</Button>
);
}

export default ButtonClass;
>>>>>>> b7f219a4b8c6bcdf007d6233637736215ac64634
