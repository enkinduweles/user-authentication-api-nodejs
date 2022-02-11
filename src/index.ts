import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import jwtAuthentication from './middlewares/jwt-authentication.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthentication, usersRoute);

app.use(errorHandler);


app.listen(process.env.PORT, () => {
  console.log("Server is running!")
});