import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../component/Home'
import { CategoryProduk } from '../component/CategoryProduk'
import { ContactUs } from '../component/ContactUs'
import { Login } from '../component/Login'
import { Register } from '../component/Register'
import { LoginWithTelp } from '../component/LoginWithTelp'
import { Vertivikasi } from '../component/Vertivikasi'
import { LoginWithEmail } from '../component/LoginWithEmail'

export const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Category_Produk' element={<CategoryProduk/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/LoginWithTelp' element={<LoginWithTelp/>}/>
        <Route path='/LoginWithEmail' element={<LoginWithEmail/>}/>
        <Route path='/Vertivikasi' element={<Vertivikasi/>}/>
    </Routes>
  )
}
