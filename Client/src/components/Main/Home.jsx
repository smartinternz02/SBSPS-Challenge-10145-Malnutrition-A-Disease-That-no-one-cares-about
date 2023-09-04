import React from 'react'
import banner from '../../images/banner1.jpg'

const Home = () => {
  return (
    <div id='Home' className='  h-[400px] md:h-[600px] bg-gray-900 w-auto bg-cover bg-center relative'>  
      <img src={banner} alt=""  className='w-full opacity-40  h-full object-cover  absolute'/>
      <h1 className=" mb-4 text-4xl font-extrabold leading-none tracking-tight pt-[150px] md:pt-[250px] text-slate-100 md:text-5xl lg:text-6xl dark:text-white text-center relative">We invest in the <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Envisioning Wellness</span></h1>
      <p class=" relative text-lg font-normal text-center text-slate-100 lg:text-xl dark:text-gray-400">Visualizing the Healthier world</p>

    </div>
  )
}

export default Home