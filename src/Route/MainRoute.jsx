import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../component/Home'
import { CategoryProduk } from '../component/CategoryProduk'

export const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Category_Produk' element={<CategoryProduk/>}/>
    </Routes>
  )
}
