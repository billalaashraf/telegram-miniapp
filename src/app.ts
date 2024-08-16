// import express, { Express, Request, Response } from "express";
// import { config } from "./config";

// const app: Express = express();
// const port = process.env.PORT ?? 3000;

// app.use(express.json());
// app.use(express.raw({type: '*/*'}));

// app.post("/", async (req: Request, res: Response) => {
//   console.log(req.headers);
//   console.log(req.body);
//   res.send("Hello, Master! how can i help")
// });

// app.get("/", (req: Request, res: Response) => {
//   res.send("Behold, you have entered into the realm os shadows.");
// });

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });

import express from 'express';
import messageRoutes from './routes';

const app = express();

app.use(express.json());
app.use(express.raw({type: '*/*'}));
app.use('/', messageRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;