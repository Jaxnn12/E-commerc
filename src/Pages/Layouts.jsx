import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'

export default function Layouts() {
  return (
    <section className='container mx-auto flex-col h-screen'>
     <Navbar/>
     <Footer/>
    </section>
  )
}
