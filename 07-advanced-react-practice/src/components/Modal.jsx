import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.jsx';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/lg rounded-md p-4">
      {children}
      <form method="dialog" className="text-end">
        <Button className="hover:font-semiboldbold rounded-lg bg-stone-500 px-3 py-1 text-lg uppercase text-stone-100 hover:bg-stone-600 hover:text-stone-200">
          {buttonCaption}
        </Button>
      </form>
    </dialog>,
    document.getElementById('modal-root'),
  );
});

export default Modal;
