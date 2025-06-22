import React from 'react'
import { Route, Routes } from 'react-router'
import Layouts from './Pages/Layouts'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layouts/>}></Route>
    </Routes>
  )
}
