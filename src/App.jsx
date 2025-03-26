import React from 'react'
import  { Routes, Route } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Form from './pages/Form'
import Details from './pages/details'
import Joblist from './pages/Joblist'




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/form" element={<Form/>}/>
       <Route path="/details" element={<Details/>}/>
       <Route path="/joblist" element={<Joblist/>}/>
       

      </Routes>
     
    </div>
  )
}

export default App