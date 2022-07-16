import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

const shop = () => {
  return (
    <>
    <Head>
      <title>Shop</title>
    </Head>
    <Navbar />
      <h1 className='text-3xl text-center ease-in-out duration-500'>SHOP HERE</h1>
    </>
  );
};

export default shop;
