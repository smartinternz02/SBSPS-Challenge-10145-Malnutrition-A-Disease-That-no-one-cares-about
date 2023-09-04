import React from 'react'

const BusIndia = () => {
  return (
    <div className=' bg-gray-900  pt-16'>
      <h1 class=" pt-10 py-3 flex justify-center text-6xl font-bold text-white">Malnutrition - India Analytics</h1>
      <p class=" px-32 pb-2 pt-2 flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400"> Showing the statistics of malnutrition by utilising the power of data analytics </p>
      <iframe className='h-[600px] w-screen px-32 pt-12 ' src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FMalnutrition%2Bdashboard&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a473ba559_00000004" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
      <h2 class=" pt-16 flex justify-center text-4xl font-bold text-white">Malnutrition in different States </h2>
      <p class=" px-32 pb-2 pt-2 flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400">India faces both undernutrition (stunting, wasting, underweight) and overnutrition  </p>
      <iframe className='h-[900px] w-screen px-32 mt-16' src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FIndia%2BAnalysis&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a416cc29d_00000003" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
      <h2 class=" pt-16 flex justify-center text-4xl font-bold text-white">Overview on India </h2>
      <p class=" px-32 pb-2 pt-2 flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400"> Top states which are affected by the different kinds of  malnutrition </p>
      <iframe className='h-screen w-screen px-32 pb-32 mt-16' src="https://us3.ca.analytics.ibm.com/bi/?perspective=story&amp;pathRef=.my_folders%2FIndia%2Bstory&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;sceneId=-2&amp;sceneTime=0" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
      <div class=" flex  flex-col items-center justify-center md:px-[250px] px-32 pb-32 font-light text-white">
            <h1 class="text-5xl  text-center mb-3 font-bold dark:text-white">Insights</h1>
            <p class="mb-3 text-base text-whit text-center md:text-lg dark:text-gray-400">The analytics clearly mentions the states which are affeted by the malnutrition</p>
            <p className=" font-bold mb-2 text-xl flex flex-col pt-3  items-center">Key facts</p>
            <ul className="list-disc list-outside text-justify px-20  text-lg ">
              <li> As per the Food and Agricultural Organisation (FAO), 14.5% of India’s population is undernourished.</li>
              <li> As per UNICEF report, 38% of children younger than 5 years of age in India are stunted.</li>
              <li> Approximately 40% of children from Scheduled Caste, Scheduled Tribe, and Other Backward Classes are stunted.</li>
              <li>In the Global Hunger Index 2019 report, India is ranked abysmally low at 102nd position out of 117 countries.</li>
            </ul>
            <p className=" font-bold mb-2 mt-4 text-xl flex flex-col  items-center">Causes and Factors:</p>
            <ul className="list-disc list-outside px-20 text-justify text-lg ">
              <li><span className=' font-semibold'> Poverty –</span> It is the main reason behind the lack of adequate nutritional food which results in malnutrition.</li>
              <li><span className=' font-semibold'>Hygiene Issues –</span>  Lack of pure drinking water and poor sanitation leads to spread of diseases which lead to acute malnutrition.</li>
              <li> <span className=' font-semibold'>Implementation of Government policies –</span>  Need to make sure that Government policies are implemented very efficiently across the country.</li>
            </ul>
            <p className=" font-bold mb-2 text-xl mt-4 flex flex-col  items-center">Overcoming Malnutrition</p>
            <ul className="list-disc list-outside px-20 text-justify text-lg ">
              <li> Nutrient-Fortified Products: Develop and market affordable nutrient-rich foods, to improve access to vital vitamins and minerals.</li>
              <li>Establish distribution networks to reach rural and remote areas, making nutritious products available in underserved regions.</li>
              <li> Source ingredients locally, supporting local economies and contributing to food security.</li>
              
            </ul>
            
          </div>
    </div>
  )
}

export default BusIndia