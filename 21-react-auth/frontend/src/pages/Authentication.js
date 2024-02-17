import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';
import axios from 'axios';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Unsupported mode.' }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  await axios
    .post('http://localhost:8080/' + mode, authData)
    .then((response) => {})
    .catch((error) => {
      if (error.status === 422 || error.status === 401) {
        return error;
      }

      throw json(
        { message: 'Could not authenticate user. mode.' },
        { status: 500 },
      );
    });

  return redirect('/');
}
