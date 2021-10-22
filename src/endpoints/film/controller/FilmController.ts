import express, { Request, Response } from 'express';
import MovieRequest from '../../../api/imdb/request/film/movie/MovieRequest';
import Controller from '../../../common/controller/Controller';

class FilmController extends Controller {
    constructor(app: express.Application) {
        super(app, 'FilmController');
    }

    configureRoutes() {
        this.app.route('/hello').get((req: Request, res: Response) => {
            MovieRequest.upcoming({ page_size: 20 }).then(data => {
                res.send(data);
                console.log(data);
            });
        })
        return this.app;
    }

}

export default FilmController;