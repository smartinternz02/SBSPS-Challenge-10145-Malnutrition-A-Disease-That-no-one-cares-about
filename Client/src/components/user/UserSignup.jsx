// import React from 'react'
import sup from '../../images/sup5.jpg'
import { Route, Routes } from 'react-router';
import Signin from '../Signin';
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import path from '../../link';

const UserSignup = () => {

  //Validation starts
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [password, setPassword] = useState("");

  const makeSignUp = async (email, name, age, height, weight, password) => {
    try {
      const response = await fetch(`${path}/signup`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          name: name,
          age: age,
          height: height,
          weight: weight,
          password: password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

      })

      if (response.status === 200) {
        setEmail("");
        setAge("");
        setHeight("");
        setPassword("");
        setWeight("");
        setName("");
        // alert("Sign In succesful");
        window.location.href = "/Signin"
      }
      else if (response.status === 400) {
        setEmail("");
        setAge("");
        setHeight("");
        setPassword("");
        setWeight("");
        setName("");
        // alert("User already exists ");
        window.location.href = "/Signin"
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    makeSignUp(email, name, age, height, weight, password);
  }

  //Validation Ends

  return (
    <div>
      <section class="bg-gray-500 bg-opacity-60  dark:bg-gray-900 bg-cover bg- bg-center relative">
        <img src={sup} alt="" className='w-full opacity-50  -z-10  h-full object-cover  absolute' />
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div class=" w-full bg-opacity-70 bg-slate-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@email.com"
                    required="" />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="" />
                </div>
                <div className='flex flex-row  justify-around '>
                  <div className='px-1'>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                    <input type="text"
                      name="Age"
                      placeholder="(in years)"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required="" />
                  </div>
                  <div className='px-1'>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height</label>
                    <input type="text"
                      placeholder='(in cms)'
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required="" />
                  </div>
                  <div className='px-1'>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                    <input
                      type="text"
                      placeholder='(in kgs)'
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required="" />
                  </div>
                </div>

                {/* password */}
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="" />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  class="w-full bg-slate-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-dark:focus:ring-primary-800">
                  Create an account</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <Link to="/Signin" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default UserSignup