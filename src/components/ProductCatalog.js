import React, { useEffect, useState, ChangeEvent } from 'react';
import {Link} from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import NavBar from './NavBar';
import ProductTypeToggles from './Toggle/productTypeToggles';
import SkinTypeToggles from './Toggle/skinTypeToggles';
import Button from '@mui/material/Button';
import ProductCard from './Product/ProductCard'
import DirIngredientsToggle from './Toggle/DirIngredientsAutocomplete';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import NavBarV1 from './NavBarv1';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const theme = createTheme();

export default function ProductCatalog() {
// Product type search fields
  const [name, setName] = useState(null)
  const [price, setPrice] = useState(null)
  const [skinType, setSkinType] = useState(() => ['oily', 'dry', 'all'])
  const [productType, setProductType] = useState(() => ['cleanser'])
  const [ingredients, setIngredients] = useState(null)
  const [sensitive, setSensitive] = useState(null)
  const [data, setData] = useState([])
  const [gridArr, setGridArr] = useState([])
  // const [formats, setFormats] = useState(() => ['Cleanser']);
// const [prodDetails, setProdDetails] = useState('')

// useEffect(() => {
//   // declare the async data fetching function
//   const fetchData = async () => {
//     // get the data from the api
//     const data = await fetch('http://localhost:5000/prod');
//     // convert the data to json
//     const json = await data.json();

//     // set state with the result
//     let record = "";
//     for (let object = 0; object < json.length; object++) {
//          for (let details in json[object]){
//             record += json[object][details] + " "
//          }
//     }
//     setProdDetails(record);
//   }

//   fetchData()

// },[])
  // useEffect(() => {fetchProducts()}, [])
  
  // useEffect(()=>{console.log(productType)},[productType])
  
  const form = { 
    name, 
    price, 
    skinType, 
    productType, 
    ingredients, 
    sensitive 
  }

  useEffect(()=>{console.log(form)},[form])
  // useEffect(() => {fetchProducts()}, [form])

  const options = {
    method : 'POST',
    credentials: "include",
    headers :{
      'Content-Type': 'application/json',
    },
    // mode:'no-cors',
    body:JSON.stringify(form)
  }
  const fetchProducts = async () => {
    console.log(options.body)
    const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/products`, options);
    // console.log(response)
    const json = await response.json()
    console.log(json)
    setData(json)

  }

  const generateCards = (data) => {
    const gridArrl = []
    if (data){
      for (let item of data){
        gridArrl.push(<Grid sx={2} key={item._id}>
          <ProductCard
          name={item.name}
          price={item.price}
          type={item.productType}
          sensitive={item.sensitive}
          skintype={item.skinType}
          />
        </Grid>)
      }
    }
    // return gridArr
    setGridArr(gridArrl)
  }
  useEffect(() => {generateCards(data)}, [data])

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // useEffect(() => {console.log(`data ${data}`)}, [data])
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      <Box sx={{ flexGrow: 1 }}>
        
        <Grid container spacing={2}>
          <Grid xs={12}>
            <NavBar/>
          </Grid>
          <Grid xs={12}>
            <Typography fontSize={20} align='center'>
              <strong>Products</strong>
            </Typography>
          </Grid>
          
          {/* <Grid xs={6}>
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          </Grid> */}
          <Grid xs={4}>
            <div align='center'>
              <ProductTypeToggles parentFormat={productType} setFormatsParent={setProductType}/>
            </div>
          </Grid>
          <Grid xs={4}>
            <div align='left'>
              <SkinTypeToggles parentFormat={skinType} setFormatsParent={setSkinType}/>
            </div>
          </Grid>
          <Grid xs={2}>
            <div align='left'>
              <Typography>
                {gridArr? `Products Found: ${gridArr.length}`:null}
              </Typography>
            </div>
          </Grid>
          <Grid sx={2}>
            <Button onClick={fetchProducts}>
              Send Request
            </Button>
          </Grid>
          
          {/* <Grid xs={12}>
            <div align='center'>
              <DirIngredientsToggle parentFormat={ingredients} setFormatsParent={setIngredients}/>
            </div>
          </Grid> */}
          {/* <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid> */}
          {/* {data? data.forEach(element => {
          <Grid sx={2}>
            <ProductCard/>
          </Grid>
          })
          :
          null} */}
          {gridArr}
        
        </Grid>
        
       </Box>
       </Box>
      </Container>
    </ThemeProvider>
  );
}