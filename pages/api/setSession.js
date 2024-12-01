// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSession } from '@/utils/helper';

export default async function handler(req, res) {
  const session = await getSession(req, res);
  const data = req.body;

  // Use forEach instead of map to avoid the "array-callback-return" warning
  Object.keys(data).forEach((key) => {
    session[key] = data[key];
  });

  await session.save();
  res.status(200).json({ session, ok: true });
}
