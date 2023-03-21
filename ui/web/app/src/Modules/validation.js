import React, { useState } from "react";
import { TextField as MUITextField } from "@material-ui/core";


const  rules = {
    required: true,
    minLength: 3,
    pattern: /^[a-zA-Z0-9]+$/,
    errorMessage:
      "Username must be at least 3 characters long and contain only letters and numbers.",
  };

function CustomTextField({ label, value, defaultValue, onChange,disable,ruless ,...rest }) {
    console.log("ruless",ruless);
  const [error, setError] = useState(null);
  const [fieldValue, setFieldValue] = useState(value);

  const handleFieldChange = (event) => {
    const newValue = event.target.value;
    
    const isValid = validateInput(newValue);
    if (isValid) {
      setError(null);
      setFieldValue(event.target.value);
      onChange(event);
    } else {
      setError(`Invalid input: ${rules.errorMessage}`);
    }
  };


  const validateInput = (input) => {
    if (rules.required && input.trim() === "") {
      return false;
    }
    if (rules.minLength && input.length < rules.minLength) {
      return false;
    }
    if (rules.pattern && !rules.pattern.test(input)) {
      return false;
    }
    return true;
  };

  const handleOnFocus = () => {
    setError(null);
  };


  return (
    <div>
        <MUITextField
    label={label}
    value={fieldValue}
    fullWidth
    id={label}
    disabled={disable}
    onFocus={handleOnFocus}
    onChange={handleFieldChange}
    error={Boolean(error)}
    helperText={error}
      variant="outlined"
 
      {...rest}
  />
    </div>
  );
}
export default CustomTextField;