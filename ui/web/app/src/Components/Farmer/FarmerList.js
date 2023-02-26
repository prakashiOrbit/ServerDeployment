

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Datatable from "../../Modules/Datatable/datatable";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";


const FarmerList = () => {

    //   fields = "./Service/po.json";
    //   farmerFields = "./Service/farmer.json";

      const flow =  "FarmerFlow";
      const tenant = "apptest/";
    const navigate = useNavigate();
    const [open,setopen] = useState(false);

   const handleOptions = (data,option) => {
        console.log(option);
        console.log(data)
        switch(option){
            case "Edit" :
                navigate("/farmer");
                navigate('/farmer', {
                    id: data.id,
                   
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
            <div style={{marginTop:"30px"}}>
     
    
<Datatable  url="http://localhost:9082/apptest/FarmerFlow/SearchFarmers" handleOptions={handleOptions} flow="FarmerFlow"  data={[]}/>

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
          <Button>check</Button>
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

