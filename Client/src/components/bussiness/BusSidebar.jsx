'use client';
import React, { useState } from 'react'

import { Link } from 'react-router-dom';

const BusSidebar = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (

    <div className='mt-14 z-10 pt-2 fixed  bg-gray-300 w-full'>
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {/* <li class="mr-2">
          <Link to="Profile"class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >Profile</Link>
      </li> */}
        <li class="mr-2">
          <Link to="Dashboard" ><button class={`inline-block p-4 rounded-t-lg ${selectedButton === 1 ? 'text-gray-600 bg-gray-50' : ''}  hover:text-gray-600 hover:bg-gray-50`} onClick={() => handleButtonClick(1)} >Dashboard</button></Link>
        </li>
        <li class="mr-2">
          <Link to="IndiaStatistics" ><button  class={`inline-block p-4 rounded-t-lg ${selectedButton === 2 ? 'text-gray-600 bg-gray-50' : ''}  hover:text-gray-600 hover:bg-gray-50`} onClick={() => handleButtonClick(2)} >India Analytics</button></Link>
        </li>
        <li class="mr-2">
          <Link to="WorldStatistics" ><button class={`inline-block p-4 rounded-t-lg ${selectedButton === 3 ? 'text-gray-600 bg-gray-50' : ''}  hover:text-gray-600 hover:bg-gray-50`} onClick={() => handleButtonClick(3
            )} >World Analytics</button></Link>
        </li>

      </ul>
    </div>
  )
}

export default BusSidebar