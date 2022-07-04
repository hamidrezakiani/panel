import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HashRouter, Route, Routes, Navigate ,Link} from 'react-router-dom'
import {logout} from '../../actions/authActions'
import {loginModalToggle,userDropdownToggle} from '../../actions/siteActions'
const Navbar = () => {
  const { auth } = useSelector(state => state.auth)
  const { site } = useSelector(state => state.site)
  const dispatch = useDispatch()
  
  return (
    <Fragment>
      <div className="header-section">
        {auth.check ? (
          <i className="auth-field">
            <div className="user-auth">
              <div className="dropdown">
                <span className="user-icon"
                  onClick={
                    () => {
                      dispatch(userDropdownToggle())
                     }
                  }
                >
              
                </span>
                {site.userDropdown ? (
                   <div className="dropdown-content">
                     {auth.user.role == 'OWNER' ? <Link to="/admin/dashboard">
                     admin panel</Link>:null}
                     <Link to="/dashboard">dashboard</Link>
                     <Link to="/orders">orders</Link>
                     <Link to="/profile">profile</Link>
                     <Link to="/tickets">tickests</Link>
                     <Link to="/transactions"
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
              <span className="user-name">
              welecome {auth.user.name}
            </span>
            </div>
          </i>
        ) : (
          <i className="auth-field">
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