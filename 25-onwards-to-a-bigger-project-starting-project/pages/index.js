import MeetupList from '../components/meetups/MeetupList';
import { pool } from '../config/connectDB';

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export async function getStaticProps() {
  const client = await pool.connect();

  const result = await client.query('SELECT * FROM meetup');

  client.release();

  const meetups = result.rows;

  return {
    props: { meetups: meetups },
    revalidate: 3,
  };
}

export default HomePage;
