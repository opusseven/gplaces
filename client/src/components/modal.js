import React, { Component } from 'react'
import '../modal.css'

 const Modal = ({ handleClose, show, children }) => {
 const showHideClassName = show ? "modal display-block" : "modal display-none";
 const RAT = showHideClassName
  return (
      <div className={RAT}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };


 
  
  export default Modal
  