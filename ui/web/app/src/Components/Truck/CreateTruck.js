import React from 'react';
import { useNavigate} from 'react-router-dom';
import TruckEditComponent from './truckeditcomp';
import postMethod from '../../Modules/service';
import Truck from "./Truck.json";
import { config } from '../../Constants/constant';

const CreateTruck = () => {

    const navigate = useNavigate();
    const onSubmit = (text, data) => {
        console.log(data, text);

        if (text == "submit") {

            

            const payload = {
                ...data, "FlowAdmin": {
                    "___smart_action___": "lookup",
                    "___smart_value___": "MasterDataFlow",
                }
            }

            postMethod(config.addTruck, payload)
                .then((res) => {
                    if(res.data.responses[0].message === "Truck is successfully created.") {
                        navigate("/truckList")
                    }
                
                });

        }
        else {
            navigate("/truckList")
        }

    }





    return (
        <>

            <TruckEditComponent formDetails={Truck} onSubmit={onSubmit} />
        </>
    )
};
export default CreateTruck;