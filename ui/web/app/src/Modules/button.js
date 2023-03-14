import React from 'react';
import Button from '@material-ui/core/Button';

const FButton = ({ onClick, children }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export default FButton;