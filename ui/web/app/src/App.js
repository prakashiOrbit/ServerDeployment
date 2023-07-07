import React, { useState } from "react";
import Layout from "./Pages/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PoCreate from "./Components/Po/po";
import POEdit from "./Components/Po/POEdit";
import FarmerList from "./Components/Farmer/FarmerList";
import TruckEdit from "./Components/Truck/TruckEdit";
import CreateCollectionCenter from "./Components/CollectionCenter/CreateCollectionCenter";
import CollectionCenterList from "./Components/CollectionCenter/CollectionCenterList";
import CollectionCenterEdit from "./Components/CollectionCenter/CollectionCenterEdit";
import CreateWarehouse from "./Components/Warehouse/CreateWarehouse";
import WarehouseList from "./Components/Warehouse/WarehouseList";
import WarehouseEdit from "./Components/Warehouse/WarehouseEdit";
import FarmerEdit from "./Components/Farmer/FarmerEdit";
import FarmerOnboard from "./Components/Farmer/FarmerOnboard";
import Protected from "./Components/Protected";
import CreateTruck from "./Components/Truck/CreateTruck";
import TruckList from "./Components/Truck/TruckList";
import CreateProduct from "./Components/Product/CreateProduct";
import ProductList from "./Components/Product/ProductList";
import ProductEdit from "./Components/Product/ProductEdit";
import POTemplateList from "./Components/Po/POtemplate";
import CreatePo from "./Components/Po/create_po";
import ProgressBar from "./Components/Warehouse Order/ProgressBar";
import CustomerList from "./Components/Customer/CustomerList";
import ViewCustomerOrder from "./Components/Customer/ViewCustomerOrder";
import ItemList from "./Components/Items";
import SignIn from "./Components/login";
import ViewActualPO from "./Components/Po/view_actualpo";
import CategoryList from "./Components/Category/categories";

const App = () => {

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
        <Route path="/login" element={<SignIn />}></Route>
        <Route
          path="/"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Layout />
            </Protected>
          }
        >
          <Route
            exact path="/farmer" component={FarmerOnboard}
            element={
              <Protected isSignedIn={isSignedIn}>
                <FarmerOnboard />
              </Protected>
            }
          />
          <Route
            path="/create-po"
            element={
              <Protected isSignedIn={isSignedIn}>
                <CreatePo />
              </Protected>
            }
          />
          <Route
            path="/view_actualpo"
            element={
              <Protected isSignedIn={isSignedIn}>
                <ViewActualPO />
              </Protected>
            }
          />
          <Route
            path="/category-list"
            element={
              <Protected isSignedIn={isSignedIn}>
                <CategoryList />
              </Protected>
            }
          />
          <Route
            path="/product-list"
            element={
              <Protected isSignedIn={isSignedIn}>
                <ItemList />
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



          <Route path="/po"
            element={
              <Protected isSignedIn={isSignedIn}>
                <PoCreate />
              </Protected>}
          />

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

                <POTemplateList />
              </Protected>
            }
          />

          <Route path="/Product" element={<CreateProduct />} />
          <Route
            path="/productList"
            element={
              <Protected isSignedIn={isSignedIn}>
                <ProductList />
              </Protected>
            }
          />
          <Route
            path="/CreateProduct"
            element={
              <Protected isSignedIn={isSignedIn}>
                < CreateProduct />
              </Protected>

            }
          />

          <Route
            path="/product-edit"
            element={
              <Protected isSignedIn={isSignedIn}>
                <ProductEdit />
              </Protected>

            }
          />

          <Route path="/Truck" element={<CreateTruck />} />
          <Route
            path="/truckList"
            element={
              <Protected isSignedIn={isSignedIn}>
                <TruckList />
              </Protected>

            }
          />
          <Route
            path="/truck-edit"
            element={
              <Protected isSignedIn={isSignedIn}>
                <TruckEdit />
              </Protected>


            }
          />
          <Route
            path="/CreateTruck"
            element={
              <Protected isSignedIn={isSignedIn}>
                <CreateTruck />
              </Protected>

            }
          />



          <Route path="/CollectionCenter" element={< CreateCollectionCenter />} />
          <Route
            path="/centerList"
            element={
              <Protected isSignedIn={isSignedIn}>
                <CollectionCenterList />
              </Protected>

            }
          />
          <Route
            path="/center-edit"
            element={
              <Protected isSignedIn={isSignedIn}>
                <CollectionCenterEdit />
              </Protected>


            }
          />
          <Route
            path="/CreateCenter"
            element={
              <Protected isSignedIn={isSignedIn}>
                < CreateCollectionCenter />
              </Protected>

            }
          />

          <Route path="/Warehouse" element={<CreateWarehouse />} />
          <Route
            path="/warehouseList"
            element={
              <Protected isSignedIn={isSignedIn}>
                <WarehouseList />
              </Protected>

            }
          />
          <Route
            path="/warehouse-edit"
            element={
              <Protected isSignedIn={isSignedIn}>
                <WarehouseEdit />
              </Protected>


            }
          />
          <Route
            path="/CreateWarehouse"
            element={
              <Protected isSignedIn={isSignedIn}>
                <CreateWarehouse />
              </Protected>

            }
          />
          <Route
            path="/customerList"
            element={
              <Protected isSignedIn={isSignedIn}>
                <CustomerList />
              </Protected>

            }
          />

          <Route
            path="/view-customer"
            element={
              <Protected isSignedIn={isSignedIn}>
                <ViewCustomerOrder />
              </Protected>


            }
          />
          <Route
            path="/CreateWarehouse"
            element={

              <CreateWarehouse />
            }
          />
          <Route>
            <Route path="/warehouseOrder" element={<ProgressBar />} />
          </Route>


        </Route>

      </Routes>
    </>
  );
};

export default App;

