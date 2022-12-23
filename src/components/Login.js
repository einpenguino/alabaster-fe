import React, { useEffect, useState } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Authenticate } from './authTest';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../store/features/isAuth'
import {load, unload} from '../store/features/isAdmin'
import { store } from '../store/features/userProfileStore'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import NavBar from './NavBar';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
// import Cookies from 'js-cookie'
// import {useCookies} from 'react-cookie'

const Login=()=>{
  
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  // const [cookies, setCookie, removeCookie] = useCookies(['alabaster']);
  const dispatch = useDispatch()
  const form = {userName , password}
  const navigate = useNavigate();
  // const [cookies] = useCookies(['alabaster'])

  //the post 
  const options = {
                  method : 'POST',
                  credentials: "include",
                  // credentials:'same-origin',
                  headers :{
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin':'*'
                  },
                  // mode:'no-cors',
                  body:JSON.stringify(form)
                }

  //async function to sent login details to DB
  const PostUserLogin = async () => {
    try{
      const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/login`, options);
      // const response = await fetch(`http://localhost:3000/login`, options);
      // console.log(options.body)
      // console.log(response.headers)
      // console.log(cookies.value)
      console.log(response)
      console.log(`login cookie FE : ${document.cookie.split('=')[1]}`)
      // const json = await response.body
      const json = await response.json()
      console.log(json)
    
      if (response.status === 200){

        if (json.isAdmin){
          dispatch(load())
        }else{
          dispatch(unload())
        }

        if (!json.skinGoal | !json.skinType | !json.skinSensitivity){
          dispatch(login())
          dispatch(store(json))
          setFail(false)
          // console.log(useSelector((state) => state.auth.value))
          // navigate("/skingoal")
          navigate("/products")
        }
        else {
          dispatch(login())
          dispatch(store(json))
          navigate("/dashboard")
        }
      }else{
        setFail(true)
        dispatch(logout())
          // POP LOGIN FAILED
      }
    }catch (error){
      setFail(true)
      dispatch(logout())
      console.log(error.message)

    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setUsername('')
    setPassword('')
    PostUserLogin()
  }

  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'8px 0'}
  return(
      <Grid>
        <NavBar/>
          <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                  <h2>Sign In</h2>
              </Grid>
              <TextField 
              label='Username' 
              placeholder='Enter username' 
              variant="outlined" 
              fullWidth 
              required
              value = {userName}
              onChange={(e) => {setUsername(e.target.value)}}
              />
              <TextField 
              label='Password' 
              placeholder='Enter password' 
              type='password' 
              variant="outlined" 
              fullWidth 
              required
              value = {password}
              onChange={(e) => {setPassword(e.target.value)}}
              />
              {/* <FormControlLabel
                  control={
                  <Checkbox
                      name="checkedB"
                      color="primary"
                  />
                  }
                  label="Remember me"
                /> */}
              <Button 
              type='submit' 
              color='primary' 
              variant="contained" 
              style={btnstyle} 
              fullWidth 
              onClick={handleSubmit}>Sign in</Button>
              {/* <Typography >
                    <Link href="#" >
                      Forgot password ?
                    </Link>
              </Typography> */}
              <Typography > Do you have an account ?
                    <Link to="/signup" >
                      Sign Up 
              </Link>
              </Typography>
              {success ? 
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                <strong>Hold on, we're logging you in!</strong>
              </Alert>
              : null }
              {
                fail?
                <Alert severity="error">
                  <AlertTitle>Login Failed</AlertTitle>
                  <strong>Wrong Username or Password!</strong>
                </Alert>
                :
                null
              }
              {/* <Authenticate/> */}
          </Paper>
      </Grid>
  )
}

export default Login;
