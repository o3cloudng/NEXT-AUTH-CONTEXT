import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

const login = () => {
  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
    <Navbar />
      <h1 className='text-3xl text-center ease-in-out duration-500'>LOGIN</h1>
    </>
  );
};

export default login;
