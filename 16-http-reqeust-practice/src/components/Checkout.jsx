import React, { useContext, useState } from 'react';
import Modal from './UI/Modal.jsx';
import CartContext from '../store/CarContext.jsx';
import { currencyFormatter } from '../util/formatting.js';
import Input from './UI/Input.jsx';
import Button from './UI/Button.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import { saveOrder } from '../plugins/mealAxios.js';

function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const [customer, setCustomer] = useState({
    email: '',
    name: '',
    street: '',
    'postal-code': '',
    city: '',
  });

  const cartTotalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleUserInput(type, event) {
    setCustomer((prevCustomer) => {
      return {
        ...prevCustomer,
        [type]: event.target.value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await saveOrder(cartCtx.items, customer);
    console.log(result);
  }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotalPrice)}</p>
        <Input
          label="Full Name"
          type="text"
          id="full-name"
          onChange={(event) => handleUserInput('name', event)}
        ></Input>
        <Input
          label="E-Mail Address"
          type="email"
          id="email"
          onChange={(event) => handleUserInput('email', event)}
        ></Input>
        <Input
          label="Street"
          type="text"
          id="street"
          onChange={(event) => handleUserInput('street', event)}
        ></Input>
        <div className="control-row">
          <Input
            label="Postal Code"
            type="text"
            id="postal-code"
            onChange={(event) => handleUserInput('postal-code', event)}
          ></Input>
          <Input
            label="City"
            type="text"
            id="city"
            onChange={(event) => handleUserInput('city', event)}
          ></Input>
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button textOnly={false}>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
