import React from 'react'
import Btn from '../components/formComponents/Btn'
import BtnInverse from './formComponents/BtnInverse'

const Pricing = () => {
  return (
    <div className="w-full mx-auto bg-white py-16 px-4 text-black">
        {/* <h1 className='my-5 text-3xl'>Pricing</h1> */}
      <div className="max-w-[80%] mx-auto grid md:grid-cols-3 gap-8 py-10">
        <div className='w-full shadow-xl rounded-md flex flex-col hover:scale-105 duration-300 border my-8 md:my-2'>
            <img className='mt-[-50px] rounded-lg border w-[100px] mx-auto bg-white' src='/single.svg' alt='single' />
            <h2 className='text-2xl text-center font-bold py-8'>Single User</h2>
            <p className='text-4xl text-center font-bold'>$210</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>50GB Storage</p>
                <p className='py-2 border-b mx-8'>One user allowed</p>
                <p className='py-2 border-b mx-8 mb-10'>Send upto 200 emails</p>
            </div>
            <Btn value="Get Started" />
        </div>
        <div className='w-full shadow-xl bg-gray-100 rounded-md flex flex-col hover:scale-105 duration-300 border my-8 md:my-[0]'>
            <img className='mt-[-50px] rounded-lg border w-[100px] mx-auto bg-white' src='/people.svg' alt='single' />
            <h2 className='text-2xl text-center font-bold py-8'>Single User</h2>
            <p className='text-4xl text-center font-bold'>$410</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                <p className='py-2 border-b mx-8'>Two users allowed</p>
                <p className='py-2 border-b mx-8 mb-10'>Send upto 5000 emails</p>
            </div>
            <Btn value="Get Started" />
        </div>
        <div className='w-full shadow-xl rounded-md flex flex-col hover:scale-105 duration-300 border my-8 md:my-2'>
            <img className='mt-[-50px] bg-transparent rounded-lg border w-[100px] mx-auto bg-white' src='/three.svg' alt='single' />
            <h2 className='text-2xl text-center font-bold py-8'>Single User</h2>
            <p className='text-4xl text-center font-bold'>$810</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>2TB Storage</p>
                <p className='py-2 border-b mx-8'>Three users allowed</p>
                <p className='py-2 border-b mx-8 mb-10'>Send unlimited emails</p>
            </div>
            <Btn value="Get Started" />
        </div>
      </div>
    </div>
  )
}

export default Pricing