import express, { Request, Response } from "express";
import TMDBClient from "./api/TMDBClient";

const TMDB = new TMDBClient(`3c304a56a5b9156ef4b5ac127db18bbc`);

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/hello", (req: Request, res: Response) => {
  TMDB.movie
    .getDetails(297761)
    .then((response) => {
      res.send(`<h1>${JSON.stringify(response, null, 3)}</h1>`);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
