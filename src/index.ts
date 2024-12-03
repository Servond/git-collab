import express, { Application } from "express";
import { PORT } from "./config/env.config";

const port = PORT || 8000;

const app: Application = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
