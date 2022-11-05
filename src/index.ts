import express, { Request, Response } from 'express';
import config from './config';

const app = express();
const PORT = config.port | 8080;

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Welcome to Node from Elastic Beanstalk!');
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
