import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export default async function handler(req, res) {
  const { path } = req.query;

  if (!path) {
    return res.status(400).json({ error: 'path required' });
  }

  try {
    const result = await sql`
      SELECT SUM(value) as total
      FROM reaction
      WHERE url = ${path}
    `;

    return res.json({
      data: result[0]?.total || 0
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
