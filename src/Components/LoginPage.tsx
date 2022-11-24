import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const theme = createTheme();

export default function LoginPage() {

    const [userName,setUserName] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [userNameError,setUserNameError] = React.useState(false)
    const [passwordError,setPasswordError] = React.useState(false)



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    if(userName.length==0 )
    {
        setUserNameError(true)
    }
        if(password.length==0)
        {
            setPasswordError(true)
        }
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box className="bg-gray-200 px-5 py-5 h-auto rounded-2xl"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar className="animate-bounce" sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in 
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextField className="bg-white rounded"
              margin="normal"
              required
              fullWidth
              id="username"
              label="UserName"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={e=>setUserName(e.target.value)}

            />

                        {userNameError?
            <label className='text-red-600 ml-2'>This field can not be empty</label>
            :""}

            <TextField className="bg-white rounded"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e=>setPassword(e.target.value)}

            />


            {passwordError?
            <label className='text-red-600 ml-2'>This field can not be empty</label>
            :""}           
            <Button 
            onClick={() => { 
                    console.log(userName);
                }} 

              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            
           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
