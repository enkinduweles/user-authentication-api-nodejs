import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import ForbiddenError from "../models/errors/forbidden.error.model";

async function jwtAuthentication(req: Request, res: Response, next: NextFunction) {
  try {
    const authorizationHeader = req.headers['authorization'];

    if(!authorizationHeader) {
      throw new ForbiddenError("Error, não foi possível logar na aplicação");
    }

    const [authenticationType, token] = authorizationHeader.split(' ');

    if(authenticationType !== 'Bearer' || !token ) {
      throw new ForbiddenError("Error, não foi possível logar na aplicação");
    }

    console.log(process.env.SECRET_KEY)

    try {
      const tokenPayload = jwt.verify(token, process.env.SECRET_KEY!);

      if(typeof tokenPayload !== 'object' || !tokenPayload.sub) {
        throw new ForbiddenError("Token inválido");
      }
  
      const user = {
        uuid: tokenPayload.sub,
        username: tokenPayload.username
      };
  
      req.user = user;
      next();
    } catch (error) {
      throw new ForbiddenError("Token inválido");
    }
    
  } catch (error) {
    next(error)
  }
}

export default jwtAuthentication;