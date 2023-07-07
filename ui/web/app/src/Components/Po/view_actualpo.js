import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Datatable from "../../Modules/Datatable/datatable";
import { Menu } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import postMethod, { getMethod } from "../../Modules/service";
import { config } from "../../Constants/constant";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import { MenuItem } from "@mui/material";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from "@mui/material";

const ViewActualPO = () => {

  const location = useLocation();
  const { fid } = location.state;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [potemplate, setpotemplate] = useState([]);
  const [POTable, setPOTable] = useState([]);
  const [POId, setPOId] = useState('');
  const farmersdata = JSON.parse(localStorage.getItem("farmerDetails"));
  const [currentPage, setcurrentPage] = useState(localStorage.getItem("actualPoPage") ? localStorage.getItem("actualPoPage") : 0);
  const header_data = [
    {
      label: <strong>Item Name</strong>,
      name: "itemName",
      control: "date",
      vallabelation: "alphanumeric",
    },
    {
      label: <strong>SKU Id</strong>,
      name: "skuId",
      control: "date",
      vallabelation: "alphanumeric",
    },

    {
      label: <strong>Quantity</strong>,
      name: "quantity",
      control: "textbox",
      vallabelation: "alphanumeric",
    },
    {
      label: <strong>Base Price (₹)</strong>,
      name: "basePrice",
      control: "textbox",
      vallabelation: "alphanumeric",
    },
    {
      label: <strong>Pick Up Date</strong>,
      name: "pickUpDate",
      control: "textbox",
      vallabelation: "alphanumeric",
    },
    {
      label: <strong>Day Of Week</strong>,
      name: "dayOfWeek",
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <ul>
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      },
    },
  ];

  useEffect(() => {
    getPOTemplate();

  }, [])
  const onPagination = (page) => {
    if (page >= 0) {
      setcurrentPage(page);
      localStorage.setItem("actualPoPage", page);
    }

  }
  const options = ["View Actual PO Items"]

  const getPOTemplate = () => {

    const payloaddata = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "AdminFlow"
      },
      "searchString": fid
    };

    postMethod(config.SearchPurchaseOrdersTable, payloaddata)
      .then((res) => {
        console.log(res.data.responses[0].POS);
        setpotemplate(res.data.responses[0].POS);

      });
  };

  const viewTemplate = () => {
    const payloaddata = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "AdminFlow"
      },
      "searchString": POId
    };

    postMethod(config.SearchPurchaseOrdersTable, payloaddata)
      .then((res) => {
        console.log(res.data.responses[0].POS);
        setPOTable(res.data.responses[0].POS);

      });
  }

  const handleOptions = (data, option) => {
    console.log(option);
    console.log(data);
    localStorage.setItem('SKU ID', data.skuId);
    localStorage.setItem("actualPoDetails", JSON.stringify(data))

  }

  const handleClose = () => {
    setAnchorEl(null);
  }


  const handleClick = (e, row) => {
    console.log(row?.poTemplateId);
    setPOId(row?.poTemplateId);
    setAnchorEl(e.currentTarget);
  }

  const onSelect = (option) => {
    switch (option) {
      case options[0]:
        viewTemplate();
        console.log("view template");
        break;

      default:
        break;
    }
    setAnchorEl(null);
  }

  // const handlePrint = () => {
  //   window.print();
  // };

  return (
    <div style={{ margin: "10%" }}>
      <Grid container spacing={2} style={{ margin: "8%" }}>

        <Grid item xs={6}> Farmer Name : {farmersdata.name}</Grid>
        <Grid item xs={6} >
          Collection Center Name : {farmersdata.centerName}
        </Grid>
        <Grid item xs={6}> Origin Address : {farmersdata.farmerAddress} </Grid>
        <Grid item xs={6} >
          Destination Address : {farmersdata.centerAddress}
        </Grid>


      </Grid>

      {(potemplate.length > 0) ? <>
        {/* <IconButton onClick={handlePrint}>
          <PrintIcon />
        </IconButton> */}
        <Grid container spacing={2}>
          <Grid item xs={3}>

            <Typography variant="h6">Actual PO List</Typography>
            <Table style={{ marginTop: "20px", border: '1px solid black' }} aria-label="simple table">
              <TableHead>
                <TableRow>

                </TableRow>
              </TableHead>
              <TableBody style={{ border: '1px solid black' }}  >
                {potemplate.map((row, index) => (

                  <TableRow key={row.id}>
                    <TableCell style={{ border: '1px solid black' }} component="th" scope="row">
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span> Actual PO {index + 1} </span>
                        <IconButton
                          onClick={(e) => handleClick(e, row)}
                        >
                          <MoreVertIcon />
                        </IconButton>

                        <Menu
                          id="long-menu"
                          MenuListProps={{
                            'aria-labelledby': 'long-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={() => handleClose()}
                          PaperProps={{
                            style: {
                              width: '20ch',
                            },
                          }}
                        >
                          {options.map((option) => (
                            <MenuItem key={option} onClick={() => { onSelect(option) }}>
                              {option}
                            </MenuItem>
                          ))}
                        </Menu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={12} style={{ marginTop: "20px" }}>
            <Datatable currentPage={currentPage} onPagination={onPagination} url={config.SearchPurchaseOrdersTable} hideAction={true} handleOptions={handleOptions} flowEvent="farmerEvent" flow="AdminFlow" header_data={header_data} table_data={POTable} />

          </Grid>
        </Grid>
      </> :
        <>
          No Actual PO available
        </>
      }

    </div>
  );
}

export default ViewActualPO;