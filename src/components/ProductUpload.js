// import React, { useEffect, useState } from 'react';
// import {Link} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme();

// function ProductUpload() {

//   const [p_id, setID] = useState('')
//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [prodtype, setProdtype] = useState('')
//   const [skintype, setSkintype] = useState('')
//   const [desc, setDesc] = useState('')
//   const [ing, setIng] = useState('')
//   const [act_ing, setAct_ing] = useState('')
//   const [img, setImg] = useState('')

//   const form = {p_id , name, price, prodtype, skintype, desc, ing, act_ing, img}

//   const navigate = useNavigate();

//   const handleSubmit = (e) =>{
//     e.preventDefault();

//     console.log(form)
    
//     //Posting the details to the sever
//     const options = {
//           method : 'POST',
//           headers :{
//             'Content-Type': 'application/json'
//           },
//           body:JSON.stringify(form)
//         }

//     fetch('http://localhost:5000', options);
     
//     //Navigating to ProductCatalog upon submiting 
//     navigate("/ProductCatalog")
    

//   }




 

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <div className="App">
//             <header className="App-header">

//               <Link to="/">
//                   Home
//               </Link>

//               <h1>Admin Product upload</h1>
//               <form onSubmit={handleSubmit}>
//                 <label>Product ID:</label>
//                   <input 
//                   type="text"
//                   required
//                   value = {p_id}
//                   onChange = {(e) => setID(e.target.value)}
//                   />
//                 <br></br>

//                 <label>Name: </label>
//                 <input
//                 type="text" 
//                 required
//                 value = {name}
//                 onChange = {(e) => setName(e.target.value)}
//                 />
//                 <br></br>

//                 <label>Price: </label>
//                 <input
//                 type="text" 
//                 required
//                 value = {price}
//                 onChange = {(e) => setPrice(e.target.value)}
//                 />
//                 <br></br>

//                 <label>Product Type: </label>
//                 <input
//                 type="text" 
//                 required
//                 value = {prodtype}
//                 onChange = {(e) => setProdtype(e.target.value)}
//                 />
//                 <br></br>

//                 <label>Best Suited for : </label>
//                 <input
//                 type="text" 
//                 required
//                 value = {skintype}
//                 onChange = {(e) => setSkintype(e.target.value)}
//                 />
//                 <br></br>

//                 <label>Description: </label>
//                 <input
//                 type="text" 
//                 required
//                 value = {desc}
//                 onChange = {(e) => setDesc(e.target.value)}
//                 />
//                 <br></br>

//                 <label>Ingredients: </label>
//                 <input
//                 type="text" 
//                 required
//                 value = {ing}
//                 onChange = {(e) => setIng(e.target.value)}
//                 />
//                 <br></br>

//                 <label> Active Ingredients: </label>
//                 <input
//                 type="text" 
//                 required
//                 value = {act_ing}
//                 onChange = {(e) => setAct_ing(e.target.value)}
//                 />
//                 <br></br>

//                 <label> Image: </label>
//                 <input
//                 type="text" 
//                 required
//                 value = {img}
//                 onChange = {(e) => setImg(e.target.value)}
//                 />
//                 <br></br>
                
//                 <input type="submit" value="Submit" />
//               </form>
//             </header>
//           </div>
//           </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default ProductUpload;
