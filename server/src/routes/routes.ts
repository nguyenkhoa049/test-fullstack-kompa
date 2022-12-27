// import { Router } from 'express';
// const giftInfoController = require("../controllers/giftInfo.controller");

// let routes = (app) => {
//   router.get("/report", giftInfoController.report);

//   app.use("/api/gift-info/", router);
// };

// module.exports = routes;


import { Router } from 'express';
import giftInfoRouter from './giftInfo.routes';

const routes = Router();

routes.use('/api/gift-info', giftInfoRouter);

export default routes;