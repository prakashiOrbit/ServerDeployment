import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Datatable from "../../Modules/Datatable/datatable";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import { header_data } from "./farmer_headerdata";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import postMethod, { getMethod } from "../../Modules/service";
import { config } from "../../Constants/constant";


const FarmerList = () => {

  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const [ccdata, setccdata] = useState([{ name: "check", label: "check" }]);
  const [farmerdata, setfarmerdata] = useState({});
  const [currentPage, setcurrentPage] = useState(localStorage.getItem("farmerPage") ? localStorage.getItem("farmerPage") : 0);

  useEffect(() => {
    getCcList();
  }, [])

  const onPagination = (page) => {
    if (page >= 0) {
      setcurrentPage(page);
      localStorage.setItem("farmerPage", page);
    }

  }


  const handleChange = (e, index) => {

    var name = e.target.name;
    var value = e.target.value;

    setfarmerdata({ ...farmerdata, "cId": value, "centerName": name, "centerAddress": index.address })
  }
  const getCcList = () => {

    const payloaddata = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "MasterDataFlow"
      },
      "searchString": "*"
    };

    postMethod(config.getcc, payloaddata)
      .then((res) => {
        console.log(res.data.responses[0]?.farmers);
        const payload = res.data.responses[0].farmers?.map((index) => ({
          value: index.cId, label: index.centerName, address: index.centerAddress
        }))
        console.log(payload);
        setccdata(payload);

      });
  };

  const handlesubmit = () => {
    console.log(farmerdata);
    const sendpayload = {
      ...farmerdata, "Farmer": {
        "___smart_action___": "lookup",
        "___smart_value___": farmerdata.fId
      }
    }

    postMethod(config.editFarmer, sendpayload)
      .then((res) => {
        console.log(res.data.responses[0].message);
        if (res.data.responses[0].message == "Farmer details has been updated.") {

          navigate("/farmerList")
        }

      });
    setopen(false);
    window.location.reload();
  }

  const handleOptions = (data, option) => {
    console.log(option);
    console.log("data", data.name)
    localStorage.setItem('farmer', data.name);
    localStorage.setItem('cc_name', data?.centerName);
    localStorage.setItem("farmerDetails", JSON.stringify(data))
    switch (option) {
      case "Edit":

        navigate('/farmer-edit', {
          state: {
            id: data.id,
            data: data,
          }
        });
        break;
      case "Assign to CC":

        setfarmerdata(data);
        setopen(true);
        break;
      case "Create PO Template":
        console.log(data.fId)
        navigate('/po-edit', {
          state: {
            fid: data.fId,
            farmerdata: data
          }
        });
        break;
      case "View PO Templates":
        console.log(data.fId)
        navigate('/poList', {
          state: {
            id: data.fId,
          }
        });
        break;

      case "View Actual PO List":
        console.log(data.fId)
        navigate('/view_actualpo', {
          state: {
            fid: data.fId,
            farmerdata: data
          }
        });
        break;
      default:
        break;
    }
  }

  const handleClose = () => {
    setopen(false);
  }

  const handleCreateClick = () => {
    navigate('/farmer');
  };

  return (
    <div style={{ margin: "10%" }}>



      <Datatable title="Farmer List" currentPage={currentPage} onPagination={onPagination} print={false} showPoTemplate={true} showPoTemplateList={true} viewActualPo={true} url={config.getfarmer} handleOptions={handleOptions} flowEvent="farmerEvent" flow="AdminFlow" header_data={header_data} onCreateClick={handleCreateClick} showAssignToCC={true} showEdit={true} showCreateIcon={true} />

      <Dialog
        onClose={handleClose}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" fontWeight="bold">
          Assign to Collection Center
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
                return <FormControlLabel value={index.value} name={index.label} control={<Radio onChange={(e) => { handleChange(e, index) }} />} label={index.label} />
              })}
            </RadioGroup>
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handlesubmit} style={{ fontWeight: 'bold' }}>Submit</Button>
          <Button onClick={handleClose} style={{ fontWeight: 'bold' }} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}

export default FarmerList;