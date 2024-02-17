import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';
import axios from 'axios';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

// export async function action({ request }) {
//   const searchParams = new URL(request.url).searchParams;
//   const mode = searchParams.get('mode') || 'login';
//
//   if (mode !== 'login' && mode !== 'signup') {
//     throw json({ message: 'Unsupported mode.' }, { status: 422 });
//   }
//
//   const data = await request.formData();
//   const authData = {
//     email: data.get('email'),
//     password: data.get('password'),
//   };
//
//   const result = await requestAuth(authData, mode);
//
//   if (result.result.status === 422 || result.result.status === 401) {
//     return result.result.data;
//   }
//
//   if (result.status === 'FAIL') {
//     throw json({ message: 'Could not authenticate user.' }, { status: 500 });
//   }
//
//   return redirect('/');
// }

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw new Error('Unsupported mode.', { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  try {
    const response = await axios.post(
      `http://localhost:8080/${mode}`,
      authData,
    );

    if (response.statusText === 'OK' || response.statusText === 'Created') {
      return redirect('/');
    }
  } catch (error) {
    if (error.response.status === 422 || error.response.status === 401) {
      return error.response.data;
    } else {
      throw json({ message: 'Could not authenticate user.' }, { status: 500 });
    }
  }
}
