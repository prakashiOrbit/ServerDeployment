import React, { useState } from "react";
import Layout from "./Pages/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
// import RegForm from "./Pages/Form";
// import TableView from "./Components/Table";
import FormView from "./Components/CreateForm";
import { useEffect } from "react";
// import FormView from "form-create-builder";
import { getApi, postApi } from "./webservice"
import Farmer from "./Components/Farmer/Farmer";
import Po from "./Components/Po/po";
import FarmerList from "./Components/Farmer/FarmerList";
import Login from "./Components/login/Login"
import Protected from "./Components/Protected"
const App = () => {
  // const [view, setView] = React.useState("list");
  // const [selected, setSelected] = React.useState([]);
  const fields = "/Service/farmer.json";
  const list = "/Details/listFarmer.json";
  const search = "/Service/posearch.json"
  const field = "/Service/po.json";

  const [isSignedIn, setIsSignedIn] = useState(false)

  //const list = "/Details/listOld.json"
  const navigate = useNavigate();
  useEffect(() => {
    
  },[]);

  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }

  return (
    <Routes>
      {/* <Form /> */}
      {/* <Route path="/table" element={<TableView />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Protected isSignedIn={isSignedIn}><Layout /></Protected>}>
        {/* <Route
          path="/form/list"
          element={
            <RegForm
              aev={"list"}
              fields={fields}
              list={list}
            //setView={setView} view={view} selected={selected} setSelected={setSelected}
            />
          }
        /> */}
        {/* <Route
          path="/create/ss"
          element={<RegForm aev={"add"} fields={fields} list={list} />}
        />
        <Route
          path="/form/view"
          element={<RegForm aev={"view"} fields={fields} list={list} />}
        />*/}
        <Route
          path="/farmer"
          element={<Protected isSignedIn={isSignedIn}><Farmer /></Protected>}
        />
         <Route
          path="/list/j"
          element={<FarmerList />}
        />
        <Route
          path="/po"
          element={<Po />}
        />
        <Route path="/list" element={<FormView aev={'list'} fields={fields} list={list} search={search} getApi={getApi} postApi={postApi} />} />
        <Route path="/create" element={<FormView aev={'add'} fields={fields} list={list} search={search} getApi={getApi} postApi={postApi} />} />
        <Route path="/test/view" element={<FormView aev={'view'} fields={fields} list={list} navigate={navigate} search={search} getApi={getApi} postApi={postApi} />} />
        <Route path="/test/edit" element={<FormView aev={'edit'} fields={fields} list={list} getApi={getApi} search={search} postApi={postApi} />} />
        <Route path="/creates" element={<FormView aev={'add'} field={field} list={list} search={search} getApi={getApi} postApi={postApi} />} />

        {/* <Route path="/test/:aev" element={<FormView fields={fields} list={list} />} />
        <Route path="/test/:aev" element={<FormView fields={fields} list={list} />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
