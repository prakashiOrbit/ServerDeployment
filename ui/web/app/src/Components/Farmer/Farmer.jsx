import React from "react";
import FormView from "../CreateForm"
import { getApi } from "../../webservice";
import SmartConnect from "../smart-connect/smart-connect";
import {config} from "../../Constants/constant";

class Farmer extends React.Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();

        this.state = {
            functions: this.child,
            handleClick:null,
            handleSearch:null,
            flow:"FarmerFlow",
            tenant:"apptest/"
        }
        console.log(this.child, "child propss");

       
    }
    componentDidMount(){
        this.setState({
            handleClick:  this.state.functions.current ? this.state.functions.current.handleClick : {} 
        })
        
    }

    render() {
        return (
            <div>
                {
                    this.state.handleClick ? (<>
                        <FormView aev="add" fields={"/Service/farmer.json"} search={"/Service/posearch.json"} getApi={getApi} postApi={this.state.functions.current ? this.state.functions.current.handleClick : null} />
                    </>) : (null)
    }
          <SmartConnect server={config.host} port={config.port} tenant={config.tenant} flow="farmer" flowEvent="farmerEvent" ref={this.child} /> 
              </div>
        );
    }
}

export default Farmer;
