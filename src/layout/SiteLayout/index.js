import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import AppContent from '../AppContent'
import './index.css'
import routes from '../../AppRoutes/siteRoutes'
const SiteLayout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <AppContent routes={routes} />
      <Footer /> 
    </Fragment>)
}

export default SiteLayout