import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Cart } from './component/Cart';
import { Home } from './component/Home';
import { Login } from './component/Login';
import { Navbar } from './component/Navbar';
import { ProductDetails } from './component/ProductDetails';
import { Register } from './component/Register';

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/singleproduct' element={<ProductDetails/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />




        </Routes>
      </BrowserRouter>
    </>
 
  )
}

export default App;