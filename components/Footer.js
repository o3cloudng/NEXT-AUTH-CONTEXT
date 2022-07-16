import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <>
      <div className="w-full py-10 text-white">
        <div className="w-[80%] flex-col mx-auto grid lg:grid-cols-3 py-20">
          <div className='justify-center col-span-1'>
            <h1 className="text-3xl w-full font-bold text-[#00df9a]">NEXT<span className="text-red-500">.-</span> AUTH<span className="text-red-500">.-</span></h1>
            <p className='text-gray-300 my-3'>
              The quickest way to start using Tailwind CSS in your Next.js project is to use the Next.js + Tailwind CSS Example. This will automatically configure your Tailwind setup based on the official Next.js example
            </p>
          </div>
          <div className=''>
            <div className='flex justify-between'>
              <div className='w-[100%] mx-auto'>
              <h1 className="text-3xl w-full font-bold text-[#00df9a]">My Links</h1>
              <ul>
                <li>Home</li>
                <li>Analytics</li>
                <li>Education</li>
                <li>About</li>
              </ul>

              </div>
              <div className='w-[100%]'>
              <h1 className="text-3xl w-full font-bold text-[#00df9a]">My Links</h1>
              <ul>
                <li>Home</li>
                <li>Analytics</li>
                <li>Education</li>
                <li>About</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};
export default Footer