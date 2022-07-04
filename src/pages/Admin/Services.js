import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
const Services = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)


  return (
    <p> this is admin services page </p>  
  )
}

export default Services