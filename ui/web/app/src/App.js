import React, { useState } from "react";
import Layout from "./Pages/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import FormView from "./Components/CreateForm";
import { useEffect } from "react";
import { getApi, postApi } from "./webservice";
import Farmer from "./Components/Farmer/Farmer";
import Po from "./Components/Po/po";
import FarmerList from "./Components/Farmer/FarmerList";
import Product from "./Components/Product/Product";
import Truck from "./Components/Truck/Truck";
import Collection_Center from "./Components/Collection_Center/Collection_Center";
import Warehouse from "./Components/Warehouse/Warehouse";
import Customer from "./Components/Customer/Customer";

import Protected from "./Components/Protected";
import Login from "./Components/login/Login";
import FarmerEdit from "./Components/Farmer/FarmerEdit";

const App = () => {
  const fields = "/Service/farmer.json";
  const list = "/Details/listFarmer.json";
  const lists = "/Details/listPo.json";
  const products = "/Service/MasterData/product.json";
  const trucks = "/Service/MasterData/truck.json";
  const warehouses = "/Service/MasterData/Warehouse.json";
  const centers = "/Service/MasterData/Collection_Center.json";
  const proList = "/Details/productlist.json";
  const truckList = "/Details/listTruck.json";
  const centerList = "/Details/listCenter.json";
  const warehouseList = "/Details/listWarehouse.json";
  const customerList = "/Details/listcustomer.json";
  const search = "/Service/farmerSearch.json";
  const searchs = "/Service/posearch.json";
  const proSearch = "/Service/prodsearch.json";
  const truckSearch = "/Service/truckSearch.json";
  const centerSearch = "/Service/centerSearch.json";
  const warehouseSearch = "/Service/warehouseSearch.json";
  const customerSearch = "/Service/customerSearch.json";
  const field = "/Service/po.json";
  const fieldss = "/Service/customer.json";

  const [isSignedIn, setIsSignedIn] = useState(false)
  console.log('isSignedIn --------------- '+ isSignedIn);
  //const list = "/Details/listOld.json"
  const navigate = useNavigate();
  useEffect(() => {
    // nav("/test/list")
  }, []);
  const signin = () => {
    setIsSignedIn(true);
  };
  const signout = () => {
    setIsSignedIn(false);
  };
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Layout />
            </Protected>
          }
        >
          <Route
            path="/farmer"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Farmer />
              </Protected>
            }
          />

<Route
            path="/farmer-edit"
            element={
              <Protected isSignedIn={isSignedIn}>
                <FarmerEdit />
              </Protected>
            }
          />

          <Route
            path="/farmerList"
            element={
              <Protected isSignedIn={isSignedIn}>
              {/* <FormView
                aev={"list"}
                fields={fields}
                list={list}
                search={search}
                getApi={getApi}
                postApi={postApi}
              /> */}
              <FarmerList/>
              </Protected>
            }
          />
          <Route
            path="/test/view"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"view"}
                fields={fields}
                list={list}
                search={search}
                getApi={getApi}
                postApi={postApi}
              />
              </Protected>
            }
          />
          <Route
            path="/test/edit"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"edit"}
                fields={fields}
                list={list}
                getApi={getApi}
                search={search}
                postApi={postApi}
              />
              </Protected>
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Layout />
            </Protected>
          }
        >
          <Route
            path="/po"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Po />
              </Protected>
            }
          />

          <Route
            path="/poList"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"list"}
                fields={field}
                list={lists}
                search={searchs}
                getApi={getApi}
                postApi={postApi}
              />
              </Protected>
            }
          />
          <Route
            path="/test/view"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"view"}
                fields={field}
                list={list}
                search={search}
                getApi={getApi}
                postApi={postApi}
              />
              </Protected>
            }
          />
          <Route
            path="/test/edit"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"edit"}
                fields={fields}
                list={list}
                getApi={getApi}
                search={search}
                postApi={postApi}
              />
              </Protected>
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Product" element={<Protected isSignedIn={isSignedIn}><Product /></Protected>} />
          <Route
            path="/productList"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"list"}
                fields={products}
                list={proList}
                search={proSearch}
                getApi={getApi}
                postApi={postApi}
              />
              </Protected>
            }
          />

          <Route
            path="/CreateProduct"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"add"}
                fields={products}
                list={list}
                getApi={getApi}
                search={search}
                postApi={postApi}
              />
              </Protected>
            }
          />
          <Route
            path="/test/view"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"view"}
                fields={products}
                list={list}
                search={search}
                getApi={getApi}
                postApi={postApi}
              />
              </Protected>
            }
          />
          <Route
            path="/test/edit"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"edit"}
                fields={products}
                list={list}
                getApi={getApi}
                search={search}
                postApi={postApi}
              />
              </Protected>
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Truck" element={<Truck />} />
          <Route
            path="/truckList"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"list"}
                fields={trucks}
                list={truckList}
                search={truckSearch}
                getApi={getApi}
                postApi={postApi}
              />
              </Protected>
            }
          />
          <Route
            path="/CreateTruck"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"add"}
                fields={trucks}
                list={list}
                getApi={getApi}
                search={search}
                postApi={postApi}
              />
              </Protected>
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Collection_Center" element={<Protected isSignedIn={isSignedIn}><Collection_Center /></Protected>} />
          <Route
            path="/centerList"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"list"}
                fields={centers}
                list={centerList}
                search={centerSearch}
                getApi={getApi}
                postApi={postApi}
              />
              </Protected>
            }
          />
          <Route
            path="/CreateCenter"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"add"}
                fields={centers}
                list={list}
                getApi={getApi}
                search={search}
                postApi={postApi}
              />
              </Protected>
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Warehouse" element={<Protected isSignedIn={isSignedIn}><Warehouse /></Protected>} />
          <Route
            path="/warehouseList"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"list"}
                fields={warehouses}
                list={warehouseList}
                search={warehouseSearch}
                getApi={getApi}
                postApi={postApi}
              />
              </Protected>
            }
          />
          <Route
            path="/CreateWarehouse"
            element={
              <Protected isSignedIn={isSignedIn}>
              <FormView
                aev={"add"}
                fields={warehouses}
                list={list}
                getApi={getApi}
                search={search}
                postApi={postApi}
              />
              </Protected>
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route
          path="/customerList"
          element={
            <FormView
              aev={"list"}
              fields={fieldss}
              list={customerList}
              search={customerSearch}
              getApi={getApi}
              postApi={postApi}
            />
          }
        />
        <Route
          path="/create"
          element={
            <FormView
              aev={"add"}
              fields={fields}
              list={list}
              search={search}
              getApi={getApi}
              postApi={postApi}
            />
          }
        />
        {/* <Route
          path="/test/view"
          element={
            <FormView
              aev={"view"}
              fields={fields}
              list={list}
              navigate={navigate}
              search={search}
              getApi={getApi}
              postApi={postApi}
            />
          }
        /> */}
        <Route
          path="/test/delete"
          element={
            <FormView
              aev={"delete"}
              fields={fields}
              list={list}
              navigate={navigate}
              search={search}
              getApi={getApi}
              postApi={postApi}
            />
          }
        />
        {/* <Route
          path="/test/edit"
          element={
            <FormView
              aev={"edit"}
              fields={fields}
              list={list}
              getApi={getApi}
              search={search}
              postApi={postApi}
            />
          }
        /> */}

        <Route
          path="/creates"
          element={
            <FormView
              aev={"add"}
              field={products}
              list={list}
              search={search}
              getApi={getApi}
              postApi={postApi}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
