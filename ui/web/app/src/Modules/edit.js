import { Button, Grid } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import CustomTextField from "./Textfield";
import { TextField } from "@mui/material";

const EditComponent = ({ formDetails, rowdata, onSubmit, type,isFocused }) => {
  const [formdata, setformdata] = useState(rowdata ? rowdata : {});
  const [error, setError] = useState(true);
  const [errorflag, setErrorflag] = useState(true);
  const [reqfields, setreqfields] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const labels = formDetails?.division?.formelements
      .flatMap((item) => item.details)
      .filter((detail) => detail.required)
      .map((detail) => detail.id);
    setreqfields(labels);
  }, []);

  const validateall = () => {
    const allLabelsPresent = reqfields.every((id) =>
      Object.keys(formdata).includes(id)
    );
    const allLabelsPresentAndHaveValue = reqfields.every(
      (id) => formdata[id] !== null && formdata[id] !== undefined
    );
    console.log(errorflag);
    if (allLabelsPresent && !errorflag) {
      console.log("All labels are present in the object's keys.");
      console.log(allLabelsPresent, errorflag);
      setError(false);
    } else {
      console.log("Not all labels are present in the object's keys.");
      setError(false);
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

  const firstInputRef = useRef(null);

  useEffect(() => {
      if (inputRef.current && isFocused) {
        inputRef.current.focus();
      }
    }, [isFocused]);

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
                      boxSizing: "border-box",
                      marginTop: "10px",
                    }}
                  >
                    {key.details?.map((item, index) => {
                      return (
                        <Grid key={index} item xs={12} sm={6}>
                          {item.control === "textbox" ? (
                            <CustomTextField
                              ref={index=== 0 ? firstInputRef : null}
                              value={rowdata?.[item.id]}
                              onChange={onChange}
                              label={item.label}
                              id={item.id}
                              rules={item}
                              handleError={handleError}
                              isFocused={index === 0}
                            />
                          ) : item.control === "date" ? (
                            <TextField
                              focused={index === 0} 
                              id={item.id}
                              fullWidth
                              required
                              label={item.label}
                              key={item.label}
                              type="date"
                              variant="outlined"
                              onChange={onChange}
                              name={item.id}
                              value={rowdata?.[item.id]}
                            />
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

export default EditComponent;
