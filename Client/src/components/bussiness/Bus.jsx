
'use client';
import React from 'react'
import { Routes, Route } from 'react-router'
import BusSidebar from './BusSidebar'
import BusIndia from './BusIndia'
import BusWorld from './BusWorld'
import BusDash from './BusDash'
const Bus = () => {

  return (
    <div>
      
      <div>
      <div><BusSidebar /></div>
        <div className='pt-[115px]'></div>
          <Routes>
            <Route index element={<BusDash />} />
            <Route path="IndiaStatistics" element={<BusIndia />} />
            <Route path="Dashboard" element={<BusDash />} />
            <Route path="WorldStatistics" element={<BusWorld />} />
          </Routes>
      </div>
    </div>
  )
}

export default Bus