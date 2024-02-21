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
  console.log('rows: ', rows);

  client.release();

  return {
    fallback: false,
    paths: rows.map((row) => ({ params: { meetupId: row.id } })),
  };
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lehesten_2012_x14.JPG/1024px-Lehesten_2012_x14.JPG',
        title: 'A First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
