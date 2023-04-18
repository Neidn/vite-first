import {PropsWithChildren} from "react";

import classes from './Modal.module.css';

import {ModalModel} from "../model/ModalModel";

const Modal = ({children, onClose}: ModalModel) => {
  return (
      <>
        <div
            className={classes.backdrop}
            onClick={onClose}/>
        <dialog
            className={classes.modal}
            open={true}>
          {children}
        </dialog>
      </>
  );
}

export default Modal;
