import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../Components/NavBar.jsx'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar/>
    <ThemeProvider>
      <App/>
    </ThemeProvider>  
  </BrowserRouter>,
)