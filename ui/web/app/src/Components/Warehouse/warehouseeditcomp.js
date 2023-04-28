import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CustomTextField from "../../Modules/Textfield";

const WarehouseEditComponent = ({ formDetails, rowdata, onSubmit, type }) => {
  const [formdata, setformdata] = useState(rowdata ? rowdata : {});

  const onClick = (e) => {
    onSubmit(e.target.name, formdata);
  };

  const onChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    setformdata({ ...formdata, [id]: value });
  };

  useEffect(() => {
    console.log(formdata);
  }, [formdata]);

  return (
    <div style={{ margin: "12%" }}>
      <Grid container spacing={8}>
        {Object.keys(formDetails).length ? (
          <Grid item xs={12}>
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
                  formDetails.division.formelements.title === "CREATE WAREHOUSE"
                    ? "3px solid green"
                    : "3px solid green",
                padding: "30px",
                boxSizing: "borderBox",
                marginTop: "10px",
              }}
            >
              {formDetails.division.formelements.warehouseDetails?.map(
                (item, index) => {
                  return (
                    <Grid key={index} item xs={12} sm={6}>
                      {item.control === "textbox" ? (
                        <CustomTextField
                          value={rowdata?.[item.label]}
                          onChange={onChange}
                          label={item.label}
                          rules={item}
                        />
                      ) : (
                        <>No Data Box</>
                      )}
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Grid>
        ) : (
          <div>No Data</div>
        )}

        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
          <Button
            style={{ marginRight: "60px" }}
            variant="contained"
            name="submit"
            onClick={onClick}
          >
            {type == "edit" ? "Save" : "Add"}
          </Button>
          <Button
            style={{ marginRight: "60px" }}
            variant="contained"
            onClick={onClick}
            name="cancel"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default WarehouseEditComponent;
