import Navbar from './Navbar'
import Footer from './Footer'
import Script from 'next/script'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
      
    </>
  )
}

export default Layout