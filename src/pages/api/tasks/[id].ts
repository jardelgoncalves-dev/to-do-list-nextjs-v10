import type { NextApiRequest, NextApiResponse } from 'next'

import { update } from '.'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method === 'PUT') return update(req, res)

  return res.status(405).json({ message: 'Method not allowed' })
}
