import React, { Component } from "react";
import { TextField, InputAdornment } from "@mui/material";
//import { TextField, InputAdornment } from "@material-ui/core";
class MultipleTextBoxes extends Component {
  render() {
    const { label, formDetails } = this.props;
    return (
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Address Book"
          multiline
          rows={6}
          defaultValue=""
          variant="outlined"
          size="large"
          style={{ width: "100%" }}
          InputProps={{
            readOnly:
              this.props.editFlag == "edit"
                ? this.props.formDetails.disabled
                : this.props.editFlag == "view"
                ? true
                : false,
            startAdornment: (
              <>
                <div>
                  <TextField
                    label="Street"
                    variant="outlined"
                    size="large "
                    style={{
                      width: "1210%",
                      marginTop: "0px",
                      height: "150px",
                      marginBottom: "10px",
                    }}
                  />
                </div>
                <InputAdornment position="start">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      label="City"
                      variant="outlined"
                      size="large"
                      style={{
                        marginTop: "90px",
                        marginRight: "6px",
                        width: "95px",
                      }}
                    />
                    <TextField
                      label="State"
                      variant="outlined"
                      size="large"
                      style={{
                        marginTop: "90px",
                        marginRight: "6px",
                        width: "95px",
                      }}
                    />
                    <TextField
                      label="Pin Code"
                      variant="outlined"
                      size="large"
                      style={{
                        marginTop: "90px",
                        marginRight: "0px",
                        width: "95px",
                      }}
                    />
                  </div>
                </InputAdornment>
              </>
            ),
          }}
        ></TextField>
      </div>
    );
  }
}

export default MultipleTextBoxes;
