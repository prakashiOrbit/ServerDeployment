import React from 'react';

function CustomerInfoField(props) {
  const { label, value } = props;

  return (
    <div>
      <label>{label}</label>
      <p>{value}</p>
    </div>
  );
}

export default CustomerInfoField;
