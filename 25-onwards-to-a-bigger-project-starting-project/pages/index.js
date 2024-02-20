import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lehesten_2012_x14.JPG/1024px-Lehesten_2012_x14.JPG',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}

export default HomePage;
