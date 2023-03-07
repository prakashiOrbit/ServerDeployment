import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
const CustomTextField = ({ label, value, defaultValue, onChange,disable, ...rest }) => {
    const [fieldValue, setFieldValue] = useState(value);

  const handleFieldChange = (event) => {
    setFieldValue(event.target.value);
    onChange(event);
  };
  return (
    <TextField
      label={label}
      value={fieldValue}
      fullWidth
      id={label}
      disabled={disable}
     // defaultValue={defaultValue}
      onChange={handleFieldChange}
      variant="outlined"
 
      {...rest}
    />
  );
};

export default CustomTextField;