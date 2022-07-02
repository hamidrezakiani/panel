import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
const Profile = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)


  return (
    <p> this is profile page </p>  
  )
}

export default Profile