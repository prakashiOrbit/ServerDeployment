import React, { useEffect, useState } from "react";
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
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const CustomerList = () => {

  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const [ccdata, setccdata] = useState([{ name: "check", label: "check" }]);
  const [customerdata, setcustomerdata] = useState({});
  const [currentPage, setcurrentPage] = useState(localStorage.getItem("customerPage") ? localStorage.getItem("customerPage") : 0);


  useEffect(() => {
    getCcList();
  }, [])

  const onPagination = (page) => {
    if (page >= 0) {
      setcurrentPage(page);
      localStorage.setItem("customerPage", page);
    }

  }
  const handleChange = (e) => {

    var name = e.target.name;
    var value = e.target.value;

    setcustomerdata({ ...customerdata, "status": value })

  }

  const getCcList = () => {

    const payloaddata = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "AppFlow"
      },
      "searchString": "*"
    };

    postMethod(config.getCustomer, payloaddata)
      .then((res) => {
        console.log(res.data.responses[0]?.farmers);
        // const payload = res.data.responses[1].farmers?.map((index) => ({
        //   value: index.centerId, label: index.centerName
        // }))
        // console.log(payload);
        // setccdata(payload);
        setccdata(res.data.responses[0]?.farmers);

      });
  };

  const handlesubmit = () => {
    console.log(customerdata);
    const sendpayload = {
      ...customerdata,
      "CustomerOrder": {
        "___smart_action___": "lookup",
        "___smart_value___": customerdata.coId
      }
    };

    postMethod(config.editCustomer, sendpayload)
      .then((res) => {
        console.log(res.data.responses[0].message);
        if (res.data.responses[0]?.message === "Customer Status has been updated") {
          window.location.reload();
        }
      });
    setopen(false);
  }

  const handleOptions = (data, option) => {
    console.log(option);
    console.log(data);
    localStorage.setItem('customer', data.name);
    localStorage.setItem("customerDetails", JSON.stringify(data))
    switch (option) {
      case "View Customer Order":
        console.log("Customer Id" + data.coId);
        navigate('/view-customer', {
          state: {
            data: data,
            coId: data.coId,
            name: data.name,
            phoneNumber: data.phoneNumber,
            deliveryAddress: data.deliveryAddress,
            status: data.status,
            date: data.date,
            source: data.source,
            totalPrice: data.totalPrice

          }
        });
        break;
      case "Change Status":

        setcustomerdata(data);
        setopen(true);
        break;
      default:
    }
  }

  const handleClose = () => {
    setopen(false);
  }

  return (
    <div style={{ margin: "10%" }}>

      <Datatable currentPage={currentPage} onPagination={onPagination} title="Customer Orders List" print={false} showStatus={true} url={config.getCustomer} handleOptions={handleOptions} flowEvent="CustomerEvent" flow="AppFlow" header_data={header_data} showCustomerOrder={true} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Update Status
        </DialogTitle>
        <DialogContent>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Please select the status:</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Open"
              name="status"
            >
              <FormControlLabel value="Open" control={<Radio onChange={handleChange} />} label="Open" />
              <FormControlLabel value="Out for Delivery" control={<Radio onChange={handleChange} />} label="Out for Delivery" />
              <FormControlLabel value="Delivered" control={<Radio onChange={handleChange} />} label="Delivered" />
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

