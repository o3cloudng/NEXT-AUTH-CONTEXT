import React from 'react'
import Typed from 'react-typed';
import Btn from '../components/formComponents/Btn'

const Hero = () => {
  return (
    <div className='max-w-[80%] mx-auto w-full h-screen mt-[-100px] text-center flex flex-col justify-center'>
        <p className='text-[#00df9a]'>Get to know me</p>
        <h1 className='font-bold text-4xl sm:text-6xl md:text-7xl text-white my-5 p-4'>My Portfolio Projects</h1>
        <div>
            <p className='text-white uppercase text-2xl'>MY <span className='text-[#00df9a] font-bold'>TECHNONOLGY </span>
              <Typed
                    strings={[
                      'JAVASCRIPT REACT | NEXT JS',
                      'WORDPRESS THEMES | PLUGINS',
                      'PHP | LARAVEL | BLADE',
                      'GITHUB | GITHUB ACTION',
                      'LINUX CLOUD'
                    ]}
                      typeSpeed={80}
                      backSpeed={30}
                      // attr="technologies"
                    loop
              />
            </p>
        </div>
        <p className='text-gray-500 my-4'>
            These are some of my works from full stack development to backend APi to Front end react / Next.js projects.
        </p>
        <Btn value="Get Started" /> 

    </div>
  )
}

export default Hero