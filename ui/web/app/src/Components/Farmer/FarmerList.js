

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Datatable from "../../Modules/Datatable/datatable";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import { header_data } from "./farmer_headerdata";
import axios from "axios";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FRSelect from "../../Modules/select";
import postMethod from "../../Modules/service";
import { config } from "../../Constants/constant";


const FarmerList = () => {

    //   fields = "./Service/po.json";
    //   farmerFields = "./Service/farmer.json";

    
    const navigate = useNavigate();
    const [open,setopen] = useState(false);
    const[ccdata,setccdata]=useState([{name:"check", label:"check"}]);


    const getCcList =() =>{
      //axios.get(http://localhost:9082/apptest/MasterDataFlow/SearchCollection_Center)
      const data = {
        "event": "b171fc18-4f2d-4514-b033-aaf3c271255e",
        "responses": [
            {
                "cd": [
                    {
                        "centerId": "APii67",
                        "centerName": "Manikpuri Center",
                        "centerAddress": "Hubli",
                        "contact": "9877872364"
                    }
                ],
                "___smart_responseid___": "c5a08c79-2055-4fba-9de7-3bbc7f458c81"
            }
        ]
    }; 
    const payload = data.responses[0].cd.map((index)=>({
       value: index.centerId, label: index.centerName 
    }))
    console.log(payload);
      //setccdata(payload);
    };


   const handleOptions = (data,option) => {
        console.log(option);
        console.log(data)
        switch(option){
            case "Edit" :
        
                navigate('/farmer-edit', {
                  state:{
                    id: data.id,
                    data:data,
                          } 
                        });
                break;
            case  "Assign to CC":
                
                
                setopen(true);
            default :
                break;
        }
    }

    const handleClose =() =>{
        setopen(false);
    }

 
    
        return (
            <div style={{margin:"10%"}}>
     
    
<Datatable  url={config.getfarmer} handleOptions={handleOptions} flowEvent="farmerEvent" flow="FarmerFlow"  header_data={header_data}/>

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
        <FormControlLabel value="APii67" control={<Radio />} label="Manikpuri Center" />
        <FormControlLabel value="APii68" control={<Radio />} label="Manikpuri Center 2" />
        <FormControlLabel value="APii69" control={<Radio />} label="Manikpuri Center 3" />
      </RadioGroup>
    </FormControl>
      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

            </div>   
        );
    
}

export default FarmerList;

