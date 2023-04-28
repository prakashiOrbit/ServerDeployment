import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CustomTextField from "../../Modules/Textfield";

const EditComponent = ({ formDetails, rowdata, onSubmit, type }) => {
  const [formdata, setformdata] = useState(rowdata ? rowdata : {});
  const [error, setError] = useState(true);
  const [errorflag, setErrorflag] = useState(true);
  const [reqfields, setreqfields] = useState([]);

  useEffect(() => {
    const labels = formDetails?.division?.formelements
      .flatMap((item) => item.details)
      .filter((detail) => detail.required)
      .map((detail) => detail.label);
    setreqfields(labels);
  }, []);

  const validateall = () => {
    const allLabelsPresent = reqfields.every((label) =>
      Object.keys(formdata).includes(label)
    );
    const allLabelsPresentAndHaveValue = reqfields.every(
      (label) =>
        formdata[label] !== null && formdata[label] !== undefined
    );
    console.log(errorflag);
    if (allLabelsPresent && !errorflag) {
      console.log("All labels are present in the object's keys.");
      console.log(allLabelsPresent, errorflag);
      setError(false);
    } else {
      console.log("Not all labels are present in the object's keys.");
      setError(true);
    }
  };
  const onClick = (e) => {
    onSubmit(e.target.name, formdata);
  };
  useEffect(() => {
    validateall();
  }, [errorflag]);

  const handleError = (flag) => {
    setErrorflag(flag);
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
          <Grid container spacing={12}>
            {formDetails?.division?.formelements?.map((key, index) => (
              <Grid key={index} item xs={12} sm={6}>
                
                <Grid
                  container
                  spacing={4}
                  style={{
                    border: "3px solid green",
                    padding: "20px",
                    boxSizing: "borderBox",
                  }}
                >
                    <Grid item xs={12}>
                    <span
                      style={{
                        fontSize: "23px",
                        fontWeight: "bold",
                        color: "brown",
                      }}
                    >
                      {key.title}
                    </span>
                  </Grid>
                  {key.details?.map((item, index) => {
                    return (
                      <Grid container item xs={12}>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <Grid container>
                            <CustomTextField
                              value={rowdata?.[item.label]}
                              onChange={onChange}
                              label={item.label}
                              rules={item}
                              handleError={handleError}
                            />
                          </Grid>
                        </Grid>
                      </Grid>

                    );
                  })}

                </Grid>
              </Grid>
            ))}
          </Grid>



        ) : (
          <div>No Data</div>
        )}

        <Grid container justifyContent="center">
          <Button size="large" style={{ marginRight: "10px", marginTop: "30px" }} variant="contained" name="submit" onClick={onClick}>{type == "edit" ? "Save" : "Add"}</Button>
          <Button style={{ marginRight: "10px", marginTop: "30px", marginLeft: "40px"  }} variant="contained" onClick={onClick} name="cancel">Cancel</Button>

        </Grid>

      </Grid>
    </div>
  )
}
export default EditComponent;