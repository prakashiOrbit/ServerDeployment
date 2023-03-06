import { TextField, InputAdornment } from "@mui/material";
import React, { Component } from "react";
import "./TextField.css";

export default class TextFieldClass extends Component {
  constructor(props) {
    super(props);
    console.log(this.props, "text field input");
  }
  render() {
    const {
      label,
      formErrors,
      formDetails,
      inputDetails,
      editFlag,
      onChange,
      labelInside,
    } = this.props;
    const isMultiline = formDetails.isMultiline || false;
    const rows = formDetails.rows || isMultiline.rows;

    return (
      <>
        {labelInside ? (
          <TextField
            error={
              this.props.formErrors[this.props.formDetails.id]
                ? this.props.formErrors[this.props.formDetails.id]
                : false
            }
            id="outlined-read-only-input"
            required={this.props.formDetails.validate ? true : false}
            label={this.props.formDetails.id}
            variant="outlined"
            fullWidth
            onChange={this.props.onChange}
            name={this.props.formDetails.id}
            defaultValue={this.props.value}
            value={this.props.inputDetails[this.props.formDetails.id]}
            InputProps={{
              readOnly:
                this.props.editFlag == "edit"
                  ? this.props.formDetails.disabled
                  : this.props.editFlag == "view"
                  ? true
                  : false,
            }}
            // multiline={isMultiline}
            // rows={rows * 1}
          />
        ) : (
          <div>
            <label>{this.props.formDetails.id}</label>

            <div style={{ margin: "0 15px 0 135px" }}>
              <TextField
                className="my-textfield"
                error={
                  this.props.formErrors[this.props.formDetails.id]
                    ? this.props.formErrors[this.props.formDetails.id]
                    : false
                }
                id="outlined-read-only-input"
                required={this.props.formDetails.validate ? true : false}
                variant="outlined"
                fullWidth
                onChange={this.props.onChange}
                name={this.props.formDetails.id}
                value={this.props.inputDetails[this.props.formDetails.id]}
                InputProps={{
                  readOnly:
                    this.props.editFlag == "edit"
                      ? this.props.formDetails.disabled
                      : this.props.editFlag == "view"
                      ? true
                      : false,
                }}
                sx={{
                  "@media (max-width: 600px)": {
                    width: "100%",
                  },
                }}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}
