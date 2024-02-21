import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import axios from 'axios';
import { useRouter } from 'next/router';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    await axios
      .post('/api/new-meetup', enteredMeetupData)
      .then((response) => {
        router.push('/');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
