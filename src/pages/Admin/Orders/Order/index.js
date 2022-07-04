import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
const Order = (props) => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)


  return <tr>
   <td>{props.index}</td>
   <td>{props.order.name}</td>
   <td>{props.order.productName}</td>
   <td>{props.order.count}</td>
   <td>{props.order.amount}</td>
   <td>{props.order.status}</td>
  </tr>
}

export default Order