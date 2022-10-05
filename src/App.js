import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Form from './components/Formulario/Form';
import Home from './components/Navbar/Home';


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<div className='Navbar'>
            <Home />
          </div>}>  </Route>
          <Route path='/menu' element={<div className='container'>
            <Form />
          </div>}> </Route>
          <Route path='/menu' element={<div className='container'>
            <Form />
          </div>}></Route>
          <Route path='/menu' element={<div className='container'>
            <Form />
          </div>}></Route>
          <Route path='/menu' element={<div className='container'>
            <Form />
          </div>}></Route>



        </Routes>



      </BrowserRouter>
    </>
  );
}


export default App