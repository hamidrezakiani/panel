import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HashRouter, Route, Routes, Navigate ,Link} from 'react-router-dom'
import {logout} from '../../actions/authActions'
import {loginModalToggle,userDropdownToggle} from '../../actions/siteActions'
import classes from './index.module.css'

const Navbar = () => {
  const { auth } = useSelector(state => state.auth)
  const { site } = useSelector(state => state.site)
  const dispatch = useDispatch()
  
  return (
    <Fragment>
      <div className={classes.headerSection}>
        {auth.check ? (
          <i className={classes.authField}>
            <div className={classes.userAuth}>
              <div className={classes.dropdown}>
                <span className={classes.userIcon}
                  onClick={
                    () => {
                      dispatch(userDropdownToggle())
                     }
                  }
                >
              
                </span>
                {site.userDropdown ? (
                   <div className={classes.dropdownContent}>
                     <Link to="/home">site</Link>
                     <Link to="dashboard">dashboard</Link>
                     <Link to="orders">orders</Link>
                     <Link to="services">services</Link>
                     <Link to="tickets">tickests</Link>
                     <Link to="transactions"
                     onClick={
                       () => {
                         dispatch(userDropdownToggle())
                       }
                     }>transactions</Link>
                     <Link to="" onClick={
                       () => {
                         dispatch(logout())
                         dispatch(userDropdownToggle())
                         localStorage.removeItem('user')
                       }
                     }>sign out</Link>
                   </div> ) : null }
                
              </div>
              <span className={classes.userName}>
              welecome {auth.user.name}
            </span>
            </div>
          </i>
        ) : (
          <i className={classes.authField}>
            <button onClick={
              () => {
                dispatch(loginModalToggle())
              }
            }>
              sign in
            </button>
          </i>
        )}
      </div>
    </Fragment>
  )
}

export default Navbar