import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import classes from './Home.module.css'
const Home = (props) => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)


  return <Fragment>
    <div className={classes.card}>
   <div className={classes.categoryImage}></div>
  <h1>instagram</h1>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>product</button></p>
   </div>
   <div className={classes.card}>
   <div className={classes.categoryImage}></div>
  <h1>instagram</h1>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>product</button></p>
   </div>
   <div className={classes.card}>
   <div className={classes.categoryImage}></div>
  <h1>instagram</h1>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>product</button></p>
   </div>
   <div className={classes.card}>
   <div className={classes.categoryImage}></div>
  <h1>instagram</h1>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>product</button></p>
   </div>
  </Fragment>
}

export default Home