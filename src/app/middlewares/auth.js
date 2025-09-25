import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js'; 

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const token = authHeader.split(' ')[1]; // mais simples que .at(1)

  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token invalid' });
      }

      req.userId = decoded.id;
      req.userName = decoded.name;
    });
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
  return next();
}

export default authMiddleware;
