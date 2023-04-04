

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Datatable from "../../Modules/Datatable/datatable";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import { header_data } from "./truck_headerdata";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import postMethod from "../../Modules/service";
import { config } from "../../Constants/constant";


const TruckList = () => {

  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const [ccdata, setccdata] = useState([{ name: "check", label: "check" }]);
  const [truckdata, settruckdata] = useState({});


  useEffect(() => {
    getCcList();
  }, [])

  const handleChange = (e) => {

    var name = e.target.name;
    var value = e.target.value;

    settruckdata({ ...truckdata, "centerId": value, "centerName": name })


  }

  const getCcList = () => {


    const payloaddata = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "MasterDataFlow"
      },
      "searchString": "*"
    };


    postMethod(config.getTruck, payloaddata)
      .then((res) => {
        console.log(res.data.responses[0].cd);
        const payload = res.data.responses[0].cd?.map((index) => ({
          value: index.centerId, label: index.centerName
        })
        )
        console.log(payload);
        setccdata(payload);


      });


  };


  const handlesubmit = () => {

    console.log(truckdata);
    const sendpayload = {
      ...truckdata, "Truck": {
        "___smart_action___": "lookup",
        "___smart_value___": truckdata.licenseNo
      }
    }

    postMethod(config.editTruck, sendpayload)
      .then((res) => {
        console.log(res.data.responses[0].message);
        if (res.data.responses[0].message === "Truck details has been updated.") {

          navigate("/truckList")
        }


      });
      setopen(false);


  }


  const handleOptions = (data, option) => {
    console.log(option);
    console.log(data)
    switch (option) {
      case "Edit":

        navigate('/truck-edit', {
          state: {
            id: data.id,
            data: data,
          }
        });
        break;
      case "Create Truck":

        settruckdata(data);
        setopen(true);
        break;
      default:
        
    }
  }

  const handleClose = () => {
    setopen(false);
  }


  const handleCreateClick = () => {
    navigate('/createTruck');
  };
  return (
    <div style={{ margin: "10%" }}>


      <Datatable url={config.getTruck}  handleOptions={handleOptions} flowEvent="TruckEvent" flow="MasterDataFlow" header_data={header_data} onCreateClick={handleCreateClick} showAssignToCC={false} showCreateIcon={true}/>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Assign to CC
        </DialogTitle>
        <DialogContent>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Please Select one Collection Center</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {ccdata?.map((index) => {
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

export default TruckList;

