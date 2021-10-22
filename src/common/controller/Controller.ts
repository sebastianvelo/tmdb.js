import express from 'express';

abstract class Controller {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    public getName() {
        return this.name;
    }
    
    protected abstract configureRoutes(): express.Application;
}

export default Controller