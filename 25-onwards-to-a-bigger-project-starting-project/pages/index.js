import MeetupList from '../components/meetups/MeetupList';
import { pool } from '../config/connectDB';
import Head from 'next/head';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Add and check diverse meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
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
