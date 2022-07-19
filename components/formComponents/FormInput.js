import React from 'react'

const FormInput = ({ disabled=false, className='', ...props}) => {
  return (
    <>
        <input 
            type={props.type} 
            placeholder={props.placeholder} 
            className="w-full mt-2 px-6 py-3 text-gray-500 rounded-md" 
            {...props}
        />
    </>
  )
}

export default FormInput