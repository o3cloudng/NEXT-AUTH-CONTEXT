import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
    <Head>
    <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />

  <title>About::Next Auth</title>
  <meta content="" name="description" />
  <meta content="" name="keywords" />
    </Head>
    <Navbar />
    <h1 className='text-3xl text-center ease-in-out duration-500'>ABOUT</h1>
 
    </>
  )
}

export default About