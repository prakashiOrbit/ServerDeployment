import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import CustomerEditComponent from './customereditcomp';
import postMethod from '../../Modules/service';
import Customer from "./Customer.json";
import { config } from '../../Constants/constant';

const CustomerEdit =()=>{
    
    const location = useLocation();
    const navigate = useNavigate();
    const { data } = location.state;
    console.log(data);

    const onSubmit = (text,data)=>{
console.log(data,text);

if(text=="submit"){

const sendpayload = {...data,"CustomerOrder":{ "___smart_action___": "lookup",
"___smart_value___": data.coId}}

postMethod(config.editCustomer,sendpayload)
.then((res)=>{
    console.log(res.data.responses[0].message);
    if(res.data.responses[0].message == "Customer details has been updated."){
      
        navigate("/customerList")
    }


});

}
else {
    navigate("/customerList")
}

    }
    




    return(
        <>

<CustomerEditComponent   rowdata={data} type="edit" formDetails={Customer} onSubmit={onSubmit} />
        </>
    )
};
export default CustomerEdit;