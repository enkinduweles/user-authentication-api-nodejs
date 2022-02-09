import {NextFunction, Request, Response, Router} from 'express';
import ForbiddenError from '../models/errors/forbidden.error.model';
import userRepository from '../repositories/user.repository';
import jwt from 'jsonwebtoken';
import basicAuthentication from '../middlewares/basic-authentication.middleware';

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthentication, async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const user = req.user;

    const jwtPayload = {username: user?.username};
    const jwtOptions = { subject: user?.uuid};
    const secretKey = "my-secret-key";

    const jwtToken = jwt.sign(jwtPayload, secretKey, jwtOptions);

    res.status(200).json({token: jwtToken});

  } catch (error) {
    next(error);
  }
});

export default authorizationRoute;