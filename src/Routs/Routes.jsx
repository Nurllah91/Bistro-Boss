import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Home/OurMenu/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRout from "./PrivateRout";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRouts from "./AdminRouts";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";




 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <OurMenu></OurMenu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        },
        {
          path:'/secret',
          element: <PrivateRout> <Secret></Secret></PrivateRout>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRout> <Dashboard></Dashboard></PrivateRout>,
      children:[
        {
          path:'my-cart',
          element: <MyCart></MyCart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path: '/dashboard/user-home',
          element:<UserHome></UserHome>
        },


        // admin routs
        {
          path:'/dashboard/admin-home',
          element:<AdminHome></AdminHome>

        },
        {
          path:'all-users',
          element: <AdminRouts><AllUsers></AllUsers></AdminRouts>
        },
        {
          path: 'add-item',
          element:<AdminRouts><AddItem></AddItem></AdminRouts>
        },
        {
          path: 'manage-items',
          element: <AdminRouts><ManageItems></ManageItems></AdminRouts>
        }
      ]
    }
  ]);