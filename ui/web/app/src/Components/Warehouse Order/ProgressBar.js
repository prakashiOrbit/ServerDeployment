import React, { useState } from 'react';
import "./style.css";
import BasicTable from '../BasicTable';
import { header_data} from "./tableData";
import Datatable from '../../Modules/Datatable/datatable';
import { config } from '../../Constants/constant';
//import { header_data } from '../Po/po_headerdata';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

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
  

  return (
    <><div className="message" style={{ marginTop: '80px', fontWeight: "bold", fontSize: "28px", color: "blueviolet" }}>Warehouse Receiving Order
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
    </div><div style={{ marginTop: '25px', fontWeight: "bold", fontSize: "28px", color: "blueviolet" }}>Products Summary</div>
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
<Datatable url={config.getfarmer} flowEvent="farmerEvent" flow="FarmerFlow" header_data={header_data} showAssignToCC={false} showCreateIcon={false}/>

<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
      <div style={{ marginTop: '20px' }}>
  <label htmlFor="shipping-address" style={{fontSize: "23px", fontWeight: "bold", color: "blueviolet"}}>Shipping Address</label>
  <br />
  <textarea  name="shipping-address" rows="7" cols="50"></textarea>
</div>

<div style={{ marginTop: '20px' }}>
  <label htmlFor="payment-info" style={{fontSize: "23px", fontWeight: "bold", color: "blueviolet"}}>Payment Information</label>
  <br />
  <textarea id="payment-info" name="payment-info" rows="7" cols="50" ></textarea>
</div>
</div>
    </>
  );
};

export default ProgressBar;

