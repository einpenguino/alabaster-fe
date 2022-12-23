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
import NavBar from '../NavBar';
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme();

export default function CreateProduct() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('0.0')
    const [skinType, setSkinType] = useState(() => 'all')
    const [productType, setProductType] = useState(() => 'cleanser')
    const [ingredients, setIngredients] = useState(null)
    const [sensitive, setSensitive] = useState(false)
  // const [confirmpassword, setConfirmPassword] = useState('')
  const form = {name , price , skinType, productType, ingredients, sensitive }
  const navigate = useNavigate();
//   useEffect(()=>{console.log(form)},[form])
  const options = {
                  method : 'POST',
                  credentials : 'include',
                  headers :{
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify(form)
                }

  //async function to post data to DB
  const postProduct = async () => {
    const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/createproducts`, options);
    // const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/userCred`, options);
    // const result = await response.json()
    // console.log(result)
    if (response.status == 200){
      try{ 
        const data = await response.json();
        alert ("Product Successfully Created!")
        // navigate('/login')
        console.log(data)
      }
      catch (e){
        console.log(e)
        alert ("Product Creation Failed!")
  
      }
    }else{
        alert ("Product Creation Failed!")
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(form)
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
            Create a product!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="product-name-signup"
                  label="Product Name"
                  autoFocus
                  onChange = {(e) => {setName(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="product-price-signup"
                  label="Price (0.0)"
                  onChange = {(e) => {setPrice(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  select
                  value='cleanser'
                  id="product-type-signup"
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
                    value='all'
                    id="skin-type-signup"
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
                    value={false}
                    id="sensitive-signup"
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
              Create Product
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

// import {useState, useEffect} from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import BasicSelect from './SelectorField';
// import FormControl from '@mui/material/FormControl';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';

// export default function CreateProductForm() {
//     const [name, setName] = useState('')
//     const [price, setPrice] = useState('0.0')
//     const [productType, setProductType] = useState('cleanser')
//     const [skinType, setSkinType] = useState('all')
//     const [sensitive, setSensitive] = useState('false')
//     const [form, setForm] = useState(null)
//     // const [name, setName] = useState()

//     const forml = { name, price, productType, skinType, sensitive }
//     // useEffect(() => {setForm(forml)}, [forml])

//     const handleChange = (event, setField) => {
//         setField(event.target.value);
//     };

//     return (
//         <Box sx={{ width: '80%' }}>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//             <Grid item xs={6}>
//                 <FormControl fullWidth>
//                     <TextField
//                     required
//                     id="outlined-required"
//                     label="Product Name"
//                     defaultValue="CleanserX"
//                     />
//                 </FormControl>
//             </Grid>
//             <Grid item xs={6}>
//                 <FormControl fullWidth>
//                     <TextField
//                     required
//                     id="outlined-required"
//                     label="Price"
//                     defaultValue="0.0"
//                     />
//                 </FormControl>
//             </Grid>
//             <Grid item xs={6}>
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Product Type</InputLabel>
//                 <Select
//                   required
//                   value={productType}
//                   onChange={(event)=>{setProductType(event.target.value)}}
//                 >
//                     <MenuItem value={'cleanser'}>Cleanser</MenuItem>
//                     <MenuItem value={'treatment'}>Treatment</MenuItem>
//                     <MenuItem value={'moisturiser'}>Moisturiser</MenuItem>
//                     <MenuItem value={'sunscreen'}>Sunscreen</MenuItem>
//                 </Select>
//             </FormControl>
//             </Grid>
//             <Grid item xs={6}>
//                 {/* <BasicSelect
//                 label={'Skin Type'}
//                 parentFormat={skinType}
//                 setParentFormat={setSkinType}
//                 options={[
//                     <>
//                     <MenuItem value={'oily'}>Oily Skin</MenuItem>
//                     <MenuItem value={'dry'}>Dry Skin</MenuItem>
//                     <MenuItem value={'all'}>Combination</MenuItem>
//                     </>
//                 ]}
//                 /> */}
//             </Grid>
//             <Grid item xs={6}>
//                 {/* <BasicSelect
//                 label={'Skin Sensitivity'}
//                 parentFormat={sensitive}
//                 setParentFormat={setSensitive}
//                 options={[
//                     <>
//                     <MenuItem value={'true'}>I have Sensitive Skin!</MenuItem>
//                     <MenuItem value={'false'}>I don't have Sensitive Skin!</MenuItem>
//                     </>
//                 ]} */}
//                 />
//             </Grid>
//         </Grid>
//         </Box>
//     );
// }
// //     return (
// //         <Box sx={{ width: '80%' }}>
// //         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
// //             <Grid item xs={6}>
// //                 <FormControl fullWidth>
// //                     <TextField
// //                     required
// //                     id="outlined-required"
// //                     label="Product Name"
// //                     defaultValue="CleanserX"
// //                     />
// //                 </FormControl>
// //             </Grid>
// //             <Grid item xs={6}>
// //                 <FormControl fullWidth>
// //                     <TextField
// //                     required
// //                     id="outlined-required"
// //                     label="Price"
// //                     defaultValue="0.0"
// //                     />
// //                 </FormControl>
// //             </Grid>
// //             <Grid item xs={6}>
// //                 <BasicSelect
// //                 label={'Product Type'}
// //                 parentFormat={productType}
// //                 setParentFormat={setProductType}
// //                 // options={[
// //                 //     {name:'Cleanser', value:'cleanser'},
// //                 //     {name:'Treatment', value:'treatment'},
// //                 //     {name:'Moisturiser', value:'moisturiser'},
// //                 //     {name:'Sunscreen', value:'sunscreen'}
// //                 // ]}
// //                 // options={[
// //                 //     ['Cleanser','cleanser'],
// //                 //     ['Treatment', 'treatment'],
// //                 //     ['Moisturiser', 'moisturiser'],
// //                 //     ['Sunscreen', 'sunscreen']
// //                 // ]}
// //                 options={[
// //                     <>
// //                     <MenuItem value={'cleanser'}>Cleanser</MenuItem>
// //                     <MenuItem value={'treatment'}>Treatment</MenuItem>
// //                     <MenuItem value={'moisturiser'}>Moisturiser</MenuItem>
// //                     <MenuItem value={'sunscreen'}>Sunscreen</MenuItem>
// //                     </>
// //                 ]}
// //                 />
// //             </Grid>
// //             <Grid item xs={6}>
// //                 <BasicSelect
// //                 label={'Skin Type'}
// //                 parentFormat={skinType}
// //                 setParentFormat={setSkinType}
// //                 options={[
// //                     <>
// //                     <MenuItem value={'oily'}>Oily Skin</MenuItem>
// //                     <MenuItem value={'dry'}>Dry Skin</MenuItem>
// //                     <MenuItem value={'all'}>Combination</MenuItem>
// //                     </>
// //                 ]}
// //                 />
// //             </Grid>
// //             <Grid item xs={6}>
// //                 <BasicSelect
// //                 label={'Skin Sensitivity'}
// //                 parentFormat={sensitive}
// //                 setParentFormat={setSensitive}
// //                 options={[
// //                     <>
// //                     <MenuItem value={'true'}>I have Sensitive Skin!</MenuItem>
// //                     <MenuItem value={'false'}>I don't have Sensitive Skin!</MenuItem>
// //                     </>
// //                 ]}
// //                 />
// //             </Grid>
// //         </Grid>
// //         </Box>
// //     );
// // }