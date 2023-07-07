import { Button, Grid } from "@mui/material";
import { useEffect, useState ,useRef} from "react";
import CustomTextField from "../../Modules/Textfield";

const WarehouseEditComponent = ({ formDetails, rowdata, onSubmit, type }) => {
  const [formdata, setformdata] = useState(rowdata ? rowdata : {});
  const[error,setError] = useState(true);
  const[errorflag,setErrorflag] = useState(true);
  const[reqfields,setreqfields]=useState([]);

 useEffect(()=>{
const labels = formDetails?.division?.formelements.flatMap(item => item.details)
  .filter(detail => detail.required)
  .map(detail => detail.id);
  setreqfields(labels);

 },[]);

const validateall = () =>{

  const allLabelsPresent = reqfields.every(id => Object.keys(formdata).includes(id));
  const allLabelsPresentAndHaveValue = reqfields.every(id => formdata[id] !== null && formdata[id] !== undefined);
console.log(errorflag);
  if (allLabelsPresent && allLabelsPresentAndHaveValue && !errorflag) {
    console.log("All labels are present in the object's keys.");
    console.log(allLabelsPresent,allLabelsPresentAndHaveValue,errorflag)
    setError(false);
} else {
    console.log("Not all labels are present in the object's keys.");
    setError(true);
}
}
  const onClick = (e) => {
    onSubmit(e.target.name, formdata);
  }
  useEffect(()=>{
    validateall();
  },[errorflag]);
  
  const handleError = (flag) =>{
    setErrorflag(flag);
  }

  const onChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setformdata({ ...formdata, [id]: value });
  }

  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    console.log(formdata);
  }, [formdata])
  return (
    <div style={{ margin: "12%" }}>
      <Grid container spacing={8}>
        {Object.keys(formDetails).length ? (
          <>
          {formDetails?.division?.formelements?.map((key)=>{
            return (
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
    {key.details?.map(
      (item, index) => {
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
            ) : (
              <>No Data Box</>
            )}
          </Grid>
        );
      }
    )}

  </Grid>
</Grid>
            )
          })}
          </>
          ) : (
          <div>No Data</div>
        )}

        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
          <Button disabled={error} style={{ marginRight: "10px", marginTop: "30px" }} variant="contained" name="submit" onClick={onClick}>{type == "edit" ? "Save" : "Add"}</Button>
          <Button style={{ marginRight: "10px", marginTop: "30px" }} variant="contained" onClick={onClick} name="cancel">Cancel</Button>
        </Grid>
      </Grid>
    </div>
  )
}
export default WarehouseEditComponent;