import axios from 'axios';

export async function getMeals() {
  let status = '';
  let result = '';

  await axios
    .get('http://localhost:3000/meals')
    .then((response) => {
      if (response.statusText === 'OK') {
        status = 'SUCCESS';
        result = response.data;
      }
    })
    .catch(() => {
      status = 'FAIL';
      result = 'Failed to get meals.';
    });

  return {
    status,
    result,
  };
}

export async function addCartItem(ordersItem) {
  let status = '';

  const customerData = {
    email: 'wain1719@gmail.com',
    name: 'Hana',
    street: 'Beobwon-ro',
    'postal-code': '53405',
    city: 'Seoul',
  };

  const order = {
    customer: customerData,
    items: ordersItem,
  };

  await axios
    .post('http://localhost:3000/orders', order)
    .then((response) => {
      if (response.statusText === 'OK') {
        status = 'SUCCESS';
      }
    })
    .catch(() => {
      status = 'FAIL';
    });

  return {
    status,
  };
}
