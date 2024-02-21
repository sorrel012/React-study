import { pool } from '../../config/connectDB';

async function handler(req, res) {
  if (req.post === 'GET') {
    try {
      const client = await pool.connect();

      const result = await client.query('SELECT * FROM meetup');

      client.release();

      res.status(201).json({ message: 'Meetup inserted!', data: result.rows });
    } catch (error) {
      res.status(500).json({ message: 'Database connection failed' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
