import axios from 'axios';

export async function getMeals() {
  let data = {
    status: '',
    result: '',
    isLoading: true,
  };

  await axios
    .get('http://localhost:3000/meals')
    .then((response) => {
      if (response.statusText === 'OK') {
        data.status = 'SUCCESS';
        data.result = response.data;
      }
    })
    .catch(() => {
      data.status = 'FAIL';
      data.result = 'Failed to get meals.';
    });

  data.isLoading = false;

  return data;
}

export async function saveOrder(ordersItem, customerData) {
  let data = {
    status: '',
    isLoading: true,
  };

  const order = {
    customer: customerData,
    items: ordersItem,
  };

  await axios
    .post('http://localhost:3000/orders', order)
    .then((response) => {
      if (response.statusText === 'Created') {
        data.status = 'SUCCESS';
      }
    })
    .catch(() => {
      data.status = 'FAIL';
    });

  data.isLoading = false;

  return data;
}
