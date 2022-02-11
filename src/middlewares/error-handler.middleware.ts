import {Request, Response, NextFunction} from 'express';
import DatabaseError from '../models/errors/database.error.model';
import ForbiddenError from '../models/errors/forbidden.error.model';

function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  
  if(error instanceof DatabaseError) {
    res.status(400).send({message: error.message});
  } else if (error instanceof ForbiddenError) {
    res.status(403).send({message: error.message});

  } else {
    res.sendStatus(500);

  }
}

export default errorHandler;