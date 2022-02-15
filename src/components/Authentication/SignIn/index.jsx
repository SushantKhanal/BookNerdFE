import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../../utils/refreshTokenSetup';
import { CLIENT_ID } from '../../../constants';
import { registerUser } from './signInService';
import GoogleIcon from '@mui/icons-material/Google';
import { Card } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export default function SignIn(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const onSuccess = (res) => {
        props.changeLoggedInStateHandler(res, true);
        sendIdTokenToTheServer(res.getAuthResponse().id_token);
        refreshTokenSetup(res);
    };

    const sendIdTokenToTheServer = async (id_token) => {
        await registerUser();       
    }

    const onFailure = (res) => {
        alert('[Login Failed] res:', res);
    };

    const theme = createTheme();

  return (
      <div style={{
          backgroundColor: '#1976d2',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      }}>
        <CssBaseline />
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 5,
            width: 450,
            height: 500,
            [theme.breakpoints.down("sm")]: {
                width: '100vw',
                height: '100vh',
            },
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
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
              sx={{ mt: 3, mb: 4 }}
            >
              Sign In
            </Button>
            <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Sign in with Google"
                    render={renderProps => (
                        <>
                            <Button variant="contained" disableElevation fullWidth onClick={renderProps.onClick}>
                                <GoogleIcon/>
                                &#160;
                                Sign in with Google
                            </Button>
                        </>
                    )}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px'}}
                    isSignedIn={true}
                />
          </Box>
        </Card>
      </div>
  );
}
