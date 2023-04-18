import {useNavigate} from "react-router-dom";

import classes from './Modal.module.css';

import {ModalModel} from "../../model/ModalModel";

const Modal = ({children}: ModalModel) => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate('..');
  };

  return (
      <>
        <div
            className={classes.backdrop}
            onClick={closeHandler}/>
        <dialog
            className={classes.modal}
            open={true}>
          {children}
        </dialog>
      </>
  );
}

export default Modal;
