import { pool } from '../../config/connectDB';

async function handler(req, res) {
  console.log(req, 'req');
  if (req.method === 'POST') {
    const { title, image, address, description } = req.body;

    try {
      const client = await pool.connect();

      const result = await client.query(
        'INSERT INTO meetup(title, image, address, description) VALUES($1, $2, $3, $4) RETURNING *',
        [title, image, address, description],
      );

      client.release();

      // 응답을 클라이언트에 보냄
      res
        .status(201)
        .json({ message: 'Meetup inserted!', data: result.rows[0] });
    } catch (err) {
      console.error('Database connection error', err.stack);
      res.status(500).json({ message: 'Database connection failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
