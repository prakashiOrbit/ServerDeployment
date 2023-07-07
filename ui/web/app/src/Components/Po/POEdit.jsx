import React from 'react';
import postMethod from '../../Modules/service';
import { config } from '../../Constants/constant';
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import { Grid, ThemeProvider, createTheme } from '@mui/material';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import { Box } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from '@mui/material';
import { TextField } from '@material-ui/core';

const days = ["Monday ", " Tuesday ", " Wednesday ", " Thursday ", " Friday ", " Saturday ", " Sunday "];

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const PoEdit = () => {
  const [data, setData] = useState([]);

  const [selectedValues, setSelectedValues] = useState([]);

  const [selectedItemName, setSelectedItemName] = useState('');
  const [selectedSkuId, setSelectedSkuId] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);

    setSelectedValues(event.target.value);
  };

  useEffect(() => {
    console.log("setSelectedValues", selectedValues)
  }, [selectedValues])

  const formDetails = {};

  const [dataurl, setDataurl] = useState('/Service/poTableData.json');

  const [title, setTitle] = useState('Purchase Order Line Items');
  const [ptid, setptid] = useState('');
  const [currentdate, setcurrentdate] = useState('');

  const location = useLocation();
  const { fid, farmerdata } = location.state;
  const [itemData, setItemData] = useState([]);
  const [products, setProducts] = useState();
  const [fullproducts, setFullProducts] = useState();
  const [selectedUOM, setSelectedUOM] = useState('');

  const handleUOMChange = (event) => {
    setSelectedUOM(event.target.value);
  };


  const createPoTemplate = () => {
    console.log(farmerdata)
    const payload_data = {
      "Farmer": {
        "___smart_action___": "lookup",
        "___smart_value___": fid
      }
    };
    postMethod(config.addPurchaseOrderTemplate, payload_data)
      .then((res) => {
        if (res.data.responses) {
          console.log(res.data.responses[0].message);
          let id = ((res.data.responses[0].message).split(" : "))[1]; console.log();
          setptid(id);
        } if (res.data.errors) {
          console.log(res.data.errors[0].context);

        }
      });
  }

  const getProducts = () => {
    let payload = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "MasterDataFlow"
      },
      "searchString": "*"
    };

    postMethod(config.getProduct, payload)
      .then((res) => {
        if (res.data.responses && res.data.responses.length > 0) {
          let items = res.data.responses[0].farmers?.map((item) => item.itemName);
          let fullitems = res.data.responses[0].farmers?.map((item) => ({
            itemName: item.itemName,
            skuId: item.skuId
          }));

          setProducts(items);
          setFullProducts(fullitems);
        }
      });
  }


