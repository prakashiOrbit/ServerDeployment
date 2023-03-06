import React from 'react';
import { useLocation, useNavigate, useParams, useRoutes } from 'react-router-dom';
import EditComponent from '../../Modules/edit';
import postMethod from '../../Modules/service';
import farmer from "./farmer.json";

const FarmerEdit =()=>{
    
    const location = useLocation();
    const navigate = useNavigate();
    const { data } = location.state;
    console.log(data);

    const onSubmit = (text,data)=>{
console.log(data,text);

if(text=="submit"){

const url = "http://localhost:9082/apptest/FarmerFlow/EditFarmer";
const payload = { "FlowAdmin": {
    "___smart_action___": "lookup",
    "___smart_value___": "FarmerFlow"
  }};
postMethod(url,payload)
.then((res)=>{
  console.log(res);

});

}
else {
    navigate("/farmerList")
}
// http://localhost:9082/apptest/FarmerFlow/EditFarmer
    }
    
    return(
        <>

<EditComponent   rowdata={data}   formDetails={farmer} onSubmit={onSubmit} />
        </>
    )
};
export default FarmerEdit;