import React from 'react'

const BusDash = () => {
  return (
    <div className=' bg-gray-900 pt-16'>
      <h1 class="mb-4 flex justify-center pt-40 text-4xl font-extrabold leading-none tracking-tight  md:text-6xl lg:text-8xl text-white">Business Analytics </h1>
      <p class="  pb-2 pt-2 flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400"> Analysing the statistics of malnutrition by utilising the power of data analytics </p>
      <p class="  pb-32  flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400">the Government can able to plan the Nourishment acts in India</p>
     
      <h2 class=" pt-12 flex justify-center text-4xl font-bold text-white">Malnutrition in different age groups</h2>
      <p class=" px-32 pb-2 pt-2 flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400"> Underweight and Overweight is analysing across different age groups</p>
      <iframe className='h-screen w-screen px-32  pt-12' src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fage%2Bdashboard&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a474e4b85_00000002" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
      <h2 class=" pt-16 flex justify-center text-center text-4xl font-bold text-white"> World and India comparision</h2>
      <h2 class=" pt-2 flex justify-center text-center text-4xl font-bold text-white">Visualising the different kinds of Malnutrition </h2>
     {/*  <p class=" px-32 pb-2 pt-2 flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400"> By analysing the statistics of malnutrition by utilising the power of data analytics </p> */}
      <iframe className='h-[550px] w-screen px-32 mt-24 pb-16' src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbar%2Bgraph%2Bcomparision&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a424bec2a_00000001" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
      
    </div>
  )
}

export default BusDash