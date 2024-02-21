import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import axios from 'axios';

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    await axios
      .post('/api/new-meetup', enteredMeetupData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
