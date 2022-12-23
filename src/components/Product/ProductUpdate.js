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

export default function AdminUpdateProducts() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('0.0')
  const [skinType, setSkinType] = useState(() => 'all')
  const [productType, setProductType] = useState(() => 'cleanser')
  const [ingredients, setIngredients] = useState(null)
  const [sensitive, setSensitive] = useState(false)
  const [data, setData] = useState(null)
  const [entry, setEntry] = useState(null)
  const [productID, setProductID] = useState(null)
  const updateProductForm = { productID, name , price , skinType, productType, ingredients, sensitive }
  const navigate = useNavigate();
//   useEffect(()=>{console.log(updateProductForm)},[updateProductForm])
  // useEffect(()=>{
  //   // console.log(name === null)
  //   if (!name){
      // setData(null)
      // setName('')
      // setPrice('0.0')
      // setSkinType(()=>'all')
      // setProductType(()=>'cleanser')
      // setSensitive(false)
      // setProductID(null)
  //   }
  // }, [name])
  const setDefaultFields = () => {
    setData(null)
      setName('')
      setPrice('0.0')
      setSkinType(()=>'all')
      setProductType(()=>'cleanser')
      setSensitive(false)
      setProductID(null)
    
  }

  useEffect(()=>{
    console.log(data)
    if (data){
      setProductID(data._id)
      setName(data.name)
      setPrice(data.price['$numberDecimal'])
      setProductType(data.productType)
      setSensitive(data.sensitive)
      setSkinType(data.skinType)
      // console.log(data.productType)
    }
    
  }, [data])

  useEffect(()=> {console.log(updateProductForm)}, [updateProductForm])
  const fetchOptions = {
                method : 'PUT',
                credentials : 'include',
                headers :{
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify(updateProductForm)
              }

  //async function to post data to DB
  const postProduct = async () => {
    const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/updateproducts`, fetchOptions);
    // const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/userCred`, fetchOptions);
    // const result = await response.json()
    // console.log(result)
    const data = await response.json();
    if (response.status == 200){
      try{ 
        setDefaultFields()
        alert ("Product Successfully Updated!")

        // navigate('/login')
        console.log(data)
      }
      catch (e){
        console.log(e)
        alert ("Product Update Failed!")
  
      }
    }else{
        // alert ("Product Update Failed!")
        alert (data? data : response.status)
    }
  }
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(updateProductForm)
    postProduct()
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
            Update a product!
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
                <ProductSearch parentFormat={data} setParentFormat={setData} reset={setDefaultFields}/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="product-price-update"
                  label={price? `$ ${price}` : '$0.0'}
                  onChange = {(e) => {setPrice(e.target.value)}}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  select
                  value={productType}
                  id="product-type-update"
                  label="Product Type"
                  onChange = {(e) => {setProductType(e.target.value)}}
                >
                <MenuItem value='cleanser'>Cleanser</MenuItem>
                <MenuItem value='treatment'>Treatment</MenuItem>
                <MenuItem value='moisturiser'>Moisturiser</MenuItem>
                <MenuItem value='sunscreen'>Sunscreen</MenuItem>

                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    select
                    value={skinType}
                    id="skin-type-update"
                    label="Suitable for people with:"
                    onChange = {(e) => {setSkinType(e.target.value)}}
                    >
                    <MenuItem value='oily'>Oily Skin</MenuItem>
                    <MenuItem value='dry'>Dry Skin</MenuItem>
                    <MenuItem value='all'>Combination Skin</MenuItem>

                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    select
                    value={sensitive}
                    id="sensitive-update"
                    label="Suitable for people with:"
                    onChange = {(e) => {setSensitive(e.target.value)}}
                    >
                    <MenuItem value={true}>Sensitive Skin</MenuItem>
                    <MenuItem value={false}>Non-Sensitive Skin</MenuItem>

                </TextField>
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
              Update Product
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}