import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Modal from '../Modal/Modal'
import { Navigate } from 'react-router-dom'
import {loginModalToggle} from '../../actions/siteActions'
import {login} from '../../actions/authActions'
import AxiosApi from '../../axios/AxiosApi'
const LoginModal = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)
  const { site } = useSelector(state => state.site)
  const [phone,setPhone] = useState()
  const [password,setPassword] = useState()
  const loginHandler = () => {
    AxiosApi.post('/login',{
      phone: phone,
      password: password,
      domain: 'https://panel.iraniad.com'
    }).then((response) => {
      var user = response.data.data
      dispatch(login(user))
      dispatch(loginModalToggle())
    }).catch((response) => {
     // console.log(response)
    })
   /* dispatch({
      type:'Login',
      data:{
        api_token:'hshshhssu727hw',
        name:name,
      }
    })
    dispatch(loginModalToggle())*/
  }

  const test = () => {
    AxiosApi.post('/login',{
      phone: '09128451015',
      password: '12345678',
      domain: 'https://panel.iraniad.com'
    }).then((response) => {
      var user = response.data.data
      //dispatch(login(user))
      //dispatch(loginModalToggle())
    }).catch((response) => {
     // console.log(response)
    })
  }

  return (
    <Modal show={site.loginModal}>
      
        <label for="phone">phone : </label>
        <input id="phone" type="text" onChange={e => setPhone(e.target.value)} />
        <br />
        <br />
        <label for="password">password : </label>
        <input id="password" type="password" onChange={e => setPassword(e.target.value)} />
        <br />
        <br />
        <button onClick={() => loginHandler()}>login</button>
      
    </Modal>
    )
}

export default LoginModal