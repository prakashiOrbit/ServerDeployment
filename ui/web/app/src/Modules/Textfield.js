import React, { useState } from "react";
import { TextField as MUITextField } from "@material-ui/core";

function CustomTextField({ label, value, defaultValue, onChange, handleError, disable, rules, ...rest }) {
  const [error, setError] = useState(null);
  const [fieldValue, setFieldValue] = useState(value);

  const handleFieldChange = (event) => {
    const newValue = event.target.value;
    const isValid = validateInput(newValue);
    if (isValid) {
      setError(null);
      setFieldValue(event.target.value);
      //handleError(false);
      onChange(event);
   
    } else {
      setError(`Invalid input: ${rules.errorMessage}`);
      //handleError(true);
      setFieldValue(event.target.value);
      onChange(event);

    }
  };
  const validateInput = (input) => {

    if (rules.required) {
      var testpattern = new RegExp(rules.pattern)

      if (rules.required && input.trim() === "") {
        return false;
      }
      else if (rules.minLength && input.length < rules.minLength) {
        return false;
      }
      else if (rules.pattern && !testpattern.test(input)) {
        return false;
      }
      else {
        return true;
      }
    }

    else {
      return true;
    }
  };
  return (
    <div>
      <MUITextField
        label={label}
        value={fieldValue}
        fullWidth
        id={label}
        disabled={disable}
        onChange={handleFieldChange}
        error={Boolean(error)}
        helperText={error}
        required
        variant="outlined"
        {...rest}
      />
    </div>
  );
}
export default CustomTextField;
