import React from 'react'
import person from '../../images/person2.jpg'
import bussiness from '../../images/bussiness1.jpg'
import { Card } from 'flowbite-react'
import Signin from '../Signin'
import { Route, Routes } from 'react-router';

import { Link } from 'react-router-dom'
const Services = () => {
    return (


        <>


            <div id='Services' className=' bg-gray-100 bg-opacity-80 p-5'>
                <h2 class="my-4 text-center text-3xl font-bold">Our Services</h2>
                <p class="mb-3 pb-3 text-gray-500 text-center dark:text-gray-400"> Visualize growth opportunities with tailored analytics.  Make impactful choices with confidence.</p>
                <div className='flex flex-col  md:flex-row justify-center  mt-5 mb-5'>

                    <Link to = {(window.sessionStorage.getItem('email') === null) ? "/Signin" : "/User/Dashboard"}>
                        <div className='px-4 py-6 md:py-0 md:px-10'>
                            <Card
                                className="  bg-slate-300  max-w-md "

                            >
                                <img src={person} alt="image" />
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p className=' text-center'>
                                        Personal Statistics
                                    </p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <p className=' text-center'>
                                    Your Personal Malnutrition Metrics: We use unique identifiers, clear visuals for easy tracking, customizable views, educational insights about the Malnutrition.
                                    </p>
                                </p>
                            </Card>
                        </div>
                    </Link>
                    <Link to="/Business/Dashboard">
                        <div className=' px-4 py-6 md:py-0 md:px-10 '>

                            <Card
                                className="bg-slate-300 max-w-md"

                            >
                                <img src={bussiness} alt="image" />
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p className=' text-center'>
                                        Business Statistics
                                    </p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <p className=' text-center'>
                                    Business Insights: Gain valuable perspectives for  customized views.Our analytics offer clear visualizations  to make impactful choices with confidence.
                                    </p>
                                </p>
                            </Card>

                        </div>
                    </Link>
                </div>



            </div>
            <Routes>
                <Route path="/Signin" element={<Signin />} />
            </Routes>
        </>

    )
}

export default Services