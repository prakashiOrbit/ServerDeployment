import { debounce } from 'lodash';
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import postMethod from '../service';
import CreateIcon from '@mui/icons-material/Create';


const Datatable = ({ url, handleOptions, flow, header_data, flowEvent ,onCreateClick,showAssignToCC}) => {
 
  const [selectedRow, setSelectedRow] = React.useState(-1);

  const options = [
    "Edit",
    ...(showAssignToCC ? ["Assign to CC"] : [])
  ];

  const [tableData, settableData] = useState([]);

  const [columndata, setcolumndata] = useState(header_data);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);



  const handleClick = (event, rowIndex) => {

    setSelectedRow(rowIndex);
    setAnchorEl(event.currentTarget);
  };


  const renderActions = (rowData, rowMeta) => {
    const rowIndex = rowMeta.rowIndex;
    return (
      <>
        <IconButton
          onClick={(e) => handleClick(e, rowIndex)}
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
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} onClick={() => handleClose(rowMeta.tableData[selectedRow], option)}>
              {option}
            </MenuItem>
          ))}
        </Menu>

      </>
    );
  };


  const updatedColumns = [...columndata, {
    name: 'actions',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      customBodyRender: renderActions,
    },
  }];



  const handleClose = (data, option) => {
    
    handleOptions(data,option)
    setAnchorEl(null);
    console.log(data);
    setSelectedRow(-1);
    console.log(option);
  };


  useEffect(() => {

    getData("*");

  }, []);


  const getData = async (searchString) => {


    const payload = { "FlowAdmin": { "___smart_action___": "lookup", "___smart_value___": flow }, "searchString": searchString }

    postMethod(url, payload)
      .then((res) => {
        console.log(res?.data?.responses[0]?.farmers);
        settableData(res?.data?.responses[0]?.farmers);
      });



  }






  const ITEM_HEIGHT = 48;


  const logValue = debounce((value) => {
    getData(value + "*");
  }, 1000);


  const option = {
    search: true,
    download: false,
    print: false,
    viewColumns: true,
    filter: true,
    filterType: "dropdown",
    responsive: "stacked",
    customToolbar: () => {
      return (
        
        <IconButton onClick={onCreateClick}>
          <CreateIcon />
          
        </IconButton>
        
      
      );
    },



    onTableChange: (action, state) => {
      console.log(action);
      if (action === "search") {
        logValue(state.searchText);

      }
    }
  };


  return (
    <>
      <MUIDataTable

        data={tableData}
        columns={updatedColumns}
        options={option}
      />


    </>
  );
}

export default Datatable;