import {Router, Request, Response, NextFunction} from 'express';

const statusRoute = Router();

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.send({status: "ok"});
})

export default statusRoute;