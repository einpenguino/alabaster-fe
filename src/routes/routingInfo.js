import { createBrowserRouter, RouterProvider, Route, Router } from 'react-router-dom';
import Home from '../components/Home';
import ErrorPage from '../routes/ErrorPage'
import ProductUpload from '../components/ProductUpload';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import ProductCatalog from '../components/ProductCatalog';
import UserSkinGoal from '../components/UserSkinGoal';
import UserRegime from '../components/UserRegime';
import Dashboard from '../components/dashboard';

export default () => {createBrowserRouter([
    {
      path:'/',
      element:<Home />,
      errorElement:<ErrorPage />
    },
    {
      path: '/login',
      element:<Login/>
    },
    {
      path:'/adminupload',
      element:<ProductUpload/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    },
    {
      path:'/products',
      element:<ProductCatalog/>
    },
    {
      path:'/skingoal',
      element:<UserSkinGoal/>
    },
    {
      path:'/userregime',
      element:<UserRegime/>
    },
    // {
    //   path:'/dashboard',
    //   element:
    // }
  ])
}