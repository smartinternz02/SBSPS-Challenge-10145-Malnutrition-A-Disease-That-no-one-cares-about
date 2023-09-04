import React from 'react'
import Home from './Home';
import News from './News';
import About from './About'
import Policies from './Policies';
import Services from './Services'
const Main = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Services />
        <Policies/>
        <News/>
    </div>
  )
}

export default Main