import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
const Login = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)
  const [name,setName] = useState()
  const login = () => {
    dispatch({
      type:'Login',
      data:{
        api_token:'hshshhssu727hw',
        name:name,
      }
    })
  }


  return auth.check ? <Navigate to="/home" /> : (
    <ul>
      <form onSubmit={login}>
        <input type="text" onChange={e => setName(e.target.value)} />
        <input type="submit" value="login" />
      </form>
    </ul>
    )
}

export default Login