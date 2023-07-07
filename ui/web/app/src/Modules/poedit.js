import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ButtonClass from "../Components/CreateForm/ButtonClass";
import TextFieldClass from "../Components/CreateForm/TextFieldClass";
import CustomTextField from "./Textfield";
import DateClass from "../Components/CreateForm/DateClass";

const POEditComponent = ({formDetails,rowdata,onSubmit,type}) =>{
    const [formdata,setformdata]= useState(rowdata?rowdata:{});
    
    
    const onClick = (e) =>{
        onSubmit(e.target.name , formdata);
    }
    
    const onChange =(e) =>{
        let id = e.target.id;
        let value = e.target.value;
    
        setformdata({...formdata ,[id] : value});
    }




useEffect(()=>{
console.log("dettt",formdata);
console.log("dmdmdm",rowdata)
},[formdata])
    return(
        <div style={{margin:"12%"}}>
        <Grid container spacing={8}>
                {Object.keys(formDetails).length ? (
                  <Grid>
                    <span
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        display: "block",
                        marginTop: "1px",
                        color: "navy",
                      }}
                    >
                      {formDetails.division.formelements.title}
                    </span>
                    <Grid
                      container
                      spacing={5}
                      style={{
                        border: "3px solid #ace",
                        padding: "30px",
                        boxSizing: "borderBox",
                        marginTop: "20px",
                      }}
                    >
                      {formDetails.division.formelements.generalDetails?.map(
                        (item, index) => {
                          return (
                            <Grid key={index} item xs={12} sm={6}>
                              { item.control === "textbox" ? (
                                <CustomTextField
                                value={rowdata?.[item.label]}
                                 onChange={onChange}
                                 label={item.label}
                               
                                // defaultValue={rowdata[item.label]}
                                 
                               />
                               ) 
                               : item.control === "date" ? (
                                <CustomTextField
                                value={rowdata?.[item.label]}
                                 onChange={onChange}
                                 label={item.label}
                               
                                // defaultValue={rowdata[item.label]}
                                 
                               />
                              ) 
                            : (
                                <span></span>
                              )}

                            <Grid
                              container
                              display = {item.addressFields?"block":"none"}
                              spacing={2}
                              style={{
                                border: "3px solid #ace",
                                padding: "30px",
                                boxSizing: "borderBox",
                                marginTop: "50px",
                              }}
                            >   
                      <span
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        color: "navy"                       
                      }}
                    >
                      {item.label}
                    </span>
                       
                        {item.addressFields?.map(
                          (item, index) => {
                            return (
                              <Grid key={index} item xs={10} sm={10}>                                
                                { item.control === "textbox" ? (
                                  <CustomTextField
                                  value={rowdata?.[item.label]}
                                   onChange={onChange}
                                   label={item.label}
                                 
                                  // defaultValue={rowdata[item.label]}
                                   
                                 />
                                ): (
                                  <>No Data Box</>
                                )}
                              </Grid>
                            );
                          }
                        )}
                      </Grid>

                            </Grid>
                          );
                        }
                      )}

                      
                    </Grid>
                  </Grid>
                ) : (
                  <div>No Data</div>
                )}

                

              
<Grid  item xs={12} sm={3}>
                        <Button style={{marginRight:"10px"}} variant="contained" name="submit" onClick={onClick}>{type=="edit"?"Save":"Add"}</Button>
                        <Button variant="contained" onClick={onClick} name="cancel">Cancel</Button>
                
                        </Grid>
              </Grid>
              </div>
    )
}
export default POEditComponent;