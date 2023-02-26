import { debounce } from 'lodash';
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";

import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';

const  Datatable = ({url,data,flow,handleOptions}) => {
  const [responsive, setResponsive] = useState("vertical");

  const [searchBtn, setSearchBtn] = useState(true);

  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);
  const [anchorEl, setAnchorEl] =useState(null);
  const[tableData,settableData]= useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // useEffect(()=>{
    
  // })
  
useEffect(()=>{
  getData("*");
},[]);


const getData = (searchString) =>{
  const payloads = [
    {id:1, Name: "Joe James", aadhar_no: "Test Corp", address: "Yonkers" },
    { id:2,Name: "John Walsh", aadhar_no: "Test Corp", address: "Hartford" },
    { id:3,Name: "Bob Herm", aadhar_no: "Test Corp", address: "Tampa" },
    { id:4,Name: "James Houston", aadhar_no: "Test Corp", address: "Dallas"},
  ];
  settableData(payloads);
  const config = {
    headers:{ 'Content-Type': 'application/json', 'Session-Id': "433915e0-58e5-4533-8d66-c30bf402709b" }
  };
 const payload =  {"FlowAdmin": {"___smart_action___": "lookup","___smart_value___": flow},"searchString": searchString}
axios.post(url,payload,config)
 .then((res)=>{


  // settableData(res.data.responses[0].farmers);

})
}


  const handleClose = (data,option) => {
    // console.log(option);
    // console.log(data.rowIndex);
    // console.log(data.tableData[data.rowIndex])
    handleOptions(data.tableData[data.rowIndex],option)
    setAnchorEl(null);
  };

  const options = [
    "Edit",
    "Delete",
    "Assign to CC"
  ];

  const ITEM_HEIGHT = 48;

  const columns = [
    { name: "firstName", label:"Name"
  //   options: {
  //     customHeadRender: ({value, ...column}) => {
  //         return (
  //             <Button key={index}>
  //                 Click
  //             </Button>
  //         )
  //     }
  // }
 },
   { name : "aadhar_no",label:"Aadhar No"},
    {name:"address",label:"Location"},
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
          <MenuItem key={option}  onClick={()=>{handleClose(rowdata,option)}}>
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
    getData(value+"*");
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


  return (
    <>
        <MUIDataTable
          title={"ACME Employee list"}
          data={tableData}
          columns={columns}
          options={option}
        />
      </>
  );
}

export default Datatable;
