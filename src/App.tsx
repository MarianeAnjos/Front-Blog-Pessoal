import { useState } from 'react'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import './App.css'
import { Grid } from '@material-ui/core'; 
import Home from './paginas/home/Home'

function App(){
  return(
    <>
    <Navbar />
    <Home/>
    <Footer/>
    </>
  )
}

export default App
