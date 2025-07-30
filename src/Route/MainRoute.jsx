import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../component/Home'
import { CategoryProduk } from '../component/CategoryProduk'
import { ContactUs } from '../component/ContactUs'
import { Login } from '../component/Login'

export const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Category_Produk' element={<CategoryProduk/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Login' element={<Login/>}/>
    </Routes>
  )
}
