import * as express from 'express';
import { Request, Response } from 'express';

const app: express.Application = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello World');
});

app.get('/users/:name', (req: Request, res: Response) => {
  return res.send(`Hello ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
