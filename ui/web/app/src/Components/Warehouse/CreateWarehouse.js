import React from 'react';
import { useNavigate} from 'react-router-dom';
import WarehouseEditComponent from './warehouseeditcomp';
import postMethod from '../../Modules/service';
import Warehouse from "./Warehouse.json";
import { config } from '../../Constants/constant';

const CreateWarehouse = () => {
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
            postMethod(config.addWarehouse, payload)
                .then((res) => {
                    console.log(res.data.responses[0].message);
                    if(res.data.responses[0].message === "Warehouse is successfully created.") {
                        navigate("/warehouseList")
                    }
                });
        }
        else {
            navigate("/warehouseList")
        }
    }
    return (
        <>
            <WarehouseEditComponent formDetails={Warehouse} onSubmit={onSubmit} />
        </>
    )
};
export default CreateWarehouse;