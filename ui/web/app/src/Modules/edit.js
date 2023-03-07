import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ButtonClass from "../Components/CreateForm/ButtonClass";
import TextFieldClass from "../Components/CreateForm/TextFieldClass";
import CustomTextField from "./Textfield";

const EditComponent = ({formDetails,rowdata,onSubmit,type}) =>{
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
console.log(formdata);
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
                        border:
                         formDetails.division.formelements.title ===
                          "GENERAL DETAILS"
                            ? "none"
                            : "3px solid #ace",
                        padding: "30px",
                        boxSizing: "borderBox",
                        marginTop: "20px",
                      }}
                    >
                      {formDetails.division.formelements.generalDetails?.map(
                        (item, index) => {
                          return (
                            <Grid key={index} item xs={12} sm={6}>
                             
                               {  item.control === "textbox" ? (
                                <CustomTextField
                                 value={rowdata?.[item.label]}
                                  onChange={onChange}
                                  label={item.label}
                                  //disabled={item?.disabled}
                                
                                 // defaultValue={rowdata[item.label]}
                                  
                                />
                              ) : (
                                <>No Data Box</>
                              )}
                            </Grid>
                          );
                        }
                      )}

                      <Grid
                        container
                        spacing={2}
                        style={{
                          border:
                          formDetails.division.formelements
                              .title === "GENERAL DETAILS"
                              ? "none"
                              : "3px solid #ace",
                          padding: "10px",

                          marginTop: "70px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            //marginTop: "15px",
                            color: "navy",
                          }}
                        >
                          {formDetails.division.formelements.title2}
                        </span>
                        {formDetails.division.formelements.addressDetails?.map(
                          (item, index) => {
                            return (
                              <Grid key={index} item xs={10} sm={10}>
                                {item.control === "textbox" ? (
                                  <CustomTextField
                                  value={rowdata?.[item.label]}
                                   onChange={onChange}
                                   label={item.label}
                                 
                                  // defaultValue={rowdata[item.label]}
                                   
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
                  </Grid>
                ) : (
                  <div>No Data</div>
                )}

                {Object.keys(formDetails).length ? (
                  <>
                    <span
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        color: "navy",
                        display: "block",
                        marginTop: "100px",
                      }}
                    >
                      {formDetails.division.formelements.title1}
                    </span>
                    <Grid
                      container
                      spacing={2}
                      style={{
                        border:
                          formDetails.division.formelements.title ===
                          "PAYMENT DETAILS"
                            ? "none"
                            : "3px solid #ace",
                        padding: "30px",
                        boxSizing: "borderBox",
                        marginTop: "50px",
                      }}
                    >
                      {formDetails.division.formelements.paymentDetails?.map(
                        (item, index) => {
                          return (
                            <Grid key={index} item xs={4} sm={8}>
                             {item.control === "textbox" ? (
                                <CustomTextField
                                value={rowdata?.[item.label]}
                                 onChange={onChange}
                                 label={item.label}
                               
                                // defaultValue={rowdata[item.label]}
                                 
                               />
                              ) : (
                                <>No Data Box</>
                              )}
                            </Grid>
                          );
                        }
                      )}
                    </Grid>
                  </>
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
export default EditComponent;