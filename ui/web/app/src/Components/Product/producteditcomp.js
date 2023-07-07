import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { useEffect, useState ,useRef} from "react";
import CustomTextField from "../../Modules/Textfield";

const ProductEditComponent = ({ formDetails, rowdata, onSubmit, type }) => {
  const [formdata, setFormdata] = useState(rowdata ? rowdata : {});
  const [error, setError] = useState(true);
  const [errorflag, setErrorflag] = useState(true);
  const [reqfields, setReqfields] = useState([]);

  useEffect(() => {
    const labels = formDetails?.division?.formelements.flatMap(item => item.details)
      .filter(detail => detail.required)
      .map(detail => detail.id);
    setReqfields(labels);
  }, []);

  const validateAll = () => {
    const allLabelsPresent = reqfields.every(id => Object.keys(formdata).includes(id));
    const allLabelsPresentAndHaveValue = reqfields.every(id => formdata[id] !== null && formdata[id] !== undefined);
    console.log(errorflag);
    if (allLabelsPresent && allLabelsPresentAndHaveValue && !errorflag) {
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
    validateAll();
  }, [errorflag]);

  const handleError = (flag) => {
    setErrorflag(flag);
  };

  const onChange = (e) => {
    const { id, value } = e.target;
    if (formDetails.division.formelements.some((item) => item.id === id && item.control === "dropdown")) {
      onDropdownChange(e);
    } else {
      setFormdata((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
      validateAll();
    }
  };

  const onDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validateAll();
  };

  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);
  useEffect(() => {
    console.log(formdata);
  }, [formdata]);

  return (
    <div style={{ margin: "12%" }}>
      <Grid container spacing={8}>
        {Object.keys(formDetails).length ? (
          <>
            {formDetails?.division?.formelements?.map((key) => {
              return (
                <Grid key={key.title}>
                  <span
                    style={{
                      fontSize: "23px",
                      fontWeight: "bold",
                      display: "block",
                      marginTop: "50px",
                      color: "brown",
                    }}
                  >
                    {key.title}
                  </span>
                  <Grid
                    container
                    spacing={5}
                    style={{
                      border: "3px solid green",
                      padding: "30px",
                      boxSizing: "borderBox",
                      marginTop: "10px",
                    }}
                  >
                    {key.details?.map((item,index) => {
                      return (
                        <Grid key={index} item xs={12} sm={6}>
                          {item.control === "textbox" ? (
                            <CustomTextField
                            ref={index === 0 ? firstInputRef : null}
                              value={rowdata?.[item.id]}
                              onChange={onChange}
                              label={item.label}
                              id={item.id}
                              rules={item}
                              handleError={handleError}
                              isFocused={index === 0}
                            />

                          ) : item.control === "dropdown" ? (

                            <FormControl fullWidth variant="outlined">
                              <InputLabel id={`${item.id}-label`} variant="outlined">{item.label}</InputLabel>
                              <Select
                                labelId={`${item.id}-label`}
                                value={formdata[item.id] || ""}
                                onChange={onDropdownChange}
                                variant="outlined"
                                inputProps={{
                                  name: item.id,
                                  id: item.id, 
                                }}
                                style={{ width: "100%" }}
                                input={<OutlinedInput label={item.label} />}
                              >
                                <MenuItem value="">Select {item.label}</MenuItem>
                                {item.options.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>

                          ) : (
                            <>No Data Box</>
                          )}
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            })}
          </>
        ) : (
          <div>No Data</div>
        )}

        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}
        >
          <Button
            disabled={error}
            style={{ marginRight: "10px", marginTop: "30px" }}
            variant="contained"
            name="submit"
            onClick={onClick}
          >
            {type === "edit" ? "Save" : "Add"}
          </Button>
          <Button
            style={{ marginRight: "10px", marginTop: "30px" }}
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

export default ProductEditComponent;
