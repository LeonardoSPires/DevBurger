import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const token = authHeader.split(' ').at(1);

  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        throw new Error();
      }

      req.userId = decoded.id;


    });
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
  return next();
}

export default authMiddleware;