let count = 0 ;
  useEffect(() => {

    if(count>0){
      console.log("create called")
      createPoTemplate();
    }
    count++;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // January is 0, so we add 1
    const day = currentDate.getDate();

    // Format the date as a string in the desired format
    const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
    setcurrentdate(formattedDate);
    getPOLineItem();
    getProducts();
    getItemData(); // Add this line to fetch the itemName from MasterData
  }, []);


  const table_columns = [

    {
      "title": "Item Name",
      "field": "itemName",
      headerStyle: { fontWeight: "bold" },
      editComponent: (props) => (
        <FormControl>
          <Select
            labelId="itemName-label"
            id="itemName-select"
            value={props.value || ''}
            onChange={(event) => {
              const selectedItem = itemData.find(item => item.itemName === event.target.value);
              setSelectedItemName(event.target.value);
              setSelectedSkuId(selectedItem ? selectedItem.skuId : '');
              props.onChange(event.target.value);
            }}
          >
            {itemData.map((item) => (
              <MenuItem key={item.itemName} value={item.itemName}>{item.itemName}</MenuItem>
            ))}
          </Select>
        </FormControl>
      ),
    },
    {
      "title": "SKU",
      "field": "skuId",
      headerStyle: { fontWeight: "bold" },
      editComponent: (props) => (
        <FormControl>
          <TextField
            labelId="skuId-label"
            id="skuId-select"
            value={props.value || selectedSkuId}
            disabled={selectedSkuId !== ''}
            onChange={(event) => {
              setSelectedSkuId(event.target.value);
              props.onChange(event.target.value);
            }}
          >
          </TextField>
        </FormControl>
      ),
    },
    {
      "title": "Quantity",
      "field": "quantity",
      headerStyle: { fontWeight: "bold" },
    },

    {
      "title": "Unit Of Measurement",
      "field": "UOM",
      headerStyle: { fontWeight: "bold" },
      "lookup": {
        "KG": "KG",
        "Grams": "Grams",
        "Pieces": "Pieces"
      },
      editComponent: (props) => (
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-simple-select-label">Unit Of Measurement</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedUOM}
            onChange={handleUOMChange}
            label="Unit Of Measurement"
            displayEmpty // Add this prop to display the options in separate lines
          >
            <MenuItem value="" disabled>
              {/* Placeholder item */}
            </MenuItem>
            <MenuItem value="KG">
              KG
            </MenuItem>
            <MenuItem value="Grams">
              Grams
            </MenuItem>
            <MenuItem value="Pieces">
              Pieces
            </MenuItem>
          </Select>
        </FormControl>

      )
    },
    {
      "title": "Basic Price (₹)",
      "field": "basePrice",
      headerStyle: { fontWeight: "bold" },
    },
    {
      title: "Day Of Week ",
      field: 'dayofWeek',
      headerStyle: { fontWeight: "bold" },
      render: rowData => (
        <div>
          {rowData?.dayOfWeek.map((value, index) => (
            <Chip key={index} label={value} style={{ margin: 5 }} />
          ))}
        </div>
      ),
      editComponent: (props) => {

        return (
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Day Of Week</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={selectedValues}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {days.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }
    }
  ];

  useEffect(() => {
    getPOLineItem();
    getProducts();
    getItemData();

  }, [ptid]);

  const getPOLineItem = () => {
    //Fetch line items
    let payload = {
       "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "AdminFlow",
      },
      "searchString": ptid,
    }

    postMethod(config.searchPurchaseOrderTemplateLineItems, payload)
      .then((res) => {
        if (res.data.responses) {
          setData(res.data.responses[0].POS);
        } if (res.data.errors) {
          console.log(res.data.errors[0].context);

        }
      });
  }

  const showData = (url, data) => {
    console.log();
  }

  const onRowAdd = newData =>
    new Promise((resolve, reject) => {

      let payload = {
        ...newData, skuId: selectedSkuId,dayOfWeek: selectedValues, UOM: selectedUOM, "PurchaseOrderTemplate": {
          "___smart_action___": "lookup",
          "___smart_value___": ptid,
        }
      }

      postMethod(config.createPurchaseOrderTemplateLineItem, payload)
        .then((res) => {
          if (res.data.responses) {
            console.log(res.data.responses[0].message);
            getPOLineItem();
            resolve();
          } if (res.data.errors) {
            console.log(res.data.errors[0].context);

            reject();
          }

        });
      showData(formDetails.submitURL, newData)
      data.push(newData);
      const updatedAt = new Date();

    });

  const onRowUpdate = (newData, oldData) =>
    new Promise((resolve, reject) => {
      const index = data.indexOf(oldData);
      data[index] = newData;
      const updatedAt = new Date();
      showData(formDetails.submitURL, newData)

      let payload = {
        ...newData, dayOfWeek: selectedValues, UOM: selectedUOM,
        PurchaseOrderTable: {
          "___smart_action___": "lookup",
          "___smart_value___": newData.poTableId,
        }
      }

      postMethod(config.editPurchaseOrderTemplateLineItem, payload)
        .then((res) => {
          if (res.data.responses) {
            console.log(res.data.responses[0].message);
            resolve();
          } if (res.data.errors) {
            console.log(res.data.errors[0].context);

            reject();
          }
        });
    });

  const getItemData = () => {
    const payload = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "MasterDataFlow"
      },
      "searchString": "*"
    };

    postMethod(config.getProduct, payload)
      .then((res) => {
        if (res.data.responses) {
          const itemsWithImage = res.data.responses[0].farmers.map((item) => ({
            ...item,
            image: item.imageUrl,
            itemName: item.itemName,
            skuId: item.skuId,
          }));
          setItemData(itemsWithImage);
        } else if (res.data.errors) {
          console.log(res.data.errors[0].context);
        }
      });
  };

  const onRowDelete = oldData =>
    new Promise((resolve, reject) => {
      const index = data.indexOf(oldData);
      data.splice(index, 1);
    });

  const defaultMaterialTheme = createTheme();

  return (
    <>

      <Grid container spacing={2} style={{ margin: "8%" }}>
        <Grid item xs={6}> Farmer Name : {farmerdata.name}</Grid>
        <Grid item xs={6} >
          Collection Center Name : {farmerdata.centerName}
        </Grid>
        <Grid item xs={6}> Origin Address : {farmerdata.farmerAddress} </Grid>
        <Grid item xs={6} >
          Destination Address : {farmerdata.centerAddress}
        </Grid>
        <Grid item xs={6} >
          Date : {currentdate}
        </Grid>

      </Grid>

      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          title={title}
          icons={tableIcons}
          columns={table_columns}
          data={data}
          editable={{
            isEditable: rowData => true,
            isDeletable: rowData => false,
            onRowAdd: onRowAdd,
            onRowUpdate: onRowUpdate,
            onRowDelete: onRowDelete
          }}
        />
      </ThemeProvider>
    </>
  )
};
export default PoEdit;