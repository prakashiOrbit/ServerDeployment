import React from "react";

import FormView from "../CreateForm";
import { getApi, postMethod } from "../../webservice";
import SmartConnect from "../Url/SmartConnect";

//import farmerFields from "./farmerFields.json";

class Po extends React.Component {
  //   fields = "./Service/po.json";
  //   farmerFields = "./Service/farmer.json";
  constructor(props) {
    super(props);
    this.child = React.createRef();

    this.state = {
      functions: this.child,
      handleClick: null,
      flow: "PoFlow",
      tenant: "apptest/",
    };
    console.log(this.child, "child propss");
  }
  componentDidMount() {
    this.setState({
      handleClick: this.state.functions.current
        ? this.state.functions.current.handleClick
        : {},
    });
  }

  render() {
    return (
      <div>
        {this.state.handleClick ? (
          <>
            <FormView
              aev="add"
              fields={"/Service/po.json"}
              search={"/Service/posearch.json"}
              getApi={getApi}
              postApi={
                this.state.functions.current
                  ? this.state.functions.current.handleClick
                  : null
              }
            />
          </>
        ) : null}
        <SmartConnect
          ref={this.child}
          flow={this.state.flow}
          tenant={this.state.tenant}
        />
      </div>
    );
  }
}

export default Po;
