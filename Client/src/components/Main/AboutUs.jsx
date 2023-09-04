import React from 'react'
import banner1 from '../../images/banner3.jpg'
import banner2 from '../../images/banner4.jpg'

const AboutUs = () => {
   
   
   
    return (
        <div  className='pt-14 '>
            <div className='bg-gray-300 p-5 flex flex-row justify-center items-center  h-[400px] md:h-[500px]  w-auto bg-cover bg-center relative'>
                <img className='w-full opacity-20  h-full object-cover absolute ' src={banner1} alt=""/>
                <div className='w-1/2 text-black font-medium text-center text-lg z-10'>
                    
                    <h2 class="text-5xl font-bold dark:text-white">Our Mission</h2>
                    <p className='p-3 text-normal'>
                         Create a world where malnutrition is no longer an overlooked problem. We envision a future where every person will have access to individualised nutritional insights  that will enable them to live better lifestyles. We are dedicated to increasing awareness, influencing policy changes, and eventually lessening the incidence and effects of malnutrition by utilising the power of data analytics and technology.</p>
                </div>
                
                
            </div>
            <div className='bg-gray-700 p-5 flex flex-row justify-center items-center  h-[400px] md:h-[500px]  w-auto bg-cover bg-center relative'>
                <img className='w-full opacity-20  h-full object-cover absolute ' src={banner2} alt=""/>
                <div className='w-1/2 text-black font-medium text-center text-lg z-10'>
                    
                    <h2 class="text-5xl font-bold text-white">Our Approach</h2>
                    <p className='p-3 text-white'>
                    Our strategy is built around a dedication to creativity, empathy, and teamwork. We are aware that malnutrition affects people from many backgrounds, and our platform is built to meet a range of requirements. We try to make the road towards better nutrition an educational and inspiring experience by providing personalised suggestions, interactive data, and user-friendly tools. </p>
                </div>
                
                
            </div>
        </div>
    )
}

export default AboutUs