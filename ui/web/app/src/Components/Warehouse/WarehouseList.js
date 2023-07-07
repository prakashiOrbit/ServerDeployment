import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Datatable from "../../Modules/Datatable/datatable";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import { header_data } from "./warehouse_headerdata";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import postMethod from "../../Modules/service";
import { config } from "../../Constants/constant";

const WarehouseList = () => {
  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const [ccdata, setccdata] = useState([{ name: "check", label: "check" }]);
  const [warehousedata, setwarehousedata] = useState({});
  const [currentPage, setcurrentPage] = useState(localStorage.getItem("warehousePage") ? localStorage.getItem("warehousePage") : 0);

  useEffect(() => {
    getCcList();
  }, [])
  const onPagination = (page) => {
    if (page >= 0) {
      setcurrentPage(page);
      localStorage.setItem("warehousePage", page);
    }

  }
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    setwarehousedata({ ...warehousedata, "centerId": value, "centerName": name })
  }
  const getCcList = () => {
    const payloaddata = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "MasterDataFlow"
      },
      "searchString": "*"
    };

    postMethod(config.getWarehouse, payloaddata)
      .then((res) => {
        console.log(res.data.responses[0].farmers);
        const payload = res.data.responses[0]?.farmers?.map((index) => ({
          value: index.centerId, label: index.centerName
        }))
        console.log(payload);
        setccdata(payload);
      });
  };
  const handlesubmit = () => {

    console.log(warehousedata);
    const sendpayload = {
      ...warehousedata, "Warehouse": {
        "___smart_action___": "lookup",
        "___smart_value___": warehousedata.wId
      }
    }
    postMethod(config.editWarehouse, sendpayload)
      .then((res) => {
        console.log(res.data.responses[0]?.message);
        if (res.data.responses[0]?.message === "Warehouse details has been updated.") {

          navigate("/warehouseList")
        }
      });
    setopen(false);
  }

  const handleOptions = (data, option) => {
    console.log(option);
    console.log(data);
    localStorage.setItem('warehouse', data.warehouseName);
    localStorage.setItem("warehouseDetails", JSON.stringify(data))
    switch (option) {
      case "Edit":

        navigate('/warehouse-edit', {

          state: {

            id: data.id,
            data: data,
            option: option,
            warehousedata: warehousedata,


          }
        });
        break;
      default:

    }
  }
  const handleClose = () => {
    setopen(false);
  }

  const handleCreateClick = () => {
    navigate('/createWarehouse');
  };
  return (
    <div style={{ margin: "10%" }}>

      <Datatable title="Warehouse List" currentPage={currentPage} onPagination={onPagination} print={false} url={config.getWarehouse} handleOptions={handleOptions} flowEvent="WarehouseEvent" flow="MasterDataFlow" header_data={header_data} showEdit={true} onCreateClick={handleCreateClick} showAssignToCC={false} showCreateIcon={true} />
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
export default WarehouseList;

