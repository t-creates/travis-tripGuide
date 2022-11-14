import { getSession } from 'next-auth/react';

const checkAuth = async (req, res, next) => {
  const session = await getSession({ req:req });

  console.log(session);

  if (!session) {
    res.status(401).json({ message: "Not Authenticated" });
  } else {
    req.session = session;
    next();
  }
};

export default checkAuth;