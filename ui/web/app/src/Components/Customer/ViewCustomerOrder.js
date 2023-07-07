import React, { useEffect } from 'react';
import { useState } from 'react';
import Datatable from '../../Modules/Datatable/datatable';
import { config } from '../../Constants/constant';
import { header_data } from "./customer_header";
import postMethod from "../../Modules/service";
import { useLocation } from 'react-router-dom';

function ViewCustomerOrder(props) {
  const [orderData, setOrderData] = useState([]);
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const { coId } = location.state;
  const { name } = location.state;
  const { phoneNumber } = location.state;
  const { deliveryAddress } = location.state;
  const { status } = location.state;
  const { date } = location.state;
  const { source } = location.state;
  const { totalPrice } = location.state;
  const[currentPage,setcurrentPage]=useState(localStorage.getItem("orderPage")?localStorage.getItem("orderPage"):0);

  useEffect(() => {
    getCOIList();
  }, [])

  useEffect(() => {
    console.log("Coid is : " + coId);
    console.log("Customer Name is : ", name);
    console.log("Phone Number is : ", phoneNumber);
    console.log("Delivery Address is : ", deliveryAddress);
    console.log("Order Status is : ", status);
    console.log("Order Date is : ", date);
    console.log("Ordered Source: ", source);
    console.log("Total Price is : ", totalPrice)
  }, [coId, name, phoneNumber, deliveryAddress, status, date, source, totalPrice]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const onPagination =(page)=>{
    if(page>=0){
      setcurrentPage(page);
      localStorage.setItem("orderPage",page);
    }

  }

  const getCOIList = () => {
    const payload = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "AppFlow"
      },
      "searchString": coId
    };

    postMethod(config.getCustomerOrder, payload)
      .then((res) => {
        console.log(res.data.responses[0].farmers);
        setOrderData(res.data.responses[0].farmers);
      });

    const handleSubmit = () => {
      console.log(formData);

      const payloaddata = {
        ...formData, "CustomerOrder": {
          "___smart_action___": "lookup",
          "___smart_value___": formData.coId
        }
      };

      postMethod(config.getCustomerview, payloaddata)
        .then((res) => {
          console.log("output", res.data.responses[0].farmers);
          setFormData(res.data.responses[0].farmers);
        });
    };
  };

  return (
    <>
      <div style={{ marginTop: "85px" }}>
        <h1 style={{ color: "green", textAlign: "center", fontSize: "34px" }}>Order Details</h1>
        <div style={{ display: "flex" }}>
          <h4 style={{ color: "blue", width: "550px" }}>
            <span style={{ color: "black" }}>Customer Order ID :</span> {coId}
          </h4>
          <h4 style={{ color: "blue", width: "550px" }}>
            <span style={{ color: "black" }}>Customer Name :</span> {name}
          </h4>
        </div>
        <div style={{ display: "flex" }}>
          <h4 style={{ color: "blue", width: "550px" }}>
            <span style={{ color: "black" }}>Delivery Address :</span> {deliveryAddress}</h4>
          <h4 style={{ color: "blue", width: "550px" }}>
            <span style={{ color: "black" }}>Phone Number :</span> {phoneNumber}</h4>
        </div>
        <div style={{ display: "flex" }}>
          <h4 style={{ color: "blue", width: "550px" }}>
            <span style={{ color: "black" }}>Order Status :</span>  {status}</h4>
          <h4 style={{ color: "blue", width: "550px" }}>
            <span style={{ color: "black" }}>Ordered Date :</span> {date}</h4>
        </div>
        <div style={{ display: "flex" }}>
          <h4 style={{ color: "blue", width: "550px" }}>
            <span style={{ color: "black" }}>Ordered Source :</span>  {source}</h4>
          <h4 style={{ color: "blue", width: "550px" }}>
            <span style={{ color: "black" }}>Total Price (₹):</span>  {totalPrice}
          </h4>
        </div>
        <Datatable
        currentPage={currentPage}  
        onPagination={onPagination} 
          columns={header_data}
          hideAction={true}
          url={config.getCustomerOrder}
          table_data={orderData}
          flowEvent="CustomerEvent"
          flow="AppFlow"
          print={false}
          header_data={header_data}
          showAssignToCC={false}
          showCreateIcon={false}
        />
      </div>
    </>
  );
}

export default ViewCustomerOrder;
