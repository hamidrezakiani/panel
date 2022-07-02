import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './index.css'
const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      {props.children}
      <Footer />
    </Fragment>)
}

export default DefaultLayout