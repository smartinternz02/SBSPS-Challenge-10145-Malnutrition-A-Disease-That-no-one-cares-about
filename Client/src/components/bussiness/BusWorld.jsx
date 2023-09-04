import React from 'react'

const BusWorld = () => {
  return (
    <div className=' bg-gray-900  pt-16'>
      <h1 class=" pt-10 py-3 flex justify-center text-6xl font-bold text-white">Malnutrition- World Analytics</h1>
  <p class=" px-32 pb-2 pt-2 flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400"> Analysing malnutrition by utilising the power of data analytics</p>
      <iframe className='h-screen w-screen px-32 pt-12' src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FRough%2Bdashboard&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a3d54cd06_00000000" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
<h2 class=" pt-16 flex justify-center text-4xl font-bold text-white">Overview on World</h2>
      <p class=" px-32 pb-2 pt-2 flex justify-center  text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-400"> Top Countries which are affected by the different kinds of  malnutrition</p>
      <iframe className='h-screen w-screen px-32 mt-16 pb-32' src="https://us3.ca.analytics.ibm.com/bi/?perspective=story&amp;pathRef=.my_folders%2FWorld%2Bstory&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;sceneId=-2&amp;sceneTime=0" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
      <div class=" flex  flex-col items-center justify-center md:px-[250px] px-32  pb-32 font-light text-white">
            <h1 class="text-5xl  text-center mb-3 font-bold dark:text-white">Insights</h1>
            <p class="mb-3 text-base text-whit text-center md:text-lg dark:text-gray-400">The analytics clearly mentions the countries which are affeted by the malnutrition</p>
            <p className=" font-bold mb-2 text-xl flex flex-col pt-3  items-center">Key facts</p>
            <ul className="list-disc list-outside px-[100px] text-justify text-lg ">
              <li>  Around 45% of deaths among children under 5 years of age are linked to undernutrition.These mostly occur in low- and middle-income countries.</li>
              <li>   UNICEF estimates that nearly 195 million children are malnourished worldwide.</li>
              
              <li>  1.9 billion adults are overweight or obese, while 462 million are underweight.</li>
              <li>Globally in 2020, 149 million children under 5 were estimated to be stunted (too short for age),<br /> 45 million were estimated to be wasted (too thin for height), and 38.9 million were overweight or obese.</li>
            </ul>
            <p className=" font-bold mb-2 mt-4 text-xl flex flex-col  items-center">Causes and Factors:</p>
            <ul className="list-disc list-outside px-20 text-justify text-lg ">
              <li>Changing food patterns -  Food consumption patterns have changed substantially  over the past few decades</li>
              <li> Lack of sanitation and clean drinking water: Lack of potable water, poor sanitation, and dangerous hygiene practices increase vulnerability to infectious and water-borne diseases</li>
            </ul>
            <p className=" font-bold mb-2 text-xl flex flex-col pt-3  items-center">Overcoming Malnutrition</p>
            <ul className="list-disc list-outside  px-20 text-justify text-lg ">
              <li>  The company can develop the countires by producing their products in that countries</li>
              <li>Improving nutrition and health status by reducing rates of acute malnutrition in target countries</li>
            </ul>
            
          </div>
    </div>
  )
}

export default BusWorld