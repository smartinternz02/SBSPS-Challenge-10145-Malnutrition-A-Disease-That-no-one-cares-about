import React from 'react'
import pic1 from '../../images/views1.jpg'
import pic2 from '../../images/views2.jpg'
import pic3 from '../../images/views3.jpg'            
import pic4 from '../../images/views4.jpg'
const UserViews = () => {
  return (
    (window.sessionStorage.getItem('email') !== null) ? (<div >
      <section class="bg-white dark:bg-gray-900 mt-8 p-8">
        <div class=" flex flex-row justify-between items-center py-8 px-3 mx-auto max-w-screen-xl h-[500px] ">
          <div class="w-2/3 flex flex-col items-center justify-center px-10 pr-10 font-light text-gray-800 sm:text-lg dark:text-gray-400">
            <h1 class="text-5xl  text-center mb-3 font-bold dark:text-white">Undernutrition</h1>
            <p class="mb-3 text-base text-gray-800 text-center md:text-lg dark:text-gray-400">Undernutrition includes conditions like underweight, stunting (low height-for-age), wasting (low weight-for-height), and micronutrient deficiencies. The primary goal is to increase nutrient intake to promote healthy growth and development.</p>
            <p className=" font-bold mb-2 text-xl flex flex-col  items-center">Causes and Factors:</p>
            <ul className="list-disc list-inside px-20  text-lg ">
              <li><span className=' font-semibold'>Nutrient Deficiencies:</span> Insufficient Intake of Vital Nutrients</li>
              <li><span className=' font-semibold'>Early-Life Importance:</span> Stunting's Long-Term Consequences</li>
            </ul>
            <p className=" font-bold mb-2 text-xl flex flex-col pt-3  items-center">Addressing Stunting:</p>
            <ul className="list-disc list-inside px-20  text-lg ">
              <li><span className=' font-semibold'>Timely Interventions:</span>  Improving Nutrition during Critical Growth Phases
              </li>
              <li><span className=' font-semibold'>Multi-Sectoral Approach:</span> Combating Stunting from Different Angles</li>
            </ul>
          </div>
          <div class=" w-1/3  mt-8">
            <img class="w-full p-12 rounded-lg" src={pic1} alt="office content 1" />

          </div>
        </div>
      </section>
      <section class="bg-gray-100 dark:bg-gray-900 mt-8 p-8">
        <div class=" flex flex-row justify-between items-center py-8 px-3 mx-auto max-w-screen-xl h-[500px] ">
          <div class=" w-1/3  mt-8">
            <img class="w-full p-12 rounded-lg" src={pic3} alt="office content 1" />

          </div>
          <div class="w-2/3 flex flex-col items-center justify-center px-10 pr-10 font-light text-gray-800 sm:text-lg dark:text-gray-400">
            <h1 class="text-5xl  text-center mb-3 font-bold dark:text-white">Overnutrition (Obesity)</h1>
            <p class="mb-3 text-base text-gray-800 text-center md:text-lg dark:text-gray-400">Overnutrition refers to excessive calorie intake leading to obesity. The goal is to achieve a healthier weight by balancing calorie intake and energy expenditure.
</p>
            <p className=" font-bold mb-2 text-xl flex flex-col  items-center">Causes and Factors:</p>
            <ul className="list-disc list-inside px-20  text-lg ">
              <li><span className=' font-semibold'>Food Shortages: </span>  Resulting in Rapid Weight Decline</li>
              <li><span className=' font-semibold'>Health Implications:</span> Vulnerability to Infections and Disease</li>
              

 
 
            </ul>
            <p className=" font-bold mb-2 text-xl flex flex-col pt-3  items-center">Treatment and Prevention:</p>
            <ul className="list-disc list-inside px-20  text-lg ">
              <li><span className=' font-semibold'>Therapeutic Feeding:</span>  Nutrient-Dense Diets for Rehabilitation
              </li>
              <li><span className=' font-semibold'>Focusing on Prevention:</span> Timely Access to Nutrition during Crises</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900 mt-8 p-8">
        <div class=" flex flex-row justify-between items-center py-8 px-3 mx-auto max-w-screen-xl h-[500px] ">
          <div class="w-2/3 flex flex-col items-center justify-center px-10 pr-10 font-light text-gray-800 sm:text-lg dark:text-gray-400">
            <h1 class="text-5xl  text-center mb-3 font-bold dark:text-white">Overweight</h1>
            <p class="mb-3 text-base text-gray-800 text-center md:text-lg dark:text-gray-400">Unraveling Overweight: Excess Body Weight and Health Implications <br />The Balance Dilemma: Weighing the Risks of Overnutrition</p>
            <p className=" font-bold mb-2 text-xl flex flex-col  items-center">Causes and Lifestyle Factors:</p>
            <ul className="list-disc list-inside px-20  text-lg ">
              <li><span className=' font-semibold'>Caloric Surplus:</span>Consuming More Calories Than the Body Needs</li>
              <li><span className=' font-semibold'>Sedentary Lifestyle:</span>Lack of Physical Activity and Weight Gain</li>
            </ul>
            <p className=" font-bold mb-2 text-xl flex flex-col pt-3  items-center">Treament and Prevention:</p>
            <ul className="list-disc list-inside px-20  text-lg ">
              <li><span className=' font-semibold'>Healthy Lifestyle Choices:</span>  Emphasizing Balanced Diets and Exercise
              </li>
              <li><span className=' font-semibold'>Addressing Childhood Overweight:</span>Promoting Healthy Habits Early On</li>
            </ul>
 
          </div>
          <div class=" w-1/3  mt-8">
            <img class="w-full p-12 rounded-lg" src={pic4} alt="office content 1" />

          </div>
        </div>
      </section>
      <section class="bg-gray-100 dark:bg-gray-900 mt-8 p-8">
        <div class=" flex flex-row justify-between items-center py-8 px-3 mx-auto max-w-screen-xl h-[500px] ">
          <div class=" w-1/3  mt-8">
            <img class="w-full p-12 rounded-lg" src={pic2} alt="office content 1" />

          </div>
          <div class="w-2/3 flex flex-col items-center justify-center px-10 pr-10 font-light text-gray-800 sm:text-lg dark:text-gray-400">
            <h1 class="text-5xl  text-center mb-3 font-bold dark:text-white">Underweight</h1>
            <p class="mb-3 text-base text-gray-800 text-center md:text-lg dark:text-gray-400">Underweight Explored: Insufficient Body Weight and Health Consequences <br />
Uncovering Vulnerabilities: Recognizing the Impact of Undernutrition</p>
            <p className=" font-bold mb-2 text-xl flex flex-col  items-center">Causes and Lifestyle Factors:</p>
            <ul className="list-disc list-inside px-20  text-lg ">
              <li><span className=' font-semibold'> Underweight Explored:</span>Insufficient Body Weight and Health Consequences</li>
              <li><span className=' font-semibold'>Uncovering Vulnerabilities:</span>Recognizing the Impact of Undernutrition</li>
            </ul>
            <p className=" font-bold mb-2 text-xl flex flex-col pt-3  items-center">Treament and Prevention:</p>
            <ul className="list-disc list-inside px-20  text-lg ">
              <li><span className=' font-semibold'>Balanced Nutrition:</span>  Providing Adequate Nutrients for Weight Gain
              </li>
              <li><span className=' font-semibold'>Holistic Approach:</span>Incorporating Healthcare, Education, and Support</li>
            </ul>
            
             
 

          </div>
        </div>
      </section>
    </div>) : window.location.href = "/SignIn"
  )
}

export default UserViews