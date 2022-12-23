import React, { useEffect, useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
// import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import NavBar from './NavBar';
import ProductTypeToggles from './Toggle/productTypeToggles';
import SkinTypeToggles from './Toggle/skinTypeToggles';
import Button from '@mui/material/Button';
import ProductCard from './Product/ProductCard'
import DirIngredientsToggle from './Toggle/DirIngredientsAutocomplete';
import AdminProductToggle from './Product/AdminProductToggle'
import CreateProductForm from './Product/CreateProductForm'


export default function AdminProducts() {
// Product type search fields
  const [name, setName] = useState(null)
  const [price, setPrice] = useState(null)
  const [skinType, setSkinType] = useState(() => ['oily', 'dry', 'all'])
  const [productType, setProductType] = useState(() => ['Cleanser'])
  const [ingredients, setIngredients] = useState(null)
  const [sensitive, setSensitive] = useState(null)
  const [data, setData] = useState([])
  const [gridArr, setGridArr] = useState([])
  const [crudVal, setCrudVal] = useState('create')

  // useEffect(() => {fetchProducts()}, [])
  
  // useEffect(()=>{console.log(productType)},[productType])
  
  const formAdmin = { 
    name, 
    price, 
    skinType, 
    productType, 
    ingredients, 
    sensitive 
  }

  useEffect(()=>{console.log(formAdmin)},[formAdmin])
  // useEffect(() => {fetchProducts()}, [form])

  const options = {
    method : 'POST',
    credentials: "include",
    headers :{
      'Content-Type': 'application/json',
    },
    // mode:'no-cors',
    body:JSON.stringify(formAdmin)
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
        gridArrl.push(<Grid sx={2}>
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
    
    <Box sx={{ flexGrow: 1 }}>
      
      <Grid container spacing={2}>
        <Grid xs={12}>
          <NavBar/>
        </Grid>
        <Grid xs={12}>
          <Typography fontSize={20} align='center'>
            <strong>Products Administration</strong>
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
          <div align='right'>
            <SkinTypeToggles parentFormat={skinType} setFormatsParent={setSkinType}/>
          </div>
        </Grid>
        <Grid sx={2}>
          <AdminProductToggle parentFormat={crudVal} setFormatsParent={setCrudVal}/>
        </Grid>
        <Grid sx={2}>
          <Button onClick={fetchProducts}>
            Execute
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
        {
        gridArr
        }
      
      </Grid>
      
    </Box>
  );
}