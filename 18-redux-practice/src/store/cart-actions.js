import { uiActions } from './ui-slice';
import axios from 'axios';
import { cartActions } from './cart-slice';

export const fetchCarData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'fetching',
        title: 'Fetching...',
        message: 'Fetching cart data',
      }),
    );

    await axios
      .get('https://react-http-dd472-default-rtdb.firebaseio.com/cart.json')
      .then((response) => {
        dispatch(cartActions.replaceCart(response.data));

        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Fetched cart data successfully',
          }),
        );
      })
      .catch(() => {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching cart data failed',
          }),
        );
      });
  };
};

export const sendCarData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      }),
    );

    await axios
      .put(
        'https://react-http-dd472-default-rtdb.firebaseio.com/cart.json',
        cart,
      )
      .then(() => {
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully',
          }),
        );
      })
      .catch(() => {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed',
          }),
        );
      });
  };
};
