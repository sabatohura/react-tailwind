import React from 'react'
import ReactTyped from 'react-typed'
import Button from './Button'

function Hero() {
  return (
    <div className='text-white'>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className='text-GreenColor uppercase font-bold p-2'>Growing with Data Analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold p-2'>Fast, Flexible financing for
                    <ReactTyped className='px-2 md:pl-4 ' strings={['BTC', 'BTB', 'FOOD']} typeSpeed={120} backSpeed={140} loop/>
                </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 p-4'>Monitor you data Analytics to increase revenue for BTB, BTC, & SASS platforms</p>
            <div className='my-5'>
            <Button text="Get Started" color='bg-GreenColor' hoverColor='hover:bg-GreenAccent' textColor='text-blackColor' />
            </div>
        </div>
    </div>
  )
}

export default Hero