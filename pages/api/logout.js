// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSession } from '@/utils/helper';

export default async function handler(req, res) {
  const session = await getSession(req, res);
  if (Object.keys(session).length > 0) {
    // Clear the session
    session.destroy();
    res.status(200).json({ message: 'logout successfully', ok: true });
  } else {
    res.status(404).json({ message: 'session not found', ok: false });
  }
}
