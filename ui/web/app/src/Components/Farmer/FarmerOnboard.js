import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditComponent from '../../Modules/edit';
import postMethod from '../../Modules/service';
import farmer from "./farmer.json";
import { config } from '../../Constants/constant';
import './farmer.css';

const FarmerOnboard = () => {
  const navigate = useNavigate();
  const [aadharErrorMessage, setAadharErrorMessage] = useState('');

  const onSubmit = (text, data) => {
    console.log(data, text);

    if (text === "submit") {
      const payload = {
        ...data,
        "FlowAdmin": {
          "___smart_action___": "lookup",
          "___smart_value___": "AdminFlow",
        }
      };

      const farmerArray = Array.isArray(farmer) ? farmer : []; // Ensure farmer is an array
      const aadharExistsInDatabase = farmerArray.some(farmerData =>
        farmerData.details.some(
          detail => detail.id === 'aadharNo' && detail.value === data.aadharNo
        )
      );
      if (aadharExistsInDatabase) {
        setAadharErrorMessage('The Aadhar number entered has already been registered.');
        return;
      }

      postMethod(config.addfarmer, payload)
        .then((res) => {
          const message = res.data.responses[0].message;
          console.log(message);
          if (message === "Same Aadhar Details") {
            setAadharErrorMessage('The Aadhar number entered has already been registered.');
            return;
          }

          if (message === "Farmer is Successfully Onboarded.") {
            navigate("/farmerList");
          }
        });
    } else {
      navigate("/farmerList");
    }
  };

  const handleCloseAlert = () => {
    setAadharErrorMessage('');
  };

  return (
    <>
      {aadharErrorMessage && (
        <div className="alert-box">
          <p>{aadharErrorMessage}</p>
          <button
            style={{ backgroundColor: 'green', color: 'white' }}
            onClick={handleCloseAlert}
          >OK</button>
        </div>
      )}
      <EditComponent formDetails={farmer} onSubmit={onSubmit} />
    </>
  );
};

export default FarmerOnboard;
