import React, { useState } from "react";
import Layout from "./Pages/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import FormView from "./Components/CreateForm";
import { useEffect } from "react";
import { getApi, postApi } from "./webservice";
import Po from "./Components/Po/po";
import POEdit from "./Components/Po/POEdit";
import POList from "./Components/Po/POList";
import FarmerList from "./Components/Farmer/FarmerList";
import TruckEdit from "./Components/Truck/TruckEdit";
import CreateCollectionCenter from "./Components/CollectionCenter/CreateCollectionCenter";
import CollectionCenterList from "./Components/CollectionCenter/CollectionCenterList";
import CollectionCenterEdit from "./Components/CollectionCenter/CollectionCenterEdit";
import CreateWarehouse from "./Components/Warehouse/CreateWarehouse";
import WarehouseList from "./Components/Warehouse/WarehouseList";
import WarehouseEdit from "./Components/Warehouse/WarehouseEdit";
import Customer from "./Components/Customer/Customer";
import Login from "./Components/login/Login";
import FarmerEdit from "./Components/Farmer/FarmerEdit";
import FarmerOnboard from "./Components/Farmer/FarmerOnboard";
import Protected from "./Components/Protected";
import CreateTruck from "./Components/Truck/CreateTruck";
import TruckList from "./Components/Truck/TruckList";
import CreateProduct from "./Components/Product/CreateProduct";
import ProductList from "./Components/Product/ProductList";
import ProductEdit from "./Components/Product/ProductEdit";
import OrderTracker from "./Components/Warehouse Order/WarehouseOrder";
import OrderStatus from "./Components/Warehouse Order/WarehouseOrder";
import ProgressBar from "./Components/Warehouse Order/ProgressBar";

const App = () => {
  const fields = "/Service/farmer.json";
  const list = "/Details/listFarmer.json";
  const lists = "/Details/listPo.json";
  const products = "/Service/MasterData/product.json";
  const customerList = "/Details/listcustomer.json";
  const search = "/Service/farmerSearch.json";
  const searchs = "/Service/posearch.json";
  const customerSearch = "/Service/customerSearch.json";
  const field = "/Service/po.json";
  const fieldss = "/Service/customer.json";

  const [isSignedIn, setIsSignedIn] = useState(false);

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
        <Route path="/login" element={<Login />}></Route>
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
                <FarmerOnboard />
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

                <FarmerList />
              </Protected>
            }
          />



          <Route path="/po" element={<Po />} />

          <Route
            path="/po-edit"
            element={
              <Protected isSignedIn={isSignedIn}>
                <POEdit />
              </Protected>
            }
          />

            <Route
            path="/poList"
            element={
              <Protected isSignedIn={isSignedIn}>
              
              <POList/>
              </Protected>
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
          <Route
            path="/test/view"
            element={
              <FormView
                aev={"view"}
                fields={field}
                list={list}
                search={search}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
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
          />

          <Route path="/Product" element={<CreateProduct />} />
          <Route
            path="/productList"
            element={

              <ProductList />
            }
          />
          <Route
            path="/CreateProduct"
            element={

              < CreateProduct />
            }
          />

          <Route
            path="/product-edit"
            element={

              <ProductEdit />

            }
          />



          <Route path="/Truck" element={<CreateTruck />} />
          <Route
            path="/truckList"
            element={

              <TruckList />
            }
          />
          <Route
            path="/truck-edit"
            element={

              <TruckEdit />

            }
          />
          <Route
            path="/CreateTruck"
            element={

              <CreateTruck />
            }
          />



          <Route path="/CollectionCenter" element={< CreateCollectionCenter />} />
          <Route
            path="/centerList"
            element={

              <CollectionCenterList />
            }
          />
          <Route
            path="/center-edit"
            element={

              <CollectionCenterEdit />

            }
          />
          <Route
            path="/CreateCenter"
            element={

              < CreateCollectionCenter />
            }
          />

          <Route path="/Warehouse" element={<CreateWarehouse />} />
          <Route
            path="/warehouseList"
            element={

              <WarehouseList />
            }
          />
          <Route
            path="/warehouse-edit"
            element={

              <WarehouseEdit />

            }
          />
          <Route
            path="/CreateWarehouse"
            element={

              <CreateWarehouse />
            }
          />
          <Route path="/customer" element={<Customer />} />
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
                fields={fieldss}
                list={customerList}
                search={customerSearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          
          
          <Route>
          <Route path="/warehouseOrder" element={<ProgressBar />} />
          </Route>
          

        </Route>

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
