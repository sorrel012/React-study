import React, { useContext } from 'react';
import Modal from './UI/Modal.jsx';
import CartContext from '../store/CarContext.jsx';
import { currencyFormatter } from '../util/formatting.js';
import Input from './UI/Input.jsx';
import Button from './UI/Button.jsx';

function Checkout() {
  const cartCtx = useContext(CartContext);

  const cartTotalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  return (
    <Modal>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotalPrice)}</p>
        <Input label="Full Name" type="text" id="full-name"></Input>
        <Input label="E-Mail Address" type="email" id="email"></Input>
        <Input label="Street" type="text" id="street"></Input>
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code"></Input>
          <Input label="City" type="text" id="city"></Input>
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly>
            Close
          </Button>
          <Button textOnly={false}>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
