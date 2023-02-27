import React from "react";
import FormView from "../CreateForm";
import { getApi, postMethod } from "../../webservice";
import SmartConnect from "../Url/SmartConnect";

class Farmer extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();

    this.state = {
      functions: this.child,
      handleClick: null,
      handleSearch: null,
      flow: "FarmerFlow",
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
    // this.child.current.handleSearch();
  }

  render() {
    return (
      <div>
        <div style={{ flex: 1, borderBottom: "1px solid black" }}>
          {this.state.handleClick ? (
            <FormView
              aev="add"
              fields={"/Service/farmer.json"}
              search={"/Service/farmerSearch.json"}
              getApi={getApi}
              postApi={
                this.state.functions.current
                  ? this.state.functions.current.handleClick
                  : null
              }
            />
          ) : null}
        </div>
        <div>
          <SmartConnect
            ref={this.child}
            flow={this.state.flow}
            tenant={this.state.tenant}
          />
        </div>
      </div>
    );
  }
}

export default Farmer;
