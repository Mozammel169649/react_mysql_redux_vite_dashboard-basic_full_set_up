const express = require('express');
const router = express.Router();
const controller = require("../../../app/role/controller/controller")

const pathName = "role";
router
    .get(`/${pathName}/all`, controller.All)
    .post(`/${pathName}/update`, controller.Update)
    .post(`/${pathName}/create`, controller.Create)
    .delete(`/${pathName}/delete/:id`, controller.Delete)
    .get(`/${pathName}/singleData/:id`, controller.singleData)
    

module.exports = () => router;