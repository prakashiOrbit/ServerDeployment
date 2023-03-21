// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { useState } from 'react';
// const CustomTextField = ({ label, value, defaultValue, onChange,disable, ...rest }) => {
//     const [fieldValue, setFieldValue] = useState(value);


//   const handleFieldChange = (event) => {
//     setFieldValue(event.target.value);
//     onChange(event);
//   };
//   return (
//     <TextField
//       label={label}
//       value={fieldValue}
//       fullWidth
//       id={label}
//       disabled={disable}
//      // defaultValue={defaultValue}
//       onChange={handleFieldChange}
//       variant="outlined"

//       {...rest}
//     />
//   );
// };

// export default CustomTextField;


// const  rules = {
//     required: true,
//     minLength: 3,
//     pattern: /^[a-zA-Z0-9]+$/,
//     errorMessage:
//       "Username must be at least 3 characters long and contain only letters and numbers.",
//   };

import React, { useState } from "react";
import { TextField as MUITextField } from "@material-ui/core";



function CustomTextField({ label, value, defaultValue, onChange,disable, rules,...rest }) {
  const [error, setError] = useState(null);
  const [fieldValue, setFieldValue] = useState(value);
  console.log("ruless",rules);
  const handleFieldChange = (event) => {
    const newValue = event.target.value;
    const isValid = validateInput(newValue);

    if (isValid) {
      setError(null);
      setFieldValue(event.target.value);
      onChange(event);
    } else {
      setError(`Invalid input: ${rules.errorMessage}`);
      setFieldValue(event.target.value);
    }
  };
  

  const validateInput = (input) => {


   if(rules.required){
    var testpattern =  new RegExp(rules.pattern)

    console.log(testpattern);
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
    console.log("asdjm")
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
      variant="outlined"


      {...rest}
  />
    </div>
  );
}


export default CustomTextField;
