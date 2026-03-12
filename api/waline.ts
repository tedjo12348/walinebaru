import { Waline } from '@waline/vercel';

export default Waline({
  database: process.env.DATABASE_URL,
});