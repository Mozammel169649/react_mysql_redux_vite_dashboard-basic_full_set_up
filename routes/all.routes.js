const express = require('express');
const router = express.Router();


//----path start
const webRoutes = require('./partials/frontend/web.routes');
const userRoutes = require('./partials/backend/user.routes');
const productRoutes = require('./partials/backend/product.routes');
const roleRoutes = require('./partials/backend/role.routes');
const categoryRoutes = require('./partials/backend/category.routes');
const supplierRoutes = require('./partials/backend/supplier.routes');

//----path end

//---route start
router.use(webRoutes());
router.use(userRoutes());
router.use(productRoutes());
router.use(roleRoutes());
router.use(categoryRoutes());
router.use(supplierRoutes());
//---route start


module.exports =()=> router;