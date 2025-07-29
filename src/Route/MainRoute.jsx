import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../component/Home'

export const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}
