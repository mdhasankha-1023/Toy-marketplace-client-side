import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Routes/Route';
import AuthProvider from './AuthProvider/AuthProvider';
import 'react-tabs/style/react-tabs.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
