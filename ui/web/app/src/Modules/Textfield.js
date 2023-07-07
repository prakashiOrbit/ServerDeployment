import React, { useState, useRef, useEffect } from "react";
import { TextField as MUITextField } from "@material-ui/core";

function CustomTextField({ id, label, value, defaultValue, onChange, handleError, disable, rules, ...rest }) {
  const [error, setError] = useState(null);
  const [fieldValue, setFieldValue] = useState(value);
  const inputRef = useRef(null);

  const handleFieldChange = (event) => {
    const newValue = event.target.value;
    const isValid = validateInput(newValue);
    if (isValid) {
      setError(null);
      setFieldValue(event.target.value);
      handleError(false);
      onChange(event);
    } else {
      setError(`Invalid input: ${rules.errorMessage}`);
      handleError(true);
      setFieldValue(event.target.value);
      onChange(event);
    }
  };

  const validateInput = (input) => {
    if (rules.required) {
      var testpattern = new RegExp(rules.pattern);

      if (rules.required && input.trim() === "") {
        return false;
      } else if (rules.minLength && input.length < rules.minLength) {
        return false;
      } else if (rules.pattern && !testpattern.test(input)) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      const firstFieldId = "name";
      const secondFieldId = "itemName";
      const thirdFieldId = "tranportCompanyName";
      const fourthFieldId = "centerName";
      const fifthFieldId = "warehouseAddress";
      
      if (id === firstFieldId) {
        inputRef.current.focus();
      } else if (id === secondFieldId) {
        inputRef.current.focus();
      } else if (id === thirdFieldId) {
        inputRef.current.focus();
      } else if (id === fourthFieldId) {
        inputRef.current.focus();
      } else if (id === fifthFieldId) {
        inputRef.current.focus();
      }
    }
  }, [id]);
  

  return (
    <div>
      <MUITextField
        label={label}
        value={fieldValue}
        fullWidth
        id={id}
        disabled={disable}
        onChange={handleFieldChange}
        error={Boolean(error)}
        helperText={error}
        variant="outlined"
        inputRef={inputRef}
        required={rules.required}
        {...rest}
      />
    </div>
  );
}

export default CustomTextField;
