import MeetupDetail from '../components/meetups/MeetupDetail';
import { pool } from '../config/connectDB';

function MeetupDetails(props) {
  const data = props.meetupData;

  return (
    <MeetupDetail
      image={data.image}
      title={data.title}
      address={data.address}
      description={data.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await pool.connect();

  const { rows } = await client.query('SELECT id FROM meetup');

  client.release();

  return {
    fallback: false,
    paths: rows.map((row) => ({ params: { meetupId: row.id } })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await pool.connect();

  const { rows } = await client.query('SELECT * FROM meetup WHERE id = $1', [
    meetupId,
  ]);

  client.release();

  return {
    props: {
      meetupData: rows[0],
    },
  };
}

export default MeetupDetails;
