import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/features/isAuth'
import { clear } from '../store/features/userProfileStore'
import {load, unload} from '../store/features/isAdmin'
import { Link, Navigate, NavLink, useActionData } from 'react-router-dom'

export default function Logout () {
    const dispatch = useDispatch()
    dispatch(logout())
    dispatch(clear())
    dispatch(unload())
}