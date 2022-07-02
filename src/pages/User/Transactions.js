import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
const Transactions = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)


  return (
    <p> this is transactions page </p>  
  )
}

export default Transactions