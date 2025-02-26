import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import AboutMe from './components/Aboutme/AboutMe'
import Technologies from './components/Techonologies/Technologies'
import Education from './components/Education/Education'
import MyProject from './components/MyProject/MyProject'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe/>
      <Technologies />
      <Education />
      <MyProject />
      <Contact />
    </div>
  )
}

export default App