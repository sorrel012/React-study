import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import axios from 'axios';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
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
    sendCartData();
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.state}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
