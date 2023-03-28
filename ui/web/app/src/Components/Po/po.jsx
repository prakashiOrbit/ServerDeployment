import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import FormView from "../CreateForm"
import { getApi, postMethod } from "../../webservice";
//import SmartConnect from "../smart-connect/smart-connect";
import SmartConnect from "../smart-connect/smart-connect";
//import SmartConnect from "../Url/SmartConnect";
import {config} from "../../Constants/constant";
import POList from "./POList";
import { Navigate } from 'react-router-dom';
//import farmerFields from "./farmerFields.json";

class Po extends React.Component {
    //   fields = "./Service/po.json";
    //   farmerFields = "./Service/farmer.json";
    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            redirect: ""
        }
        
        //console.log(this.child, "child propss");
        this.insertData = this.insertData.bind(this);
        this.navigatePage = this.navigatePage.bind(this);


    }
    componentDidMount() {       
     
         
       
    }

    navigatePage() {
        console.log("go to ")
        this.setState({ redirect: "/poList" });
       
    }

    insertData(poData) {
        //this.child = React.createRef();
        console.log("pooo",poData)
        const smartlook = {"FlowAdmin": {
            "___smart_action___": "lookup",
            "___smart_value___": "PurchaseOrderTemplateFlow"
          },};          
        
        var test = this.child.current.postMethod({ "FlowAdmin": { "___smart_action___": "lookup", "___smart_value___": "PurchaseOrderTemplateFlow" }, ...poData });
      console.log(test);
      this.navigatePage()
    }
    
    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
          }
          
        return (
            <div>
               
                        <FormView aev="add" fields={"/Service/po.json"} search={"/Service/posearch.json"} getApi={getApi} postApi={this.insertData }/>
                    
                
                <SmartConnect server={config.host} port={config.port} tenant={config.tenant} flow= "PurchaseOrderTemplateFlow" flowEvent="CreatePurchaseOrderTemplate" ref={this.child} />
            </div>




        );
    }
}

export default Po;
