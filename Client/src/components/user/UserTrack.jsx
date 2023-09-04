import { Tabs } from 'flowbite-react';
import path from '../../link';
import React, { useEffect, useState } from 'react'
import banner from '../../images/bannerfood1.jpg'
const UserTrack = () => {
    const [user, setUser] = useState({});
    useEffect(()=> { fetchUserDetails()},[])

    let height, weight, tempBMI;
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

        height = user.height / 100;
        weight = user.weight;

        tempBMI = (weight) / (height*height);
        console.log("hi "+tempBMI)
        setBmi(Math.floor(tempBMI));
  
      } catch (err) {
        console.log(err);
      }
    };





    const [currentValue,setCurrentValue] = useState(1);
    const [bmi, setBmi] = useState(tempBMI);
    const [elementToRender, setElementToRender] = useState(null);
    // let elementToRender=<></>;
    useEffect(()=> {changeelement()},[currentValue])
const handleSubmit = async (e) => {
    e.preventDefault();
    if(bmi < 18.5)
        setCurrentValue(1);
    else if(bmi<26 && bmi>18.5 )
        setCurrentValue(3);
    else if(bmi>25)
        setCurrentValue(2);
    
}

const changeelement = () => {
    if (currentValue === 1) setElementToRender(<div>
        <p className='flex justify-center font-bold text-2xl pt-8 '>Weekly plan for Under Weight</p>
        <div className='flex z-20 h-[420px] justify-center w-screen pt-4 '> 
            <Tabs.Group  id="underweight" className='bg-gray-300   p-2 rounded-lg'
                aria-label="Pills"
                style="pills"
            >
                <Tabs.Item
                    active
                    title="Week 1-2"
                >
                    <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Building a Foundation</h5>
                        <h6 class="text-lg px-4 pt-2 font-semibold dark:text-white">Focus on gradually increasing your calorie intake while prioritizing nutrient-dense foods:</h6>
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>  Greek yogurt with berries and honey. <br />
                        <span className='font-semibold'>Mid-morning snack:</span> A handful of almonds or mixed nuts. <br />
                        <span className='font-semibold'> Lunch:</span>  Grilled chicken or tofu salad with lots of veggies. <br />
                        <span className='font-semibold'>Afternoon snack:</span>   Carrot and celery sticks with hummus. <br />
                        <span className='font-semibold'>Evening snack:</span>   A piece of fruit or a small smoothie.<br />
                        <span className='font-semibold'>Dinner:</span>   Baked salmon or a veggie stir-fry with brown rice.</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="week 3-4">
                <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Increasing Portions</h5>
                        <h6 class="text-lg px-4 pt-2 font-semibold dark:text-white">Continue to increase your calorie intake by increasing portion sizes:</h6>
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>  Oatmeal with banana slices and peanut butter. <br />
                        <span className='font-semibold'>Mid-morning snack:</span> Whole-grain crackers with cheese.<br />
                        <span className='font-semibold'> Lunch:</span>   Quinoa and black bean bowl with avocado and salsa<br />
                        <span className='font-semibold'>Afternoon snack:</span>  A cup of yogurt with granola. <br />
                        <span className='font-semibold'>Evening snack:</span>  A small serving of ice cream or a nutrient-dense smoothie with added protein.<br />
                        <span className='font-semibold'>Dinner:</span>   Lean beef or plant-based protein with sweet potatoes and broccoli.</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="week 5-6">
                <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Calorie-Dense Additions</h5>
                        <h6 class="text-lg px-4 pt-2 font-semibold dark:text-white">Incorporate more calorie-dense foods to further increase your daily intake:</h6>
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>  Scrambled eggs with cheese, spinach, and whole-grain toast.<br />
                        <span className='font-semibold'>Mid-morning snack:</span> Trail mix with dried fruits and nuts. <br />
                        <span className='font-semibold'> Lunch:</span>  Whole-grain pasta with a rich tomato sauce and lean protein (chicken, turkey, or lentils). <br />
                        <span className='font-semibold'>Afternoon snack:</span>    Nut butter (peanut or almond) on whole-grain bread. <br />
                        <span className='font-semibold'>Evening snack:</span>  A small serving of dark chocolate or a protein-packed milkshake.<br />
                        <span className='font-semibold'>Dinner:</span>   Grilled shrimp or a plant-based protein source with quinoa and asparagus.</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="week 7-8">
                <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Fine-Tuning and Monitoring</h5>
                        <h6 class="text-lg px-4 pt-2 font-semibold dark:text-white">Focus on gradually increasing your calorie intake while prioritizing nutrient-dense foods:</h6>
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800">Continue to adjust your portion sizes and food choices as needed. Regularly monitor your weight and consult with a healthcare professional or dietitian to ensure your progress is healthy and sustainable. <br /> <br /> Remember that while increasing calorie intake is essential, focus on nutrient-dense foods that provide essential vitamins and minerals for overall health. Staying hydrated is also crucial. Gradual weight gain is generally safer and more sustainable, so be patient with the process.</p>
                    </div>
                </Tabs.Item>
            </Tabs.Group>  
        </div>
        </div>)
        else if (currentValue === 2) setElementToRender(<div>
            <p className='flex justify-center font-bold text-2xl pt-8 '>Weekly plan for Over Weight</p>
        <div className='flex z-20 h-[420px] justify-center w-screen pt-8 '>
            <Tabs.Group id="overweight" className='bg-gray-300 p-2 rounded-lg'
                aria-label="Pills"
                style="pills"
            >
                <Tabs.Item
                    active
                    title="Week 1-2"
                >
                    <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Establishing Healthy Habits</h5>
                        <h6 class="text-lg px-4 pt-2 font-semibold dark:text-white">Start by making gradual changes to your diet and lifestyle to create a foundation for long-term weight management:</h6>
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>   Greek yogurt with fresh berries and a sprinkle of granola. <br />
                        <span className='font-semibold'>Mid-morning snack:</span> A piece of fruit or a handful of raw nuts. <br />
                        <span className='font-semibold'> Lunch:</span>  Grilled chicken or a plant-based protein source with a large salad. <br />
                        <span className='font-semibold'>Afternoon snack:</span>   Carrot and celery sticks with hummus. <br />
                        <span className='font-semibold'>Evening snack:</span>  : A small serving of low-fat cottage cheese or a cup of herbal tea.<br />
                        <span className='font-semibold'>Dinner:</span>   Baked fish or a vegetarian stir-fry with plenty of vegetables.</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="week 3-4">
                <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Portion Control</h5>
                        <h6 class="text-lg px-4 pt-2 font-semibold dark:text-white">Focus on controlling portion sizes while still enjoying a variety of nutritious foods:</h6>
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span> Scrambled eggs with spinach and whole-grain toast. <br />
                        <span className='font-semibold'>Mid-morning snack:</span>Greek yogurt with honey and a few almonds.<br />
                        <span className='font-semibold'> Lunch:</span>   Whole-grain wrap with lean protein (turkey, tofu, or beans) and lots of veggies.<br />
                        <span className='font-semibold'>Afternoon snack:</span> A small serving of low-fat cheese with whole-grain crackers. <br />
                        <span className='font-semibold'>Evening snack:</span> Sliced vegetables with a light dip or a small piece of dark chocolate.<br />
                        <span className='font-semibold'>Dinner:</span>   Grilled lean meat or a plant-based protein source with quinoa and steamed broccoli.</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="week 5-6">
                <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Reducing Calories
</h5>
                        <h6 class="text-lg px-4 pt-2 font-semibold dark:text-white">Gradually reduce calorie intake by making healthier substitutions and being mindful of portion sizes:</h6>
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>  A smoothie with spinach, banana, and protein powder.<br />
                        <span className='font-semibold'>Mid-morning snack:</span> A handful of mixed nuts or seeds. <br />
                        <span className='font-semibold'> Lunch:</span>  A large salad with lean protein and vinaigrette dressing.<br />
                        <span className='font-semibold'>Afternoon snack:</span>     A piece of fruit or a low-calorie, protein-rich snack. <br />
                        <span className='font-semibold'>Evening snack:</span>  Herbal tea or a small serving of low-calorie yogurt.<br />
                        <span className='font-semibold'>Dinner:</span>    Grilled seafood or a plant-based protein source with roasted sweet potatoes and asparagus.</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="week 7-8">
                <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Review and Adjust</h5>
                        <h6 class="text-lg px-4 pt-2 font-semibold dark:text-white">Focus on gradually increasing your calorie intake while prioritizing nutrient-dense foods:</h6>
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800">Review your progress and consult with a healthcare professional or dietitian. They can help you fine-tune your calorie intake and make further adjustments based on your weight loss goals. <br /> <br /> Remember that gradual, sustainable weight loss is key to long-term success. It's important to prioritize nutrient-dense foods, stay hydrated, and engage in regular physical activity as part of your overall weight management plan. Your healthcare provider can provide personalized guidance to help you achieve your weight loss goals safely and effectively</p>
                    </div>
                </Tabs.Item>
            </Tabs.Group>
        </div></div> )
         else if (currentValue === 3) setElementToRender(<div>
        <p className='flex justify-center font-bold text-2xl pt-8 '>Weekly plan for Normal Weight</p>
         <div className='flex z-20 h-[420px] justify-center w-screen pt-8 '>  
            <Tabs.Group id="normal" className='bg-gray-300  p-2 rounded-lg'
                aria-label="Pills"
                style="pills"
            >
                <Tabs.Item
                    active
                    title="Day 1"
                >
                    <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Monday</h5>
                        
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>  Greek yogurt with honey and mixed berries <br />
                        <span className='font-semibold'>Mid-morning snack:</span> A piece of fruit or a handful of raw nuts. <br />
                        <span className='font-semibold'> Lunch:</span>  Grilled chicken Caesar salad with plenty of leafy greens <br />
                        <span className='font-semibold'>Afternoon snack:</span>   Sliced cucumber and carrot sticks with hummus <br />
                        <span className='font-semibold'>Evening snack:</span>  : A small serving of low-fat cottage cheese or a cup of herbal tea.<br />
                        <span className='font-semibold'>Dinner:</span>   Baked salmon with asparagus and quinoa</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Day 2">
                <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Tuesday</h5>
                        
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span> Oatmeal topped with sliced bananas and a sprinkle of almonds <br />
                        <span className='font-semibold'>Mid-morning snack:</span>Greek yogurt with honey and a few almonds.<br />
                        <span className='font-semibold'> Lunch:</span>    Lentil and vegetable soup with a side of whole grain roll<br />
                        <span className='font-semibold'>Afternoon snack:</span> A small handful of mixed nuts <br />
                        <span className='font-semibold'>Evening snack:</span> Sliced vegetables with a light dip or a small piece of dark chocolate.<br />
                        <span className='font-semibold'>Dinner:</span>    Stir-fried tofu with broccoli, bell peppers, and brown rice</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Day 3">
                <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Wednesday</h5>
                       
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>  A Scrambled eggs with spinach and tomatoes, whole grain toast<br />
                        <span className='font-semibold'>Mid-morning snack:</span> A handful of mixed nuts or seeds. <br />
                        <span className='font-semibold'> Lunch:</span> Turkey and avocado wrap with a side of mixed greens<br />
                        <span className='font-semibold'>Afternoon snack:</span>     A piece of fruit or a low-calorie, protein-rich snack. <br />
                        <span className='font-semibold'>Evening snack:</span>  Herbal tea or a small serving of low-calorie yogurt.<br />
                        <span className='font-semibold'>Dinner:</span>     Grilled shrimp skewers with roasted zucchini and quinoa salad</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item
                    active
                    title="Day 4"
                >
                   <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Thursday</h5>
                        
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>     Whole grain cereal with skim milk or a milk substitute<br />
                        <span className='font-semibold'>Mid-morning snack:</span> A piece of fruit or a handful of raw nuts. <br />
                        <span className='font-semibold'> Lunch:</span>   Quinoa salad with chickpeas, diced cucumbers, and feta cheese <br />
                        <span className='font-semibold'>Afternoon snack:</span>   Carrot and celery sticks with hummus. <br />
                        <span className='font-semibold'>Evening snack:</span>  : A small serving of low-fat cottage cheese or a cup of herbal tea.<br />
                        <span className='font-semibold'>Dinner:</span>   Grilled chicken breast with steamed broccoli and brown rice</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item
                    active
                    title="Day 5"
                >
                    <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Friday</h5>
                        
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>    Whole wheat pancakes with fresh berries and a drizzle of maple syrup<br />
                        <span className='font-semibold'>Mid-morning snack:</span> A piece of fruit or a handful of raw nuts. <br />
                        <span className='font-semibold'> Lunch:</span>  Spinach and feta stuffed chicken breast with a side of roasted sweet potatoes. <br />
                        <span className='font-semibold'>Afternoon snack:</span>   Carrot and celery sticks with hummus. <br />
                        <span className='font-semibold'>Evening snack:</span>  : A small serving of low-fat cottage cheese or a cup of herbal tea.<br />
                        <span className='font-semibold'>Dinner:</span>   Baked cod with a side of quinoa and sautéed spinach</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item
                    active
                    title="Day 6"
                >
                    <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Saturday</h5>
                        
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>  Smoothie with spinach, banana, almond milk, and a scoop of protein powder<br />
                        <span className='font-semibold'>Mid-morning snack:</span> A piece of fruit or a handful of raw nuts. <br />
                        <span className='font-semibold'> Lunch:</span>  Tuna salad with mixed greens and whole grain crackers <br />
                        <span className='font-semibold'>Afternoon snack:</span>   Carrot and celery sticks with hummus. <br />
                        <span className='font-semibold'>Evening snack:</span>  : A small serving of low-fat cottage cheese or a cup of herbal tea.<br />
                        <span className='font-semibold'>Dinner:</span>   Beef stir-fry with broccoli, carrots, and brown rice</p>
                    </div>
                </Tabs.Item>
                <Tabs.Item
                    active
                    title="Day 7"
                >
                    <div className='w-[800px] '>
                        <h5 class="text-2xl px-4 pb-1 font-bold dark:text-white">Sunday</h5>
                        
                        <p class="mb-3 pt-4 px-4 text-gray-800 dark:text-gray-800"><span className='font-semibold'>Breakfast:</span>   Whole grain waffles with yogurt and sliced peaches <br />
                        <span className='font-semibold'>Mid-morning snack:</span> A piece of fruit or a handful of raw nuts. <br />
                        <span className='font-semibold'> Lunch:</span>  Caprese salad with tomatoes, fresh mozzarella, and basil, drizzled with balsamic vinegar <br />
                        <span className='font-semibold'>Afternoon snack:</span>   Carrot and celery sticks with hummus. <br />
                        <span className='font-semibold'>Evening snack:</span>  : A small serving of low-fat cottage cheese or a cup of herbal tea.<br />
                        <span className='font-semibold'>Dinner:</span>   Grilled vegetable and quinoa-stuffed bell peppers</p>
                    </div>
                </Tabs.Item>
            </Tabs.Group>
        </div></div>)
}
    return (
        window.sessionStorage.getItem('email') !== null ? <div className='bg-center bg-gray-400 bg-opacity-20 bg-cover pb-12 relative' >
            <img src={banner} alt=""  className='w-full -z-10 opacity-20 h-full object-cover  absolute'/>
            <form  className='flex  flex-col items-center justify-center pt-10' onSubmit={handleSubmit}>
                <label className='text-lg text-gray-700 font-bold'>The perfect weekly plan to be healthy according to the BMI</label>
                <div className='flex flex-row items-center '>
                <label className='text-lg mt-5 font-semibold pr-2'>BMI : </label>
                <input class="bg-gray-50 mt-5 mx-2 border w-24 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block text-center p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 font-semibold dark:focus:border-blue-500" type='number' value={bmi} onChange={(e) => setBmi(e.target.value)}/>
                <button
                  type="submit"
                  class="w-max mt-5 bg-slate-600 text-white bg-primary-600 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                  Submit</button>
                  </div>
            </form>
           {elementToRender}
        </div> : window.location.href = "/SignIn"
    )
}

export default UserTrack