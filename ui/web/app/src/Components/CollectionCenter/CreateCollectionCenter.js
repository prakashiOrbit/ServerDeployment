import React from 'react';
import { useNavigate} from 'react-router-dom';
import CollectionCenterEditComponent from './collectioncentereditcomp';
import postMethod from '../../Modules/service';
import CollectionCenter from "./CollectionCenter.json";
import { config } from '../../Constants/constant';

const CreateCollectionCenter = () => {

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

            postMethod(config.addCollectionCenter, payload)
                .then((res) => {
                    console.log(res);
                
                });

        }
        else {
            navigate("/centerList")
        }

    }





    return (
        <>

            <CollectionCenterEditComponent formDetails={CollectionCenter} onSubmit={onSubmit} />
        </>
    )
};
export default CreateCollectionCenter;