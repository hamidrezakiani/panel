import React, { Fragment } from "react"
import './Modal.css'

const Modal = (props) => {
  return props.show ? (
    <Fragment>
      <div className="modal-content">
        {props.children}
      </div>
      <div className="modal-backdrop"></div>
    </Fragment>
  ) : null
}

export default Modal