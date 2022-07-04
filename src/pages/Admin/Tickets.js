import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
const Tickets = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)


  return (
    <p> this is tickets page </p>  
  )
}

export default Tickets