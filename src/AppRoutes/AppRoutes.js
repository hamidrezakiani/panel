import React, { Fragment, useState ,Suspense} from "react"
import { useDispatch, useSelector } from "react-redux"
import { HashRouter,BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import {loginModalToggle} from '../actions/siteActions'
import Home from '../pages/Home'
import routes from './routes'
import DefaultLayout from '../layout/DefaultLayout'

const AppRoutes = (props) => {
  
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)

  return <HashRouter>
          
           <Suspense>
             <Routes>
               {routes.map((route,idx) => {
                   return(
                   <Route 
                     key={idx}
                     path={route.path}
                     name={route.name}
                     element={!route.auth || auth.check ? (
                         <DefaultLayout>
                         <route.element />
                         </DefaultLayout>) : (
                        
                         <Navigate to="/" replace />)
                     }
                   />)
               })}
             </Routes>
           </Suspense>
          
        </HashRouter>
}

export default AppRoutes