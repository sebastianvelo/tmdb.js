import express from "express";
import Controller from "../../../common/controller/Controller";
import FilmController from "../../film/controller/FilmController";

const setControllers = (app: express.Application) => {
    const controllers: Array<Controller> = [];
    controllers.push(new FilmController(app));
    return controllers;
}

export default setControllers;