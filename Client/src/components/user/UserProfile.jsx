
import React, { useState, useEffect } from 'react';
import path from '../../link';
import sup from '../../images/login2.jpg'
function UserProfile() {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`${path}/profile`, {
        method: "POST",
        body: JSON.stringify({
          email: window.sessionStorage.getItem('email')
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

      });
      const data = await response.json();
      setUser(data);

    } catch (err) {
      console.log(err);
    }
  };

  const updateUserDetails = async () => {
    try {
      await fetch(`${path}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: window.sessionStorage.getItem('email'),
          email: email,
          name: name,
          age: age,
          height: height,
          weight: weight
        }),
      });
      fetchUserDetails();
      setEditing(false);
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    (window.sessionStorage.getItem('email') !== null) ? (<div>

      {editing ? (
        <div>
          <section class="bg-gray-500 bg-opacity-60  dark:bg-gray-900 bg-cover bg- bg-center relative">
            <img src={sup} alt="" className='w-full opacity-50  -z-10  h-full object-cover  absolute' />
            <div class="flex flex-col items-center justify-center px-6 py-1 mx-auto  h-screen md:h-[600px] ">

              <div class=" w-full bg-opacity-70 bg-slate-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                  <div class="space-y-4 md:space-y-6" >
                  
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="" />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@email.com"
                        required="" />
                    </div>
                    <div className='flex flex-row  justify-around '>
                      <div className='px-1  flex justify-center items-center flex-col'>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                        <input type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required="" />
                      </div>
                      <div className='px-1  flex justify-center items-center flex-col'>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height</label>
                        <input type="number"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required="" />
                      </div>
                      <div className='px-1  flex justify-center items-center flex-col'>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                        <input
                          type="number"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required="" />
                      </div>
                    </div>

                    <button

                      class="w-full bg-slate-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-dark:focus:ring-primary-800" onClick={updateUserDetails}>
                      update</button>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      ) : (
        /* showing */
        <section class="bg-black bg-opacity-80  dark:bg-gray-900 bg-cover bg- bg-center relative">
          <img src={sup} alt="" className='w-full opacity-70  -z-10  h-full object-cover  absolute' />
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  h-screen md:h-[600px]">

            <div class=" w-full bg-opacity-70 bg-slate-200 rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div>
                  <div class="space-y-4 md:space-y-6" >

                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <p
                        class="bg-gray-50 border border-gray-300 text-black font-bold  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >{user.name}&#160;</p>
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <p

                        class="bg-gray-50 border border-gray-300 text-black font-bold  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">&#160;{user.email}</p>
                    </div>
                    <div className='flex flex-row  justify-around '>
                      <div className='px-1 flex justify-center items-center flex-col'>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                        <p
                          class="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >{user.age}&#160;</p>
                      </div>
                      <div className='px-1 flex justify-center items-center flex-col'>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height</label>
                        <p
                          class="bg-gray-50 border border-gray-300 text-black font-bold  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w- p-2.5 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >{user.height}&#160;</p>
                      </div>
                      <div className='px-1 flex justify-center items-center flex-col'>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                        <p
                          class="bg-gray-50 border border-gray-300 text-black font-bold  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >{user.weight}&#160;</p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="w-full bg-slate-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-dark:focus:ring-primary-800"
                      onClick={() => {
                        setEditing(true);
                        setEmail(user.email);
                        setAge(user.age);
                        setWeight(user.weight);
                        setHeight(user.height);
                        setName(user.name);
                      }}>
                      Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>) : window.location.href = "/SignIn"
  );
}

export default UserProfile;