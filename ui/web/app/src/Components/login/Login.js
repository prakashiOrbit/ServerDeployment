import React, { Component } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { FormControl } from '@mui/material';
import Typography from "@mui/material/Typography";
import { Container, InputLabel, Input, FormHelperText, Button, Grid } from '@mui/material';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

  this.onLoginClick = this.onLoginClick.bind(this);

  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Login " + userData.username + " " + userData.password);

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