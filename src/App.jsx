import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Work from './components/Work'
import Reviews from './components/Reviews'
import Artiesten from './components/Artiesten'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Work />
      <Reviews />
      <Artiesten />
      <Footer />
    </>
  )
}

export default App
