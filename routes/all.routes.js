const express = require('express');
const router = express.Router();


//----path start
const webRoutes = require('./partials/frontend/web.routes');
const testRoutes = require('./partials/test.routes');

//----path end

//---route start
router.use(webRoutes());
router.use(testRoutes());
//---route start


module.exports =()=> router;