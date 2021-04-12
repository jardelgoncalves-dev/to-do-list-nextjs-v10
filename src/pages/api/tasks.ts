import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  res
    .status(200)
    .json([{ title: 'Lorem Ipsum', finished: false, createdAt: new Date() }])
}
