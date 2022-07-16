import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { useState } from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Analytics from '../components/Analytics';
import Newsletter from '../components/Newsletter';
import Pricing from '../components/Pricing';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>My Portfolio</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        /> */}
      </Head>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Pricing />
      <Footer />
    </>
  );
}
