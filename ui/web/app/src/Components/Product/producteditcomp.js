import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CustomTextField from "../../Modules/Textfield";
import CustomerSelect from "../../Modules/Dropdown";

const ProductEditComponent = ({ formDetails, rowdata, onSubmit, type }) => {
    const [formdata, setformdata] = useState(rowdata ? rowdata : {});
    

    const onClick = (e) => {
        onSubmit(e.target.name, formdata);
    };

    const onChange = (e) => {
        let id = e.target.id;
        let value = e.target.value;

        setformdata({ ...formdata, [id]: value });
    };
    const onCategoryChange = (e) => {
        let id = e.target.id;
        let value = e.target.value;
        setformdata({ ...formdata, [id]: value });
    
        // const category = formDetails.division.formelements.productDetails.find(item => item.id === 'itemCategory');
        // if (category) {
        //     const options = category.options.find(item => item.value === value);
        //     if (options) {
        //         setSubCategoryOptions(options.subcategories);
        //     }
        // }
    };
   
   
    useEffect(() => {
        console.log(formdata);
    }, [formdata]);
    return (
        <div style={{ margin: "12%" }}>
            <Grid container spacing={8}>
                {Object.keys(formDetails).length ? (
                    <Grid>
                        <span
                            style={{
                                fontSize: "23px",
                                fontWeight: "bold",
                                display: "block",
                                marginTop: "50px",
                                color: "brown",
                            }}
                        >
                            {formDetails.division.formelements.title}
                        </span>
                        <Grid
                            container
                            spacing={5}
                            style={{
                                border:
                                    formDetails.division.formelements.title === "CREATE NEW PRODUCT"
                                        ? "3px solid green"
                                        : "3px solid green",
                                padding: "30px",
                                boxSizing: "borderBox",
                                marginTop: "10px",
                            }}
                        >
                            {formDetails.division.formelements.productDetails?.map((item, index) => {
                                return (
                                    <Grid key={index} item xs={12} sm={6}>
                                        {item.control === "textbox" ? (
                                            <CustomTextField
                                                value={rowdata?.[item.label]}
                                                onChange={onChange}
                                                label={item.label}
                                                rules={item}
                                            />
                                        ) : ( item.control === "select" ? (
                                            <CustomerSelect
                                            value={rowdata?.[item.label]}
                                            onChange={onChange}
                                            label={item.label}
                                            rules={item}
                                            options={item.options}
                                            />
                                        ) : (
                                            <>No Data Box</>
                                        ))}
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                ) : (
                    <div>No Data</div>
                )}

                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                    <Button style={{ marginRight: "10px", marginTop: "30px" }} variant="contained" name="submit" onClick={onClick}>
                        {type == "edit" ? "Save" : "Add"}
                    </Button>
                    <Button style={{ marginRight: "10px", marginTop: "30px" }} variant="contained" onClick={onClick} name="cancel">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductEditComponent;
