import { config } from "../../Constants/constant";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import postMethod from '../../Modules/service';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';

import { makeStyles } from "@mui/styles";
import { FormControl, InputLabel, MenuItem, Select, Switch, TextField } from "@material-ui/core";


const useStyles = makeStyles({
  table: {
    border: "1px solid black",
    "& th": {
      border: "1px solid black",
      padding: "8px",
    },
    "& td": {
      border: "1px solid black",
      padding: "8px",
    },
  },
});


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  //Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
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

const ItemList = () => {

  const defaultMaterialTheme = createTheme();
  const [data, setData] = useState([]);
  const [products, setProducts] = useState();
  const [fullproducts, setFullProducts] = useState();
  const [itemData, setItemData] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const [selectedSkuId, setSelectedSkuId] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    getItem_data();
    getProducts();
  }, []);

  const onRowAdd = newData =>
    new Promise((resolve, reject) => {
      const payload = {
        ...newData,
        skuId: selectedSkuId,
        categoryName: selectedCategory,
        "FlowAdmin": {
          "___smart_action___": "lookup",
          "___smart_value___": "AppFlow"
        },
      }
      postMethod(config.createItem, payload)
        .then((res) => {
          if (res.data.responses) {
            console.log(res.data.responses[0].message);
            getItem_data();
            resolve();
          } if (res.data.errors) {
            console.log(res.data.errors[0].context);
            reject();
          }
        })
        .catch((error) => {
          console.error(error);
        });

    });

  const header_data = [
    {
      title: "Item Name",
      field: "itemName",
      editable: "onAdd",
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
              setSelectedCategory(selectedItem ? selectedItem.categoryName : '');
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
      title: "SKU Id",
      field: "skuId",
      editable: "onAdd",
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
      title: "Category Name",
      field: "categoryName",
      headerStyle: { fontWeight: "bold" },
      editComponent: (props) => (
        <FormControl>
          <TextField
            id="category-select"
            value={props.value || selectedCategory}
            disabled={selectedCategory !== ''}
            onChange={(event) => {
              setSelectedCategory(event.target.value);
              props.onChange(event.target.value);
            }}
          />
        </FormControl>
      ),
    },

    {
      title: "Quantity",
      field: "quantity",
      headerStyle: { fontWeight: "bold" },

    },
    
    {
      title: "Unit of Measurement",
      field: "uom",
      headerStyle: { fontWeight: "bold" },
      editComponent: (props) => (
        <FormControl>
          <Select
            labelId="uom-label"
            id="uom-select"
            value={props.value || ''}
            onChange={(event) => props.onChange(event.target.value)}
          >
            <MenuItem value="Kilograms">Kilograms</MenuItem>
            <MenuItem value="Grams">Grams</MenuItem>
            <MenuItem value="Pieces">Pieces</MenuItem>
          </Select>
        </FormControl>
      ),
    },

    {
      title: "Price (₹)",
      field: "price",
      headerStyle: { fontWeight: "bold" },

    },
    {
      title: "Discount Price",
      field: "discountPrice",
      headerStyle: { fontWeight: "bold" },
    },
    {
      title: "In Stock",
      field: "inStock",
      headerStyle: { fontWeight: "bold" },
      render: (rowData) => (
        <div>
          {rowData.inStock ? "Yes" : "No"}
          <Switch
            checked={rowData.inStock}
            color="primary"
            disabled
            onChange={(event) => {
            }}
          />
        </div>
      ),
      editComponent: (props) => (

        <div>
          <Switch
            checked={props.value}
            color="primary"
            onChange={(event) => props.onChange(event.target.checked)}
          />
          {props.value ? "Yes" : "No"}
        </div>
      )
    },

    {
      title: "Description",
      field: "description",
      headerStyle: { fontWeight: "bold" },
    },

    {
      title: 'Image',
      field: 'image',
      headerStyle: { fontWeight: 'bold' },
      render: rowData => {
        const imageName = rowData.image;
        const imageUrl = `${imageName}`;
        return (
          <img src={imageUrl} alt="Product" style={{ width: '100px', height: '100px' }} />
        );
      },
    }
  ];

  const updateData = (newData) => {

    const payload = {
      ...newData, 
      "Item": {
        "___smart_action___": "lookup",
        "___smart_value___": newData.skuId
      },
    }
    return new Promise((resolve, reject) => {
      // Make a POST request to the server to add the new data

      postMethod(config.editItem, payload)
        .then(response => {
          // Check the response status
          if (response.status === 200) {
            resolve();
          } else {
            reject();
          }
        })
        .catch(error => {
          console.error(error);
          reject();
        });
    });
  }

  const getItem_data = () => {
    const payload = {
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "AppFlow"
      },
      "searchString": "*"
    };

    postMethod(config.searchItem, payload)
      .then((res) => {
        console.log(res.data.responses[0]?.item);
        const itemsWithImage = res.data.responses[0]?.item?.map((item) => ({
          ...item,
          image: item.image
        }));
        setData(itemsWithImage);
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
        if (res?.data.responses && res?.data.responses.length > 0) {
          let items = [];
          const fullitems = res?.data.responses[0].farmers.map((item) => ({
            //...item   
            itemName: item.itemName,
            skuId: item.skuId,
            categoryName: item.itemCategory,
            quantity: item.quantity,
            uom: item.UOM,
            price: item.basePrice,
            image: item.image
          }));
          setItemData(fullitems);
          setProducts(items);
          setFullProducts(fullitems);
        }
      });
  }

  return (
    <div style={{ margin: "10%" }}>

      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          title="Product Price List"
          columns={header_data}
          data={data}
          icons={tableIcons}
          editable={{
            onRowAdd: onRowAdd,
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                // Call the function to update the data
                updateData(newData)
                  .then(response => {
                    // Update the table data with the new data
                    getItem_data();
                    resolve();

                  })
                  .catch(error => {
                    console.error(error);
                    reject();
                  });
              }),
          }}
        />

      </ThemeProvider>
    </div>
  )
}
export default ItemList;

