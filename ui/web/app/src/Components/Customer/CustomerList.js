import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Datatable from "../../Modules/Datatable/datatable";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import { header_data } from "./customer_headerdata";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import postMethod from "../../Modules/service";
import { config } from "../../Constants/constant";
const CustomerList = () => {

  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const [whdata, setwhdata] = useState([{ name: "check", label: "check" }]);
  const [customerdata, setcustomerdata] = useState({});
  useEffect(() => {
    getCcList();
  }, [])
  const handleChange = (e) => {

    var name = e.target.name;
    var value = e.target.value;

    setcustomerdata({ ...customerdata, "wId": value, "warehouseName": name })

  }
  const getCcList = () => {
    const payloaddata = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "CustomerOrderFlow"
      },
      "searchString": "*"
    };
    postMethod(config.getCustomer, payloaddata)
      .then((res) => {
        console.log(res.data.responses[0].cd);
        const payload = res.data.responses[0].cd?.map((index) => ({
          value: index.wId, label: index.warehouseName
        }))
        console.log(payload);
        setwhdata(payload);
      });
  };
  const handlesubmit = () => {

    console.log(customerdata);
    const sendpayload = {
      ...customerdata, "Customer": {
        "___smart_action___": "lookup",
        "___smart_value___": customerdata.coId
      }
    }
    postMethod(config.editCustomer, sendpayload)
      .then((res) => {
        console.log(res.data.responses[0].message);
        if (res.data.responses[0].message === "Customer details has been updated.") {

          navigate("/customerList")
        }
      });
    setopen(false);
  }
  const handleOptions = (data, option) => {
    console.log(option);
    console.log(data)
    switch (option) {
     
      case "View Customer Order":
        navigate('/view-customer', {
          state: {
            data: data,
          }
          
        });
        break;
         
      case "Assign To Warehouse":

      setcustomerdata(data);
      setopen(true);
      break;
      default:

    }
  }
  const handleClose = () => {
    setopen(false);
  }
  const handleCreateClick = () => {
    navigate('/createCustomer');
  };
  return (
    <div style={{ margin: "10%" }}>
      <Datatable url={config.getCustomer} handleOptions={handleOptions} flowEvent="CustomerOrderEvent" flow="CustomerOrderFlow" header_data={header_data} onCreateClick={handleCreateClick} showAssignToCC={false} showCreateIcon={false} showEdit={false} showAssignToWarehouse={true} showCustomerOrder={true}/>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Assign to Warehouse
        </DialogTitle>
        <DialogContent>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Please Select one Warehouse</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {whdata?.map((index) => {
                return <FormControlLabel value={index.value} name={index.label} control={<Radio onChange={handleChange} />} label={index.label} />
              })}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlesubmit}>Submit</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default CustomerList;

