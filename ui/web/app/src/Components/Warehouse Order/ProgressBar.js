import React, { useState } from 'react';
import "./style.css";
import BasicTable from '../BasicTable';
import { header_data } from "./tableData";
import Datatable from '../../Modules/Datatable/datatable';
import { config } from '../../Constants/constant';
import EditComponent from './WarehouseEditComponent';
import warehouse from "./warehouse.json";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [formdata, setformdata] = useState('');

  const handlePendingClick = () => {
    setProgress(0);
  };

  const handlePickedClick = () => {
    setProgress(25);
  };

  const handlePackedClick = () => {
    setProgress(50);
  };

  const handleShippedClick = () => {
    setProgress(75);
  };

  const handleDeliveredClick = () => {
    setProgress(100);
  };

  const onSubmit = (e) => {
    onSubmit(e.target.name, formdata);

  }
  return (
    <><div className="message" style={{ marginTop: '80px', fontWeight: "bold", fontSize: "28px", color: "blueviolet" }}>Warehouse Receiving Order
    <label htmlFor="order-date" style={{ fontWeight: "bold", fontSize: "22px", color: "orange" , marginLeft:"310px"}}>Order date:</label>
    <input type="date" id="order-date" name="order-date" style={{ marginLeft: "20px", width: "130px" , height:"35px"}} />
      <div className="progress-container" style={{ border: '5px solid  #17a589 ', marginTop: '10px', padding: '15px' }}>
        
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {progress > 0 && <span className="progress-text">{`${progress}%`}</span>}
        </div>
        <div className="button-container">
          <button className="button" onClick={handlePendingClick}>Pending</button>
          <button className="button" onClick={handlePickedClick}>Picked</button>
          <button className="button" onClick={handlePackedClick}>Packed</button>
          <button className="button" onClick={handleShippedClick}>Shipped</button>
          <button className="button" onClick={handleDeliveredClick}>Delivered</button>
        </div>
      </div>
    </div><div style={{ marginTop: '35px', fontWeight: "bold", fontSize: "28px", color: "blueviolet" }}>Products Summary</div>
      {/* <table style={{ marginTop: '8px', width: "100%" }}>

        <thead>
          <tr>
            <th>S.No</th>
            <th>Item No</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>QP110</td>
            <td>Apple</td>
            <td>10 KG</td>
            <td>180</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

        </tbody>
      </table> */}
      {/* <BasicTable
  formDetails={{ submitURL: 'url' }}
  tableData={header_data}
  showData={(url, data) => console.log(url, data)}
  getApi={api => console.log(api)}
/> */}
      <Datatable url={config.getfarmer} flowEvent="farmerEvent" flow="AdminFlow" header_data={header_data} showAssignToCC={false} showCreateIcon={false} />


      <EditComponent type="edit" formDetails={warehouse} onSubmit={onSubmit} />
    </>
  );
};

export default ProgressBar;

