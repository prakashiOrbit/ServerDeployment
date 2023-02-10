import React, { Component } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { FormControl } from '@mui/material';
import Typography from "@mui/material/Typography";
import { Container, InputLabel, Input, FormHelperText, Button, Grid } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {config} from "../../Constants/constant";

//import SmartConnect from "react-smart-connect";
import SmartConnect from "../smart-connect/smart-connect";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      open: false,
      openf: false
    };

  this.onLoginClick = this.onLoginClick.bind(this);
  this.child = React.createRef();

  }
  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    if(this.state.username === '' || this.state.password === ''){
      this.handleClickOpen();
    }else{
      const userData = {
        username: this.state.username,
        password: this.state.password
      };

      var test = this.child.current.authenticate(userData.username, userData.password);
      console.log(test);

      if(test === undefined){
        this.handleClickOpenf();
      }else{
        
      }

      console.log("Login " + userData.username + " " + userData.password);
    }

  };

  handleClickOpen = () => {
    //setOpen(true);
    this.setState({open:true});
  };

  handleClose = () => {
    //setOpen(false);
    this.setState({open:false});
  };

  handleClickOpenf = () => {
    //setOpen(true);
    this.setState({openf:true});
  };

  handleClosef = () => {
    //setOpen(false);
    this.setState({openf:false});
  };

  render() {
    return (
      <Container maxWidth="sm">
      <CssBaseline />
          <form>
            <Grid container direction={"column"} spacing={5}>\
              <Grid item>
                <Typography variant="h3" noWrap component="div">
                Login
                </Typography>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel htmlFor="my-input">User name</InputLabel>
                  <Input id="username" aria-describedby="my-helper-untext" name="username" onChange={this.onChange} />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel htmlFor="my-input">Password</InputLabel>
                  <Input id="password" aria-describedby="my-helper-passtext" name="password" onChange={this.onChange} />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <Button variant="contained" type="button" onClick={this.onLoginClick}>Login</Button>
                </FormControl>
              </Grid>
            </Grid>
          </form>
          <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            User name or password missing.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={this.state.openf}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClosef}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Authentication faliure.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClosef}>Ok</Button>
        </DialogActions>
      </Dialog>

      <SmartConnect server={config.host} port={config.port} tenant={config.tenant} flow="farmer" flowEvent="farmerEvent" ref={this.child} />
      </Container>

      // <Container>
      //   <Row>
      //     <Col md="4">
      //       <h1>Login</h1>
      //       <Form>
      //         <Form.Group controlId="usernameId">
      //           <Form.Label>User name</Form.Label>
      //           <Form.Control
      //             type="text"
      //             name="username"
      //             placeholder="Enter user name"
      //             value={this.state.username}
      //             onChange={this.onChange}
      //           />
      //           <FormControl.Feedback type="invalid"></FormControl.Feedback>
      //         </Form.Group>

      //         <Form.Group controlId="passwordId">
      //           <Form.Label>Your password</Form.Label>
      //           <Form.Control
      //             type="password"
      //             name="password"
      //             placeholder="Enter password"
      //             value={this.state.password}
      //             onChange={this.onChange}
      //           />
      //           <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      //         </Form.Group>
      //       </Form>
      //       <Button color="primary" onClick={this.onLoginClick}>Login</Button>
      //       <p className="mt-2">
      //         Don't have account? <Link to="/signup">Signup</Link>
      //       </p>
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default Login;