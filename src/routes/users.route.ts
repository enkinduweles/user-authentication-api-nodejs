import {NextFunction, Request, Response, Router} from 'express';
import DatabaseError from '../models/errors/database.error.model';
import UserRepository from '../repositories/user.repository';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserRepository.findAllUsers()

  res.status(200).send(users);
  } catch (error) {
    next(error)
  }
  
});

usersRoute.get('/users/:uuid', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  try {
    const uuid = req.params.uuid;
    const user = await UserRepository.findUser(uuid);
    res.status(200).send(user);
  } catch (error) {
    next(error)
  }
  
});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;

  try {
    const uuid = await UserRepository.create(newUser);

    res.status(201).send({uuid});
  } catch (error) {
    next(error);
  }
  
});

usersRoute.put('/users/:uuid', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  

  try {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;

    await UserRepository.update(modifiedUser);

    res.send({status: "updated", user: uuid});
  } catch (error) {
    next(error);
  }
  
});

usersRoute.delete('/users/:uuid', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  try {
    const uuid = req.params.uuid;
    await UserRepository.remove(uuid);
  
    res.send({status: "deleted", user: uuid});
  } catch (error) {
    next(error)
  }
 
});



export default usersRoute;