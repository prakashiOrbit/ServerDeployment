import { Grid, MenuItem, TextField } from "@mui/material";
import { config } from "../../Constants/constant";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import postMethod from '../../Modules/service';
import { useLocation, useNavigate } from "react-router-dom";
import MaterialTable from 'material-table';
import { Select } from "@mui/material";
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
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import { Box } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

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
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
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

const CreatePo = () => {
    const location = useLocation();
    const { po_id } = location.state;
    console.log(po_id)
    const defaultMaterialTheme = createTheme();
    const [currentdate, setcurrentdate] = useState('');
    const farmer_data = JSON.parse(localStorage.getItem("farmerDetails"));
    const [data, setData] = useState([]);
    const [selectedValues, setSelectedValues] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);

    const handleChange = (event) => {
        console.log(event.target.value);

        setSelectedValues(event.target.value);
    };
    const handleDialogClose = () => {
        setOpenDialog(false);
    };
    const header_data = [

        {
            title: "Item Name",
            field: "itemName",
            editable: "false",
            headerStyle: { fontWeight: "bold" },
        },
        {
            title: "SkuId",
            field: "skuId",
            editable: "false",
            headerStyle: { fontWeight: "bold" },
        },
        {
            title: "Quantity",
            field: "quantity",
            editable: "onUpdate",
            headerStyle: { fontWeight: "bold" },

        },
        {
            title: "Unit Of Measurement",
            field: "UOM",
            editable: "onUpdate",
            headerStyle: { fontWeight: "bold" },

        },

        {
            title: "Base Price (₹)",
            field: "basePrice",
            editable: "onUpdate",
            headerStyle: { fontWeight: "bold" },

        },
        {
            title: "Pick Up Date",
            field: "pickUpDate",
            editable: "onUpdate",
            headerStyle: { fontWeight: "bold" },
            editComponent: (props) => {
                const { value, onChange } = props;
                return (
                    <DatePicker
                        value={value ? dayjs(value) : null}
                        onChange={(date) => onChange(date ? date.toISOString() : null)}
                        renderInput={(params) => <TextField {...params} variant="standard" />}
                    />
                );
            }
        },

        {
            title: "Day Of Week",
            field: 'dayofWeek',
            editable: "false",
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
                        <InputLabel id="demo-multiple-chip-label">Day of Week</InputLabel>
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
        getPO_data();
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // January is 0, so we add 1
        const day = currentDate.getDate();

        // Format the date as a string in the desired format
        const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
        setcurrentdate(formattedDate);
    }, []);

    const updateData = (newData) => {
        console.log(newData);
        const payload = {
            ...newData, "PurchaseOrderTable": {
                "___smart_action___": "lookup",
                "___smart_value___": newData.poTableId
            },
        }
        if (newData.pickUpDate) {
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            const pickUpDate = new Date(newData.pickUpDate);
            pickUpDate.setHours(0, 0, 0, 0);
            if (pickUpDate < currentDate) {
                // Show the dialog if the pickUpDate is in the past
                setOpenDialog(true);
                return Promise.reject();
            }
            const formattedDate = dayjs(payload.pickUpDate).format('DD-MM-YYYY');
            payload.pickUpDate = formattedDate;
        }
        return new Promise((resolve, reject) => {
            // Make a POST request to the server to add the new data

            postMethod(config.editPurchaseOrderTemplateLineItem, payload)
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

    const getPO_data = () => {
        const payload = {
            "FlowAdmin": {
                "___smart_action___": "lookup",
                "___smart_value___": "AdminFlow"
            },
            "searchString": po_id
        };

        postMethod(config.SearchPurchaseOrdersTable, payload)
            .then((res) => {
                console.log(res.data.responses[0].POS);
                setData(res.data.responses[0].POS);
            });
    }

    return (
        <div style={{ margin: "10%" }}>

            <Typography variant="h5" style={{ marginBottom: "10px", fontWeight: "bold" }}>Purchase Order Information</Typography>
            <Grid container spacing={2} style={{ margin: "8%" }}>

                <Grid item xs={6}>
                    Farmer Name: {farmer_data.name}
                </Grid>
                <Grid item xs={6}>
                    Collection Center Name: {farmer_data.centerName}
                </Grid>
                <Grid item xs={6}> Origin address : {farmer_data.farmerAddress}</Grid>
                <Grid item xs={6} >
                    Destination Address : {farmer_data.centerAddress}
                </Grid>
                <Grid item xs={6} >
                    Date :{currentdate}
                </Grid>
                <Grid item xs={6} > PO Template Id : {po_id}</Grid>

            </Grid>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Invalid Pick Up Date</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Past dates are not allowed.Please enter valid date.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>OK</Button>
                </DialogActions>
            </Dialog>
            <ThemeProvider theme={defaultMaterialTheme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MaterialTable
                        title={
                            <Typography variant="h6" component="div" fontWeight="bold">
                                Actual Purchase Order Table
                            </Typography>
                        }
                        columns={header_data}
                        data={data}
                        icons={tableIcons}
                        editable={{

                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    // Call the function to update the data
                                    updateData(newData)
                                        .then(response => {
                                            // Update the table data with the new data
                                            getPO_data();
                                            // getActualPO();
                                            resolve();

                                        })
                                        .catch(error => {
                                            console.error(error);
                                            reject();
                                        });
                                }),
                        }}

                    />
                </LocalizationProvider>
            </ThemeProvider>

        </div>
    )
}
export default CreatePo;