import {NextFunction, Request, Response, Router} from 'express';
import DatabaseError from '../models/errors/database.error.model';
import UserRepository from '../repositories/user.repository';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  const users = await UserRepository.findAllUsers()

  res.status(200).send(users);
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

  const uuid = await UserRepository.create(newUser);

  res.status(201).send({uuid});
});

usersRoute.put('/users/:uuid', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;

  modifiedUser.uuid = uuid;

  await UserRepository.update(modifiedUser);

  res.sendStatus(200);
});

usersRoute.delete('/users/:uuid', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  await UserRepository.remove(uuid);

  res.status(200).send(uuid);
});



export default usersRoute;