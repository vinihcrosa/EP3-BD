import type { NextApiRequest, NextApiResponse } from 'next'
import { QueryResult } from 'pg';
import client from '../../../dataBase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET') {
    const result = await client.query('SELECT * FROM public.chefemilitar');
    res.send(result.rows);
  }
  res.status(200).json({ name: 'John Doe' })
}
