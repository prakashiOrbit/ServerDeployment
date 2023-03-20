import React from 'react';
import { useNavigate} from 'react-router-dom';
import ProductEditComponent from './producteditcomp';
import postMethod from '../../Modules/service';
import Product from "./Product.json";
import { config } from '../../Constants/constant';

const CreateProduct = () => {

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

            postMethod(config.addProduct, payload)
                .then((res) => {
                    console.log(res.data.responses[0].message);
                    if(res.data.responses[0].message === "Product is successfully created.") {
                        navigate("/productList")
                    }

                
                });

        }
        else {
            navigate("/productList")
        }

    }





    return (
        <>

            <ProductEditComponent formDetails={Product} onSubmit={onSubmit} />
        </>
    )
};
export default CreateProduct;