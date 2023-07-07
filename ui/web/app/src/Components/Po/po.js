import React from 'react';
import EditComponent from '../../Modules/edit';
import postMethod from '../../Modules/service';
import { config } from '../../Constants/constant';
import { useParams, useNavigate } from "react-router-dom";

const PoCreate = () => {
    const navigate = useNavigate();
    const {fid} = useParams();
    console.log("fid",fid);
    const onSubmit = (text, data) => {
        console.log(data, text);

        if (text == "submit") {

            const payload = {
                ...data, "Farmer": {
                    "___smart_action___": "lookup",
                    "___smart_value___": fid,
                }
            }

            // postMethod(config.addPurchaseOrderTemplate, payload)
            //     .then((res) => {
            //         if(res.data.responses){
            //             console.log(res.data.responses[0].message);
            //             let id = ((res.data.responses[0].message).split(" : "))[1];console.log();
            //             navigate("/po-edit/"+id);
            //         } if(res.data.errors){
            //             console.log(res.data.errors[0].context);
            //             alert(res.data.errors[0].context);
            //         }
            //     });
        }
        else {
            navigate("/po-edit")
        }
    }

    return (
        <>
            <EditComponent onSubmit={onSubmit} />
        </>
    )
};
export default PoCreate;