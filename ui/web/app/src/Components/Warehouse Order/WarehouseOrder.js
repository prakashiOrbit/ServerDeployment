import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { useParams } from 'react-router-dom';
import "./style.css";

const OrderStatus = () => {
    const { id } = useParams();
    const [status, setStatus] = React.useState('pending');
    const [progress, setProgress] = React.useState();

  useEffect(() => {
    switch(status) {
      case 'pending':
        setProgress(0);
        break;
      case 'packed':
        setProgress(50);
        break;
      case 'delivered':
        setProgress(100);
        break;
      default:
        setProgress(0);
        break;
    }
  }, [status]);

  return (
    <div>
      <h2>Order Status for Order #{id}</h2>
      <div className="status-container">
        {/* <button className={`status-item ${status === 'pending' ? 'active' : ''}`} onClick={() => setStatus('pending')}>
          <span className="status-label">Pending</span>
        </button>
        <button className={`status-item ${status === 'picked' ? 'active' : ''}`} onClick={() => setStatus('picked')}>
          <span className="status-label">Picked</span>
        </button>
        <button className={`status-item ${status === 'packed' ? 'active' : ''}`} onClick={() => setStatus('packed')}>
          <span className="status-label">Packed</span>
        </button>
        <button className={`status-item ${status === 'shipped' ? 'active' : ''}`} onClick={() => setStatus('shipped')}>
          <span className="status-label">Shipped</span>
        </button>
        <button className={`status-item ${status === 'delivered' ? 'active' : ''}`} onClick={() => setStatus('delivered')}>
          <span className="status-label">Delivered</span>
        </button> */}
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default OrderStatus; 
