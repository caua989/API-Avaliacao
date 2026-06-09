import './App.css'
import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Equipe from './pages/Equipe'
import Extra from './Pages/Extra'
import Paginaapi from './Pages/Paginaapi'

function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Equipe" element={<Equipe />} />
      <Route path="/Extra" element={<Extra />} />
      <Route path="/Paginaapi" element={<Paginaapi />} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App