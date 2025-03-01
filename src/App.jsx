import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import AboutMe from './components/Aboutme/AboutMe'
import Technologies from './components/Techonologies/Technologies'
import Education from './components/Education/Education'
import MyProject from './components/MyProject/MyProject'
import Contact from './components/contact/Contact'
import WorkExperience from './components/WorkExperience/Work_Experience'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe/>
      <Technologies />
      <Education />
      <MyProject />
      <WorkExperience />
      <Contact />
    </div>
  )
}

export default App