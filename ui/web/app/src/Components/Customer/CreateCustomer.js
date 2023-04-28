import React from 'react';
import { useNavigate} from 'react-router-dom';
import CustomerEditComponent from './customereditcomp';
import postMethod from '../../Modules/service';
import Customer from "./Customer.json";
import { config } from '../../Constants/constant';

const CreateCustomer = () => {

    const navigate = useNavigate();
    const onSubmit = (text, data) => {
        console.log(data, text);

        if (text == "submit") {

            

            const payload = {
                ...data, "FlowAdmin": {
                    "___smart_action___": "lookup",
                    "___smart_value___": "CustomerOrderFlow",
                }
            }

            postMethod(config.addCustomer, payload)
                .then((res) => {
                    console.log(res.data.responses[0].message);
                    if(res.data.responses[0].message === "Customer is successfully created.") {
                        navigate("/customerList")
                    }

                
                });

        }
        else {
            navigate("/customerList")
        }

    }





    return (
        <>

            <CustomerEditComponent formDetails={Customer} onSubmit={onSubmit} />
        </>
    )
};
export default CreateCustomer;