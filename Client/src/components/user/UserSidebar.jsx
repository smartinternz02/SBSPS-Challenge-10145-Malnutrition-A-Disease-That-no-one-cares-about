'use client';
import React, { useState } from 'react'

import { Link } from 'react-router-dom';

const UserSidebar = () => {
  const [selectedButton, setSelectedButton] = useState(2);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    
     <div  className='mt-14 z-20 pt-2 fixed mr bg-gray-300 w-full'>
     <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
     <li class="mr-2">
          <Link to="Profile" ><button class={`inline-block p-4 rounded-t-lg ${selectedButton === 1 ? 'text-gray-600 bg-gray-50' : ''}  hover:text-gray-600 hover:bg-gray-50`} onClick={() => handleButtonClick(1)} >Profile</button></Link>
        </li>
        <li class="mr-2">
          <Link to="Dashboard" ><button class={`inline-block p-4 rounded-t-lg ${selectedButton === 2 ? 'text-gray-600 bg-gray-50' : ''}  hover:text-gray-600 hover:bg-gray-50`} onClick={() => handleButtonClick(2)} >Dashboard</button></Link>
        </li>
        <li class="mr-2">
          <Link to="Calculator" ><button class={`inline-block p-4 rounded-t-lg ${selectedButton === 3 ? 'text-gray-600 bg-gray-50' : ''}  hover:text-gray-600 hover:bg-gray-50`} onClick={() => handleButtonClick(3)} >BMI Calculator</button></Link>
        </li>
        <li class="mr-2">
          <Link to="PersonalTracking" ><button class={`inline-block p-4 rounded-t-lg ${selectedButton === 4 ? 'text-gray-600 bg-gray-50' : ''}  hover:text-gray-600 hover:bg-gray-50`} onClick={() => handleButtonClick(4)} >Personal Tracking</button></Link>
        </li>
        <li class="mr-2">
          <Link to="Views" ><button class={`inline-block p-4 rounded-t-lg ${selectedButton === 5 ? 'text-gray-600 bg-gray-50' : ''}  hover:text-gray-600 hover:bg-gray-50`} onClick={() => handleButtonClick(5)} >Views</button></Link>
        </li>      
  </ul>
   </div>
  )
}

export default UserSidebar