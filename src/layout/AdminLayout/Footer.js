import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import classes from './index.module.css'
const Footer = () => {
  return (
    <Fragment>
      <div className={classes.footer}>
        this is admin layout
      </div>
    </Fragment>
  )
}

export default Footer