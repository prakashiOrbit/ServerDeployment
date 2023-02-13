import { debounce } from 'lodash';
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";

import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const  Datatable = ({onSearch}) => {
  const [responsive, setResponsive] = useState("vertical");

  const [searchBtn, setSearchBtn] = useState(true);

  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);
  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };




  const handleClose = (data) => {
    console.log(data);
    console.log(data.rowIndex);
    console.log(data.tableData[data.rowIndex])
    setAnchorEl(null);
  };

  const options = [
    "Edit",
    "Delete"
  ];

  const ITEM_HEIGHT = 48;

  const columns = [
    { name: "Name", options: { filterOptions: { fullWidth: true } } },
   { name : "Title"},
    {name:"Location"},
    {
        name: "Action",
        options: {
          filter: false,
          sort: false,
          viewColumns:false,
          customBodyRender: (value, rowdata ) => {
            return (<>

                <IconButton 
                onClick={handleClick}
                    >
                    <MoreVertIcon/>
                </IconButton>

                <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight:  ITEM_HEIGHT  * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option}  onClick={()=>{handleClose(rowdata)}}>
            {option}
          </MenuItem>
        ))}
      </Menu>


                  </>
              
            );
          }
        }
      },
  ];

  const logValue = debounce((value) => {
    onSearch(value);
}, 1000);


  const option = {
    search: searchBtn,
    download: false,
    print: false,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    
    
    onTableChange: (action, state) => {
        console.log(action);
     if(action==="search"){
        logValue(state.searchText);
         
     }
    }
  };

  const data = [
    { Name: "Joe James", Title: "Test Corp", Location: "Yonkers" },
    { Name: "John Walsh", Title: "Test Corp", Location: "Hartford" },
    { Name: "Bob Herm", Title: "Test Corp", Location: "Tampa" },
    { Name: "James Houston", Title: "Test Corp", Location: "Dallas"},
  ];

  return (
    <>
        <MUIDataTable
          title={"ACME Employee list"}
          data={data}
          columns={columns}
          options={option}
        />
      </>
  );
}

export default Datatable;
