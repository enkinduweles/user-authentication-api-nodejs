import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";

async function basicAuthentication(req: Request, res: Response, next: NextFunction) {
  try {
    const authorizationHeader = req.headers['authorization'];

    if(!authorizationHeader) {
      throw new ForbiddenError('Header de autorização inválido');
    }

    const [authenticationType, token] = authorizationHeader.split(' ');

    if(authenticationType !== "Basic" || !token) {
      throw new ForbiddenError('Método de autenticação ou token inválido');
    }

    const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

    const [username, password] = tokenContent.split(':');

    if(!username || !password) {
      throw new ForbiddenError('Usuário ou senha inválido');
    }

    const user = await userRepository.findUserByUsernameAndPassword({username, password});

    if(!user) {
      throw new ForbiddenError('Usuário ou senha inválido');
    }

    req.user = user;

    next();

  } catch (error) {
    next(error)
  }
}

export default basicAuthentication;