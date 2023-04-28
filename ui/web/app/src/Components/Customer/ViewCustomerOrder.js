import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Datatable from '../../Modules/Datatable/datatable';
import { config } from '../../Constants/constant';
import { header_data } from "./customer_header"

function ViewCustomerOrder(props) {
  //const data = props.location.state?.data || {};
  const [data, setData] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({});
  
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      address: formData.get('address'),
      paymentMethod: formData.get('paymentMethod')
    };
    setData([...data, newData]);
    setFormData(newData);
  }

  return (
    <>
     <div style={{ border: "2px solid green", padding: "15px" , marginTop: "100px"}}>
  <form onSubmit={handleFormSubmit} >
        <h1 style={{marginTop: "1px", color: "navy"}}>Customer Information</h1>
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", width: "80%" }}>
  <TextField name="name" label="Name" variant="outlined" InputLabelProps={{ style: { fontWeight: "bold" } }} style={{ marginRight: "20px", flex: 1 }} />
  <TextField name="email" label="Email" variant="outlined" InputLabelProps={{ style: { fontWeight: "bold" } }} style={{ flex: 1 }} />
</div>
        <div style={{ marginBottom: "20px" , display: "flex", justifyContent: "space-between", width: "80%" }} >
        <TextField name="phoneNumber" label="Phone Number" variant="outlined" InputLabelProps={{ style: { fontWeight: "bold" } }} style={{ marginRight: "20px", flex: 1 }} />
        
        <TextField name="address" label="Address" variant="outlined" InputLabelProps={{ style: { fontWeight: "bold" } }} style={{ flex: 1 }}/>
        </div>
        <div>
        <FormControl style={{ width: "39%", marginBottom: "20px" }} variant={paymentMethod ? "standard" : "outlined"}>
        <InputLabel style={{ fontWeight: "bold" }}>Method of Payment</InputLabel>
        <Select name="paymentMethod" label="Method of Payment" value={paymentMethod} onChange={handlePaymentMethodChange}>
          <MenuItem value="visa">Visa</MenuItem>
          <MenuItem value="netbanking">Net Banking</MenuItem>
          <MenuItem value="upi">UPI</MenuItem>
        </Select>
      </FormControl>
      
  </div>
      </form>
      
    </div>
    {/* {Object.keys(formData).length > 0 && (
        <div style={{border: "2px solid green", padding: "20px", marginTop: "30px"}}>
          <h2>Customer Data:</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone Number: {formData.phoneNumber}</p>
          <p>Address: {formData.address}</p>
          <p>Payment Method: {formData.paymentMethod}</p>
        </div>
      )} */}
    <h1 style={{marginTop: "40px", color: "navy"}}>Order Information</h1>
    <Datatable url={config.getfarmer} flowEvent="farmerEvent" flow="AdminFlow" header_data={header_data} showAssignToCC={false} showCreateIcon={false} />

    </>
  );
}

export default ViewCustomerOrder;
