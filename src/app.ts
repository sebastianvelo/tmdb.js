import Application from './common/app/Application';

const PORT = process.env.PORT || 3000;
const application = new Application(PORT);
application.init();