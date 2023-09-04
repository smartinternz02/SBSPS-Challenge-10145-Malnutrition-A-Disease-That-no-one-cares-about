

import React, { useState, useEffect } from 'react';
import banner from '../../images/banner2.jpg'
const FoodRecommendationsSection = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [bmi, setBMI] = useState(0);
  const [showRecommendations, setShowRecommendations] = useState(false);
  useEffect(() => {
    setSelectedScenario(scenarios[4]);
  },[])
  const scenarios = [
    {
      name: 'Underweight',
      description: 'You are underweight and need to gain healthy weight.',
      recommendations: [
        'Include calorie-dense foods such as nuts, avocados, and olive oil.',
        'Consume lean proteins like chicken, fish, and legumes.',
        'Incorporate whole grains like quinoa, brown rice, and whole wheat bread.',
        'Engage in strength training exercises to build muscle mass.',
      ],
    },
    {
      name: 'Normal Weight',
      description: 'Your weight is within a healthy range.',
      recommendations: [
        'Maintain a balanced diet with a variety of fruits and vegetables.',
        'Include lean proteins, whole grains, and healthy fats.',
        'Limit processed foods and added sugars.',
        'Stay physically active with regular aerobic exercises.',
      ],
    },
    {
      name: 'Overweight',
      description: 'You are overweight and need to manage your weight.',
      recommendations: [
        'Focus on portion control to reduce calorie intake.',
        'Choose low-calorie, nutrient-dense foods like leafy greens and lean proteins.',
        'Engage in regular physical activity, including both aerobic and strength exercises.',
        'Consider consulting a dietitian for personalized meal planning.',
      ],
    },
    {
      name: 'Obese',
      description: 'You are obese and need to lose weight for health reasons.',
      recommendations: [
        'Consult a healthcare professional for personalized guidance.',
        'Emphasize whole, unprocessed foods.',
        'Incorporate regular exercise, including cardio and strength training.',
        'Consider behavioral therapy or weight loss programs for support.',
      ],
    },
    {
      name : 'Calculate your BMI',
      description : "Know your status",
      recommendations : [
        
      ]
    }
  ];

  useEffect(() => {
    // Calculate the BMI-based scenario when BMI changes
    if(bmi === 0){
      setSelectedScenario(scenarios[4]);
    } else if (bmi < 18.5) {
      setSelectedScenario(scenarios[0]); // Underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      setSelectedScenario(scenarios[1]); // Normal Weight
    } else if (bmi >= 25 && bmi < 30) {
      setSelectedScenario(scenarios[2]); // Overweight
    } else if(bmi >30) {
      setSelectedScenario(scenarios[3]); // Obese
    } if(bmi === 0){
      setSelectedScenario(scenarios[4]);
    }
  }, [bmi, scenarios]);

  // Function to calculate BMI
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBMI(calculatedBMI.toFixed(2));
      setShowRecommendations(true); // Show recommendations after calculation
    }
  };

  // State for age, weight, and height
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  return (
    <div className=' w-auto  bg-center  bg-cover relative' >

    <img src={banner} alt=""  className='w-full z-10 opacity-10  h-full object-cover  absolute'/>
    <div className='bg-gray-200'>

    
    <div className=" h-[500px]  z-20  flex flex-row justify-center   px-5 rounded-lg shadow-md">
      <div className='w-1/3  z-20 flex flex-col justify-center items-center'>
        <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
        {/* BMI Calculator */}
        <div className="mb-4">
          <label htmlFor="age" className="block mb-1">
            Age:
          </label>
          <input
            type="number"
            id="age"
            className="w-full border rounded px-3 py-2"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="block mb-1">
            Weight (kg):
          </label>
          <input
            type="number"
            id="weight"
            className="w-full border rounded px-3 py-2"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="height" className="block mb-1">
            Height (cm):
          </label>
          <input
            type="number"
            id="height"
            className="w-full border rounded px-3 py-2"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>

        {/* Display BMI Result */}
        {bmi > 0 && (
          <div className="mt-4">
            <p className='font-bold text-lg'>Your BMI: {bmi}</p>
          </div>
        )}
      </div>
      <div className='w-2/5  z-20 flex flex-col justify-center items-center '>


        {/* Display selected scenario and recommendations */}
        {selectedScenario && (
          <div className=" ">
            <h3 className=" text-6xl p-3 font-extrabold flex flex-col  items-center">{selectedScenario.name}</h3>
            <p className=" font-bold mb-5 text-xl flex flex-col  items-center">{selectedScenario.description}</p>
            <ul className="list-disc list-inside text-lg pl-6">
              {selectedScenario.recommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default FoodRecommendationsSection;
