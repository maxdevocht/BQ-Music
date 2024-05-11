import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Work from './components/Work'
import Reviews from './components/Reviews'
import Artiesten from './components/Artiesten'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Work />
      <Reviews />
      <Artiesten />
      <Footer />
      <Sidebar />
    </>
  )
}

export default App
