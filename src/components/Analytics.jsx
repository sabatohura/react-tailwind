import React from 'react'
import Laptop from '../assets/laptop.jpg'
import Button from './Button'
 
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[400px] md:w-[500px] mx-auto my-4' src={Laptop} alt="laptop img" />
            <div className='flex flex-col justify-center gap-3' >
                <p className='text-GreenColor uppercase font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, veritatis. Iusto perspiciatis exercitationem officia repudiandae distinctio quis magni, ipsam fugit tempora amet totam perferendis! Quaerat, aut est? Eligendi, quidem beatae!
                </p>
                <div className='flex justify-center md:justify-start my-4'>
                <Button text="Get Started" color='bg-blackColor' textColor='text-GreenColor' />
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default Analytics