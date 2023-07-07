import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import F_Icon from "./f2rrr.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      "identity": data.get('email'),
      "password": data.get('password'),
      "type": "custom",
      "FlowAdmin": {
        "___smart_action___": "lookup",
        "___smart_value___": "Security"
      }
    };
    axios.post("http://localhost:9082/apptest/Security/Authenticate", payload)
      .then(response => {
        // Check the response status
        console.log(response.data.responses[0].sessionId);

        if (response.data.responses[0]?.errors) {
          alert("Invalid Username or Password");
        } else {
          localStorage.setItem("sessionId", response?.data?.responses[0]?.sessionId);
          validateSession(response?.data?.responses[0]?.sessionId);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Function to validate the session
  const validateSession = (sessionId) => {
    const payload = {
      Session: {
        "___smart_action___": "lookup",
        "___smart_value___": sessionId
      }
    };
  
    axios.post("http://localhost:9082/apptest/Security/SessionValid", payload)
      .then(response => {
        console.log(response.data);
        const valid = response.data;
        if (valid) {
          navigate("/farmerList");
        } else {
          alert("Session Invalid");
          navigate('/login');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={F_Icon} alt="f2r" width="200" height="200" style={{ marginRight: "10px" }} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#1A5701',
                '&:hover': {
                  backgroundColor: '#1A5701',
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

