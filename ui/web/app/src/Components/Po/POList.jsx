import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { header_data } from "./po_headerdata";
import postMethod, { getMethod } from "../../Modules/service";
import { config } from "../../Constants/constant";
import Datatable from "../../Modules/Datatable/datatable";

const POList = () => {

  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const [ccdata, setccdata] = useState([{ name: "check", label: "check" }]);
  const [podata, setPodata] = useState({});
  const[currentPage,setcurrentPage]=useState(localStorage.getItem("poListPage")?localStorage.getItem("poListPage"):0);

  useEffect(() => {
    getPOList();
  }, [])

  const onPagination =(page)=>{
    if(page>=0){
      setcurrentPage(page);
      localStorage.setItem("poListPage",page);
    }

  }
  const getPOList = () => {

    const payloaddata = {
      "PurchaseOrderTemplate": {
        "___smart_action___": "lookup",
        "___smart_value___": "PurchaseOrderTemplateFlow"
      },
      "searchString": "*"
    };

    postMethod(config.getPO, payloaddata)
      .then((res) => {
        console.log("output",res.data.responses[0].POS);
        const payload = res.data.responses[0].POS.map((index) => ({
          value: index.centerId, label: index.centerName
        }))
        console.log(payload);
        setccdata(payload);

      });
  };

  const handleOptions = (data, option) => {
    console.log(option);
    console.log(data);
    localStorage.setItem('po',data.name);
    localStorage.setItem("purchaseOrderDetails",JSON.stringify(data))
    switch (option) {
      case "Edit":

        navigate('/po-edit', {
          state: {
            id: data.id,
            data: data,
          }
        });
        break;
      
      default:
        break;
    }
  }

  const handleCreateClick = () => {
    navigate('/po');
  };

  return (
    <div style={{ margin: "10%" }}>

      <Datatable currentPage={currentPage}  onPagination={onPagination} title="Purchase Orders List" print={false} url={config.getPO} handleOptions={handleOptions} onCreateClick={handleCreateClick} flowEvent="SearchPurchaseOrdersTemplate" flow="PurchaseOrderTemplateFlow" header_data={header_data} showCreateIcon={true} />

    </div>
  );

}
export default POList;

