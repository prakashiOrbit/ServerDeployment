

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PODatatable from "../../Modules/Datatable/podatatable";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import { header_data } from "./po_headerdata";
import axios from "axios";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FRSelect from "../../Modules/select";
import postMethod, { getMethod } from "../../Modules/service";
import { config } from "../../Constants/constant";
import Datatable from "../../Modules/Datatable/datatable";


const POList = () => {

  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const [ccdata, setccdata] = useState([{ name: "check", label: "check" }]);
  const [podata, setPodata] = useState({});



  useEffect(() => {
    getPOList();
  }, [])


  const handleChange = (e) => {

    var name = e.target.name;
    var value = e.target.value;

    setPodata({ ...podata, "centerId": value, "centerName": name })


  }

  



  const getPOList = () => {



    const payloaddata = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "PurchaseOrderTemplateFlow"
      },
      "searchString": "*"
    };


    postMethod(config.getPO, payloaddata)
      .then((res) => {
        console.log("output",res.data.responses[0].POS);
        const payload = res.data.responses[0].POS.map((index) => ({
          value: index.centerId, label: index.centerName
        }))
        console.log(payload);
        setccdata(payload);


      });


  };


  const handlesubmit = () => {

    console.log(podata);
    const sendpayload = {
      ...podata, "PurchaseOrderTemplate": {
        "___smart_action___": "lookup",
        "___smart_value___": podata.fId
      }
    }

    postMethod(config.editPO, sendpayload)
      .then((res) => {
        console.log(res.data.responses[0].message);
        if (res.data.responses[0].message == "PO details has been updated.") {

          navigate("/poList")
        }


      });
      setopen(false);


  }


  const handleOptions = (data, option) => {
    console.log(option);
    console.log(data)
    switch (option) {
      case "Edit":

        navigate('/po-edit', {
          state: {
            id: data.id,
            data: data,
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
    navigate('/po');
  };

  return (
    <div style={{ margin: "10%" }}>


      <Datatable url={config.getPO} handleOptions={handleOptions} onCreateClick={handleCreateClick} flowEvent="SearchPurchaseOrdersTemplate" flow="PurchaseOrderTemplateFlow" header_data={header_data} showCreateIcon={true} />

      

    </div>
  );

}

export default POList;

