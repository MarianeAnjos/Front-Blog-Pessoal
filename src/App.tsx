import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import './App.css'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login';

function App(){
  return(
    <BrowserRouter>
      <Navbar/>
        <div>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
        </div>
      <Footer/>
  </BrowserRouter>

  )
}

export default App
