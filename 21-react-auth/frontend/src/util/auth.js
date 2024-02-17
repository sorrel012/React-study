import { redirect } from 'react-router-dom';

export function getAuthToken() {
  return localStorage.getItem('token');
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    window.alert('You need to login.');
    return redirect('/auth');
  }

  return null;
}
