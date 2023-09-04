import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../../images/gp5.png'
import pic2 from '../../images/gp3.png'
const Policies = () => {
  return (
    <div id='Policies' >
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src={pic1} alt="office content 2" />
            <img class="w-full rounded-lg" src={pic2} alt="office content 1" />
          </div>
          <div class=" flex flex-col  items-center justify-center font-light text-gray-800 sm:text-lg dark:text-gray-400">
            <h1 class="text-5xl  text-center mb-3 font-bold dark:text-white">Government Policies</h1>
            <p class="mb-3 text-base text-gray-800 text-center md:text-lg dark:text-gray-400">Government policies are essential tools in combating malnutrition. These policies encompass diverse approaches, including nutrition-specific interventions like supplementation and education, as well as broader strategies that integrate health, education, and social sectors. Food fortification with essential nutrients, public distribution systems for subsidized food, and school feeding programs contribute to improved nutrition access. Ultimately, well-crafted and evaluated policies are pivotal in addressing malnutrition and its underlying causes effectively. </p>
           <Link to="/GovernmentPolicies"> <button type="button" className="text-white mt-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View Analytics</button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Policies