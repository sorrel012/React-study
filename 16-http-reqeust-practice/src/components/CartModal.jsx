import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const CartModal = forwardRef(function CartModal(props, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="cart modal" ref={dialog}>
      <h2>Your Cart</h2>
      <ul className="cart-item ">
        <p>
          <span>Seafood ~</span>-<span>1</span> x $<span>19.99</span>
        </p>
        <div className="cart-item-actions">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </ul>
      <div className="cart-total">$53.97</div>
      <div className="modal-actions">
        <span className="text-button">Close</span>
        <button className="button">Go to Checkout</button>
      </div>
    </dialog>,
    document.getElementById('modal'),
  );
});

export default CartModal;
