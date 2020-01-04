import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Test from "./Test"
// import "./layout.css"
const Layout = ({ children }) => {
  return (
    <main>
      <Test />
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
