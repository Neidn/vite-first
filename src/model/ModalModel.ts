import {ReactNode} from 'react';

export interface ModalModel {
  onClose: () => void;
  children: ReactNode;
}
