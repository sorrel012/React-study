import axios from 'axios';

export async function getMealsData() {
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
    .catch((error) => {
      status = 'FAIL';
      result = 'Failed to get meals.';
    });

  return {
    status,
    result,
  };
}
