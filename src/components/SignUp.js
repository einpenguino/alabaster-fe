import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import NavBar from './NavBar';

const theme = createTheme();

export default function SignUp() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [confirmpassword, setConfirmPassword] = useState('')
  const form = {name , username , email, password }
  const navigate = useNavigate();
   
  //regex to confim if email address is valid & password requirement
  // let regexUsername = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  // let regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  // let regexUsername = new RegExp(".");
  // let regexPassword = new RegExp(".");

  //the post 
  const options = {
                  method : 'POST',
                  headers :{
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify(form)
                }

  //async function to post data to DB
  const postUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/signup`, options);
    // const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/userCred`, options);
    if (await response.status == 200){
      try{ 
        const data = await response.json();
        alert ("Sign Up Success!")
        navigate('/login')
      }
      catch (e){
        console.log(e)
        alert ("Sign Up Failed")
  
      }
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(form)
    postUser()
    // if (regexUsername.test(username)){
    //     if(regexPassword.test(password)){
    //        if (password === confirmpassword){
    //            postUser()
    //            navigate("/Login")
              
    //        }
    //        else{
    //         alert ("Password & Confirm Password doesn't meet")
    //         setPassword('')
    //         setConfirmPassword('')
    //        }
    //     }
    //     else{
    //       alert ("Password entered doesn't meet the requirement");  
    //       setPassword('')
    //       setConfirmPassword('')
    //     }
    // }
    // else{
    //       alert ("Email entered is invalid");  
    //       setUsername('')
          
    // }


  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  // useEffect(() => {console.log(form)}, form)
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
          <NavBar/>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  // autoComplete="given-name"
                  // name="firstName"
                  required
                  fullWidth
                  id="name-signup"
                  label="Name"
                  autoFocus
                  onChange = {(e) => {setName(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username-signup"
                  label="Username"
                  // name="lastName"
                  // autoComplete="family-name"
                  onChange = {(e) => {setUsername(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email-signup"
                  label="Email Address"
                  // name="email"
                  // autoComplete="email"
                  onChange = {(e) => {setEmail(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  // name="password"
                  label="Password"
                  type="password"
                  id="password"
                  // autoComplete="new-password"
                  onChange = {(e) => {setPassword(e.target.value)}}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

// export default SignUp;