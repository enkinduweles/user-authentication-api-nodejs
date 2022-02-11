import {NextFunction, Request, Response, Router} from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import basicAuthentication from '../middlewares/basic-authentication.middleware';
import jwtAuthentication from '../middlewares/jwt-authentication.middleware';
// import 'dotenv/config';


const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthentication, async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const user = req.user;

    const jwtPayload = {username: user?.username};
    const jwtOptions: SignOptions = { subject: user?.uuid, expiresIn: "30s"};
    console.log(process.env.SECRET_KEY)
    const jwtToken = jwt.sign(jwtPayload, process.env.SECRET_KEY!, jwtOptions);

    res.status(200).json({token: jwtToken});

  } catch (error) {
    next(error);
  }
});

authorizationRoute.post('/token/validate', jwtAuthentication, (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(200);
});


export default authorizationRoute;