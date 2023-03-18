import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import TruckEditComponent from './truckeditcomp';
import postMethod from '../../Modules/service';
import { config } from '../../Constants/constant';
import Truck from './Truck';

const TruckEdit =()=>{
    
    const location = useLocation();
    const navigate = useNavigate();
    const { data } = location.state;
    console.log(data);

    const onSubmit = (text,data)=>{
console.log(data,text);

if(text=="submit"){

const sendpayload = {...data,"Truck":{ "___smart_action___": "lookup",
"___smart_value___": data.tId}}

postMethod(config.editTruck,sendpayload)
.then((res)=>{
    console.log(res.data.responses[0].message);
    if(res.data.responses[0].message == "Truck details has been updated."){
      
        navigate("/truckList")
    }


});

}
else {
    navigate("/truckList")
}

    }
    




    return(
        <>

<TruckEditComponent   rowdata={data} type="edit" formDetails={Truck} onSubmit={onSubmit} />
        </>
    )
};
export default TruckEdit;