
import Footer from './components/Footer/Footer';
import './App.css';
import Header from './components/Header/Header';

import Signin from './components/Signin';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router';
import User from './components/user/User';
import Bus from './components/bussiness/Bus';
import UserSignup from './components/user/UserSignup';
import AboutUs from './components/Main/AboutUs';
import GovtPolicies from './components/govt/GovtPolicies';

import { useEffect } from 'react';
export default function App() {
 

  return (
    <div >
     
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/User/SignUp" element={<UserSignup />} />
        <Route path="/User/*" element={<User />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Business/*" element={<Bus />} />
        <Route path="/GovernmentPolicies" element={<GovtPolicies />} />
        <Route path="/*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  )
}




