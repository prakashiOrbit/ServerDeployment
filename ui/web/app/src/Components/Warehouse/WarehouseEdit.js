import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import WarehouseEditComponent from './warehouseeditcomp';
import postMethod from '../../Modules/service';
import { config } from '../../Constants/constant';
import Warehouse from './Warehouse';

const WarehouseEdit =()=>{
    
    const location = useLocation();
    const navigate = useNavigate();
    const { id,data} = location.state;
    console.log(data);

    const onSubmit = (text,data)=>{
console.log(data,text);

if(text=="submit"){

const sendpayload = {...data,"Warehouse":{ "___smart_action___": "lookup",
"___smart_value___": data.wId}}

postMethod(config.editWarehouse,sendpayload)
.then((res)=>{
    console.log(res.data.responses[0].message);
    if(res.data.responses[0].message == "Warehouse details has been updated."){
      
        navigate("/warehouseList")
    }
});

}
else {
    navigate("/warehouseList")
}

    }
    return(
        <>

<WarehouseEditComponent   rowdata={data} id={id} type="edit" formDetails={Warehouse} onSubmit={onSubmit} />
        </>
    )
};
export default WarehouseEdit;