mport { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);

export default async function handler(req, res) {
  try {
    const result = await sql(`SELECT COUNT(*) as total FROM comment`);

    res.status(200).json({
      total: result[0].total
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch reactions"
    });
  }
}