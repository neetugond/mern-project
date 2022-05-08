import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/about' element={<About></About>}>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}>
        </Route>
        <Route path='/login' element={<Login></Login>}>
        </Route>
        <Route path='/signup' element={<Signup></Signup>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App