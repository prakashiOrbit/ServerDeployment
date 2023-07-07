import { debounce } from 'lodash';
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { IconButton, TableCell } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import postMethod from '../service';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { styled } from '@mui/material';

const Datatable = ({ title, url, onPagination, currentPage, hideAction, print, handleOptions, viewActualPo, showStatus, flow, header_data, onCreateClick, showAssignToCC, showPoTemplateList, showCreateIcon, table_data, showAssignToWarehouse, showCustomerOrder, showEdit, showPoTemplate }) => {

  const [selectedRow, setSelectedRow] = React.useState(-1);
  const [selectedCount, setSelectedCount] = React.useState(0);
  const options = [...(showEdit ? ["Edit"] : []),
  ...(showAssignToCC ? ["Assign to CC",] : []),
  ...(showPoTemplate ? ["Create PO Template"] : []),
  ...(showAssignToWarehouse ? ["Assign to Warehouse"] : []),
  ...(showPoTemplateList ? ["View PO Templates"] : []),
  ...(showCustomerOrder ? ["View Customer Order"] : []),
  ...(showStatus ? ["Change Status"] : []),
  ...(viewActualPo ? ["View Actual PO List"] : []),

  ];

  const [tableData, settableData] = useState([]);
  const [columndata, setcolumndata] = useState(header_data);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  console.log(table_data);
  console.log(columndata);
  console.log(open);

  const handleClick = (event, rowIndex) => {

    setSelectedRow(rowIndex);
    setSelectedCount(selectedCount + 1);
    setAnchorEl(event.currentTarget);
  };

  const renderActions = (rowData, rowMeta) => {
    const rowIndex = rowMeta.rowIndex;
    return (
      <>
        <IconButton
          onClick={(e) => handleClick(e, rowIndex)}
        //color="secondary"
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
              backgroundColor: 'white',
            },
          }}
        >
          {options.flatMap((option, index) => [
            <MenuItem
              key={option}
              onClick={() => handleClose(rowMeta, option)}
              style={{ paddingTop: 3, paddingBottom: 3, width: 500 }}
            >
              <Typography component="span" style={{ fontWeight: 500 }}>
                {option}
              </Typography>
            </MenuItem>,
            index !== options.length - 1 && <hr key={`hr-${index}`} />,
          ])}
        </Menu>
      </>
    );
  };

  const BoldText = styled('div')({
    fontWeight: 'bold',
  });

  const ActionsCell = styled(TableCell)({
    backgroundColor: 'white',
  });

  const updatedColumns = [
    ...columndata,
    {
      name: '',
      options: {
        filter: false,
        sort: false,
        viewColumns: false,
        customHeadRender: () => (
          <ActionsCell>
            <BoldText>Actions</BoldText>
          </ActionsCell>
        ),
        customBodyRender: renderActions,
      },
    },
  ];

  const handleClose = (data, option) => {

    setAnchorEl(null);
    const index = data.currentTableData[selectedRow]["index"];
    handleOptions(tableData[index], option)
    console.log(data);
    setSelectedRow(-1);
    setSelectedCount(0);
    console.log(option);
  };

  useEffect(() => {

    getData("*");

  }, [table_data]);

  const getData = async (searchString) => {

    if (table_data) {
      console.log(table_data);
      settableData(table_data)
    }

    else {

      const payload = { "FlowAdmin": { "___smart_action___": "lookup", "___smart_value___": flow }, "searchString": searchString }

      postMethod(url, payload)
        .then((res) => {
          console.log(res.data.responses[0]?.farmers);
          settableData(res.data.responses[0]?.farmers);
        });
    }
  }
  const ITEM_HEIGHT = 48;
  const logValue = debounce((value) => {
    getData(value + "*");
  }, 1000);

  const handleViewColumnsChange = (changedColumn, allColumns) => {
    console.log(allColumns)
    // Update the selected columns in state
    // const selectedColumnNames = allColumns
    //   .filter(column => column.display)
    //   .map(column => column.name);
    // console.log(selectedColumnNames);
  };
  const option = {
    search: true,
    download: false,
    print: print,
    viewColumns: true,
    selectableRows: "none",
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    style: { fontWeight: "bold" },
    rowsPerPageOptions: [5, 10, 50, 100],
    pagination: true,
    onColumnViewChange: handleViewColumnsChange,
    page: currentPage ? currentPage : 0,
    rowsPerPage: 5,
    customFilterValues: {
      farmerId: ['farmerId'],
      name: ['name'],
      phoneNo: ['phoneNo'],
      panNo: ['panNo'],
      village: ['village'],

    },
    customToolbar: () => {
      return (

        <>
          {showCreateIcon && (
            <IconButton onClick={onCreateClick} title="Create">
              <AddIcon />
            </IconButton>
          )}
        </>
      );
    },
    onTableChange: (action, state) => {
      console.log(action, state);
      if (action === 'search') {
        logValue(state.searchText);
      }
      if (action === "changePage") {
        onPagination(state.page);
      }
      if (action === "viewColumnsChange") {
        const selectedColumnNames = state.columns
          .filter(column => column.display == "true" && column.name)
          .map(column => column.name);
        console.log(selectedColumnNames);
      }
    }
  };

  return (
    <>
      <Typography variant="h4" component="h2" style={{ color: "green", marginTop: "80px", textAlign: "center", marginBottom: "30px", fontWeight: "bold" }}>{title} </Typography>
      <MUIDataTable
        data={tableData}
        columns={hideAction ? columndata : updatedColumns}
        options={option}
      />
    </>
  );
}
export default Datatable;