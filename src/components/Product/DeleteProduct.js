import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import NavBar from '../NavBar';
import MenuItem from '@mui/material/MenuItem';
import ProductSearch from './ProductSearch'

const theme = createTheme();

export default function AdminDeleteProducts() {
  const [name, setName] = useState('')
  const [data, setData] = useState(null)
  const [entry, setEntry] = useState(null)
  const [productID, setProductID] = useState(null)
  const deleteProductForm = { productID, name }
  const navigate = useNavigate();

  const setDefaultFields = () => {
    setData(null)
      setName('')
      setProductID(null)
  }

  useEffect(()=>{
    console.log(data)
    if (data){
      setProductID(data._id)
      setName(data.name)
      // console.log(data.productType)
    }
    
  }, [data])

  useEffect(()=> {console.log(deleteProductForm)}, [deleteProductForm])
  const fetchOptions = {
                method : 'DELETE',
                credentials : 'include',
                headers :{
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify(deleteProductForm)
              }

  //async function to post data to DB
  const DeleteProduct = async () => {
    const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/deleteproducts`, fetchOptions);
    // const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/userCred`, fetchOptions);
    // const result = await response.json()
    // console.log(result)
    const data = await response.json();
    if (response.status == 200){
      try{ 
        setDefaultFields()
        alert ("Product Successfully Deleted!")

        // navigate('/login')
        console.log(data)
      }
      catch (e){
        console.log(e)
        alert ("Product Delete Failed!")
  
      }
    }else{
        // alert ("Product Update Failed!")
        alert (data? data : response.status)
    }
  }
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(deleteProductForm)
    DeleteProduct()
  }
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
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
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Delete a product!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  id="product-name-update"
                  label="Product Name"
                  autoFocus
                  onChange = {(e) => {setName(e.target.value)}}
                /> */}
                <ProductSearch parentFormat={data} setParentFormat={setData}/>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={}
            >
              Delete Product
            </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}