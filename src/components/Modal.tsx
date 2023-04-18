import {PropsWithChildren} from "react";

import classes from './Modal.module.css';

const Modal = ({children}: PropsWithChildren) => {
  return (
      <>
        <div className={classes.backdrop}/>
        <dialog
            className={classes.modal}
            open={true}>
          {children}
        </dialog>
      </>
  );
}

export default Modal;
