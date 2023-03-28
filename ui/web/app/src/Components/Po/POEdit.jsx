import React from 'react';
import { useLocation, useNavigate, useParams, useRoutes } from 'react-router-dom';
import POEditComponent from '../../Modules/poedit';
import postMethod from '../../Modules/service';
import POData from "./poedit.json";
import { config } from '../../Constants/constant';

const POEdit =()=>{
    
    const location = useLocation();
    const navigate = useNavigate();
    const { data } = location.state;
    console.log(data);

    const onSubmit = (text,data)=>{
console.log(data,text);

if(text=="submit"){
    console.log("first here")

const sendpayload = {...data,"PurchaseOrderTemplate":{ "___smart_action___": "lookup",
"___smart_value___": data.poId}}

postMethod(config.editPO,sendpayload)
.then((res)=>{
    console.log(res.data.responses[0].message);
    if(res.data.responses[0].message == "PO details has been updated."){
        
      
        navigate("/poList")
    }


});

}
else {
    
    navigate("/poList")
}

    }

    
    
    




    return(
        <>

<POEditComponent   rowdata={data} type="edit" formDetails={POData} onSubmit={onSubmit} />
        </>
    )
};
export default POEdit;