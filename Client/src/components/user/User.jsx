'use client';
import React from 'react'

import { Routes, Route } from 'react-router'
import UserDash from './UserDash'
import UserExtra from './UserExtra'

import UserViews from './UserViews';
import UserProfile from './UserProfile'

import UserSignup from './UserSignup'
import UserSidebar from './UserSidebar';
import UserTrack from './UserTrack';
const User = () => {

  return (
    <div>

      <div>
        <div><UserSidebar /></div>
        <div className='pt-[115px]'></div>
        <Routes>
          <Route index element={<UserDash />} />
          <Route path="Dashboard" element={<UserDash />} />
          <Route path="Views" element={<UserViews />} />
          <Route path="Calculator" element={<UserExtra />} />
          <Route path="Profile" element={<UserProfile />} />
          <Route path="PersonalTracking" element={<UserTrack/>} />
        </Routes>

      </div>

    </div>

  )
}

export default User