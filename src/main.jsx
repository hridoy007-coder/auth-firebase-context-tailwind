import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Header from './component/Header';
import AuthProviders from './Providers/AuthProviders';
import Orders from './component/Orders';
import PriveteRoute from './routes/PriveteRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/header",
        element:<Header></Header>,
      },
      {
        path: "/register",
        element:<Register></Register>,
      },
      {
        path: "/orders",
        element:<PriveteRoute><Orders></Orders></PriveteRoute>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
