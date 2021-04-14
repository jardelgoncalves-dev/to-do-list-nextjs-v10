import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  res.status(200).json([
    {
      title: 'Define project technologies and architecture',
      finished: true,
      createdAt: new Date(),
      id: 1,
    },
    {
      title: 'Refactor login screen to make it responsive',
      finished: false,
      createdAt: new Date(),
      id: 2,
    },
  ])
}
