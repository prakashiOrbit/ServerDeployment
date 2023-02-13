<<<<<<< HEAD
import React from "react";

//import farmerFields from "./farmerFields.js";
//import FormView from "form-create-builder";
import FormView from "../CreateForm"
import { getApi, postMethod} from "../../webservice";
import SmartConnect from "../Url/SmartConnect";

//import farmerFields from "./farmerFields.json";

class FarmerList extends React.Component {
    //   fields = "./Service/po.json";
    //   farmerFields = "./Service/farmer.json";
    constructor(props) {
        super(props);
        this.child = React.createRef();

        this.state = {
            //searchList: "/Service/posearch.json",
            functions: this.child,
            handleSearch:null
        }
        console.log(this.child, "child propss");

       
    }
    componentDidMount(){
        this.setState({
            handleSearch:  this.state.functions.current ? this.state.functions.current.handleSearch : {} 
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.handleSearch ? (<>
                        <FormView aev="list" fields={"/Service/farmer.json"} search={"/Service/posearch.json"} getApi={getApi} postApi={this.state.functions.current ? this.state.functions.current.handleSearch : null} />
                    </>) : (null)
                }
                <SmartConnect ref={this.child} />
            </div>
        );
    }
}

export default FarmerList;
=======
import React from "react";

//import farmerFields from "./farmerFields.js";
//import FormView from "form-create-builder";
import FormView from "../CreateForm"
import { getApi} from "../../webservice";
import SmartConnect from "../Url/SmartConnect";

//import farmerFields from "./farmerFields.json";

class FarmerList extends React.Component {

    //   fields = "./Service/po.json";
    //   farmerFields = "./Service/farmer.json";
    constructor(props) {
        super(props);
        this.child = React.createRef();

        this.state = {
            functions: this.child,
            handleSearch:null,
            flow:"FarmerFlow",
            tenant:"apptest/"
        }
        console.log(this.child, "child propss");

       
    }
    componentDidMount(){
        // this.setState({
        //     //handleClick:  this.state.functions.current ? this.state.functions.current.handleSearch : {} 
        //     this.child.current.handleSearch();
        // })
        // this.child.current.handleSearch();
        this.child.current.handleSearch();
    }

    render() {
        return (
            <div>
                {
                    this.state.handleSearch ? (<>
                        <FormView aev="list" fields={"/Service/farmer.json"} search={"/Service/posearch.json"} getApi={getApi}/>
                    </>) : (null)
    }
                <SmartConnect ref={this.child} flow={this.state.flow} tenant={this.state.tenant}  handleSearch={this.handleSearch}/>
            </div>
        );
    }
}

export default FarmerList;
>>>>>>> b7f219a4b8c6bcdf007d6233637736215ac64634
