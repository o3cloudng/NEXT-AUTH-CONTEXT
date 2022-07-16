import Head from "next/head";
import '../styles/globals.css'
import Layout from '../components/Layouts'
// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
