import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {logout} from '../store/features/isAuth'
import Logout from './Logout';
import { Link, Navigate, NavLink } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function NavBar() {
  // let isAdmin
  const auth = useSelector(state => state.auth.value)
  const isAdmin = useSelector(state => state.isadmin.value)

  const dispatch = useDispatch()
  // const localLogout = dispatch(logout)
  return (
        <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            m: 1,
        },
        }}
    >
        <ButtonGroup variant="text" aria-label="outlined button group">
        <Button>
            <Link to="/">
                Home
            </Link>
        </Button>
        {auth ? 
        <Button>
            <NavLink to="/" onClick={Logout}>
            Logout
            </NavLink>
        </Button>
        : 
        <Button>
            <NavLink to="/login">
            Login
            </NavLink>
        </Button>}
        <Button>
            <NavLink to="/products">
            Products
            </NavLink>
        </Button>
        {isAdmin ? 
        <>
        <Button>
            <NavLink to='/createproducts'>
            Create Products
            </NavLink>
        </Button>
        <Button>
            <NavLink to='/updateproducts'>
            Update Products
            </NavLink>
        </Button>
        <Button>
            <NavLink to='/deleteproducts'>
            Delete Products
            </NavLink>
        </Button>
        </>
        :
        null
        }
        </ButtonGroup>
    </Box>
    // <div className="Nav">
    //   <header className="Nav-header">
        // <Link to="/">
        //     Home
        // </Link>
        // {auth ? 
        // // <NavLink to="/dashboard" onClick={Logout}>
        // //   Profile
        // // </NavLink>
        // <NavLink to="/" onClick={Logout}>
        //   Logout
        // </NavLink>
        // : 
        // <NavLink to="/login">
        //   Login
        // </NavLink>}
        // <NavLink to="/products">
        //   Products
        // </NavLink>
        // {
        //   isAdmin ?
        //   <NavLink to='/createproducts'>
        //     Create Products
        //   </NavLink>
        //   :
        //   null
        // }
        // {
        //   isAdmin ?
        //   <NavLink to='/updateproducts'>
        //     Update Products
        //   </NavLink>
        //   :
        //   null
        // },
        // {
        //   isAdmin ?
        //   <NavLink to='/deleteproducts'>
        //     Delete Products
        //   </NavLink>
        //   :
        //   null
        // }
        // {/* {
        //   isAdmin ?
        //   <NavLink to='/adminupload'>
        //     Admin Products
        //   </NavLink>
        //   :
        //   null
        // }, */}
        // {/* {
        //   isAdmin ?
        //   <NavLink to='/adminsettings'>
        //     Admin Users
        //   </NavLink>
        //   :
        //   null
        // } */}
    //   </header>
    // </div>
  );
}
