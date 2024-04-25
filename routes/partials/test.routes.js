const express = require('express');
const router = express.Router();
const userController = require("../../app/user/controller/controller")


router
    .get("/user/all", userController.All)
    .delete("/user/Delete/:id", userController.Delete)
    .put("/user/update/:id", userController.Update)
    .post("/user/create", userController.Create)

module.exports = () => router;