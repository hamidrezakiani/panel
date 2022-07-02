import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
const Orders = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)


  return (
    <p> this is admin order page </p>  
  )
}

export default Orders