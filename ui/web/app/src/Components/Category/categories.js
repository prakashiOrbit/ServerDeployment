import { config } from "../../Constants/constant";
import { useEffect, useState } from "react";
import { TextField, ThemeProvider, createTheme } from '@mui/material';
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

const CategoryList = () => {

    const defaultMaterialTheme = createTheme();
    const [data, setData] = useState([]);

    useEffect(() => {
        getItem_data();
    }, []);

    const onRowAdd = newData =>
        new Promise((resolve, reject) => {
            const payload = {
                ...newData,
                "FlowAdmin": {
                    "___smart_action___": "lookup",
                    "___smart_value___": "AppFlow"
                },
            }
            postMethod(config.createCategory, payload)
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
            "title": "Category Name",
            "field": "categoryName",
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
        },
        {
            title: 'Banner Image',
            field: 'bannerImage',
            headerStyle: { fontWeight: 'bold' },
            render: rowData => {
                const imageName = rowData.bannerImage;
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
            "Category": {
                "___smart_action___": "lookup",
                "___smart_value___": newData.categoryId
            },
        }
        return new Promise((resolve, reject) => {
            // Make a POST request to the server to add the new data

            postMethod(config.editCategory, payload)
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

        postMethod(config.searchCategory, payload)
            .then((res) => {
                console.log(res.data.responses[0]?.category);
                const itemsWithImage = res.data.responses[0]?.category?.map((category) => ({
                    ...category,
                    image: category.image
                }));
                setData(itemsWithImage);
            });
    }

    return (
        <div style={{ margin: "10%" }}>

            <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable
                    title="Category List"
                    columns={header_data}
                    data={data}
                    icons={tableIcons}
                    editable={{
                        onRowAdd: onRowAdd,
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                updateData(newData)
                                    .then(response => {
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
export default CategoryList;
