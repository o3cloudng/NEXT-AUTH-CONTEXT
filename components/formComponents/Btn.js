import React from 'react'

const Btn = (props) => {
  return (
    <>
         <button type={props.type ? props.type: ''} className='bg-[#00df9a] py-4 px-8 mx-auto rounded-md m-4 w-[200px] text-black font-semibold border border-[#00df9a] hover:bg-transparent hover:border hover:border-[#00df9a] hover:text-[#00df9a] hover:ease-in-out duration-500'>{props.value}</button>
    </>
  )
}

export default Btn