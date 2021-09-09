import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const ModalBackdrop = (props) => {
  return (
    <div className={classes['modal-backdrop']} onClick={props.onClick}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes['modal-overlay']}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
      {ReactDOM.createPortal(<ModalBackdrop onClick={props.onClick} />, portalElement)}
    </React.Fragment>
  );
};

export default Modal;