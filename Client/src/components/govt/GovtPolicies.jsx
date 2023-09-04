import React from 'react'

const GovtPolicies = () => {
  return (
    <div className='pt-16 bg-gray-900'>
      <h1 class="mb-4 flex justify-center pt-48 text-4xl font-extrabold leading-none tracking-tight  md:text-6xl lg:text-8xl text-white">Make India&#160; <span class="text-blue-600 dark:text-blue-500">  Nourished!</span> </h1>
      <p class="  pb-2 pt-2 flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400"> Analysing the statistics of malnutrition by utilising the power of data analytics </p>
      <p class="  pb-32  flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400">the Government can able to plan the Nourishment acts in India</p>
     
      <div className=''>
        <h2 class="text-4xl font-bold flex mt-14 justify-center text-white">Areas to Focus</h2>
        <p class="  pt-2 flex justify-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"> The Analytics show the percentage of people affected by Malnutrition across different states</p>
        <iframe className='h-[600px] w-screen  px-32 mt-14' src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FMalnutrition%2Bdashboard&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a473ba559_00000004" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>

        <h2 class="text-4xl font-bold flex mt-20 justify-center text-white">Top 5 States in different kinds of Malnutrition</h2>
        <p class="  py-3 mb-6 flex justify-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"> The Bar Graphs shows the top 5 states where the percentage of people affected by different kinds of Malnutrition </p>

        <iframe className='h-screen w-screen px-32 ' src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftop%2B5&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a469c8065_00000002" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>

        <h2 class="text-4xl font-bold flex mt-20 justify-center text-white">State Wide Malnutrition Analytics</h2>
        <p class="  py-3 mb-6 flex justify-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"> The Dot plot shows the percentage of people affected by different kinds of Malnutrition in the different age groups </p>

        <iframe className='h-screen w-screen px-32 mt-5' src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fdot&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a4642ab04_00000002" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <div class=" flex  flex-col items-center justify-center md:px-[250px] px-32 mt-24  pb-32 font-light text-white">
            <h1 class="text-5xl  text-center mb-3 font-bold dark:text-white">Insights</h1>
            <p class="mb-3 text-base text-whit text-center md:text-lg dark:text-gray-400">The analytics clearly mentions the countries affeted by the malnutrition</p>
            <p className=" font-bold mb-2 text-xl flex flex-col mt-4   items-center">Key Facts</p>
            <ul className="list-disc list-outside px-20  text-justify text-lg ">
              <li>As per the Food and Agricultural Organisation (FAO), 14.5% of India’s population is undernourished.</li>
              
              <li>Approximately 40% of children from Scheduled Caste, Scheduled Tribe, and Other Backward Classes are stunted.</li>
              <li>As per UNICEF report, 38% of children younger than 5 years of age in India are stunted.</li>
            </ul>
            <p className=" font-bold mb-2 text-xl flex flex-col mt-4   items-center">Causes and Factors:</p>
            <ul className="list-disc list-outside px-20  text-justify text-lg ">
              <li><span className=' font-semibold'>Changing food patterns - </span> Food consumption patterns have changed substantially  over the past few decades</li>
              
              <li><span className=' font-semibold'>Poverty:</span> Though poverty alone does not lead to malnutrition, it affects the availability of adequate amounts of nutritious food for the most vulnerable populations.</li>
              <li><span className=' font-semibold'>Lack of sanitation and clean drinking water:</span>  Lack of potable water, poor sanitation, and dangerous hygiene practices increase vulnerability to infectious and water-borne diseases</li>
            </ul>
            <p className=" font-bold mb-2 text-xl flex flex-col pt-3 justify-center items-center">Existing Policies</p>
            <ul className="list-disc list-outside px-20 text-justify  text-lg ">
              <li><span className=' font-semibold'> POSHAN Abhiyaan:</span>  The government of India has launched the National Nutrition Mission (NNM) or POSHAN Abhiyaan to ensure a “Malnutrition Free India” by 2022.</li>
              <li><span className=' font-semibold'>Mid-day Meal (MDM) scheme:</span>   It aims to improve nutritional levels among school children which also has a direct and positive impact on enrolment, retention and attendance in schools.</li>
              <li><span className=' font-semibold'>Pradhan Mantri Matru Vandana Yojana (PMMVY):</span>   Rs.6,000 is transferred directly to the bank accounts of pregnant women for availing better facilities for their delivery.</li>
              <li><span className=' font-semibold'>Anemia Mukt Bharat Abhiyan:</span> Launched in 2018, the mission aims at accelerating the annual rate of decline of anaemia from one to three percentage points.</li>
            </ul>
           
            <p className=" font-bold mb-2  text-xl flex flex-col mt-4  items-center">Overcoming Malnutrition</p>
            <ul className="list-disc list-outside px-20 text-justify text-lg ">
              <li>  The company can develop the countires by producing their products in that countries</li>
              <li>Improving nutrition and health status by reducing rates of acute malnutrition in target communities</li>
              <li>Integrated nutrition policy can be brought by harmonization of efforts across ministries, political will and good governance.</li>
              <li>Decentralisation: Panchayats should be allowed to have a bigger say in running welfare schemes.</li>
            </ul>
            
          </div>

      </div></div>
  )
}

export default GovtPolicies