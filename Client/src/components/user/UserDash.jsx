import React from 'react'

const UserDash = () => {
  return (
    (window.sessionStorage.getItem('email') !== null) ? 
    <div className=' bg-black pt-16'>
       {/* <h1 class=" pt-10 py-3 flex justify-center text-6xl font-bold text-white">Business Analytics</h1> */}
      <h2 class=" pt-12 pb-10 flex justify-center text-4xl font-bold text-white">Ideal Height-Weight Analysis</h2>
      <p class=" px-32 pb-2 pt-2 flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400">  </p>
      <iframe className='h-[600px] w-screen px-32' src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FWeight%2Bvs%2BHeight%2Bdashboard&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a4764466c_00000002" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
      <h2 class=" pt-20 flex justify-center text-4xl font-bold text-white">Malnutrition in different age groups</h2>
    
      <iframe className='h-[800px] w-screen px-32 pb-32 pt-12' src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fage%2Bdashboard&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a474e4b85_00000002" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
    </div>
     : window.location.href = "/SignIn"
  )
}

export default UserDash