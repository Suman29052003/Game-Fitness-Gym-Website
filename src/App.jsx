import React from 'react'
import Section1 from './sections/Section1'
import Navbar from './components/Navbar'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section5 from './sections/Section5'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </>
  )
}

export default App
