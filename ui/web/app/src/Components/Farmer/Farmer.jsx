import React from "react";

//import farmerFields from "./farmerFields.js";
//import FormView from "form-create-builder";
import FormView from "../CreateForm"
import { getApi, postMethod } from "../../webservice";
import SmartConnect from "../Url/SmartConnect";

//import farmerFields from "./farmerFields.json";

class Farmer extends React.Component {

    //   fields = "./Service/po.json";
    //   farmerFields = "./Service/farmer.json";
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
        // this.child.current.handleSearch();
    }

    render() {
        return (
            <div>
                {
                    this.state.handleClick ? (<>
                        <FormView aev="add" fields={"/Service/farmer.json"} search={"/Service/posearch.json"} getApi={getApi} postApi={this.state.functions.current ? this.state.functions.current.handleClick : null} />
                    </>) : (null)
    }
                <SmartConnect ref={this.child} flow={this.state.flow} tenant={this.state.tenant}/>
            </div>
        );
    }
}

export default Farmer;
