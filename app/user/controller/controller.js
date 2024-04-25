var db = require("../../../models");
const user = db.user;

var All = async (req, res) => {
    const response = await user.findAll({});
    return res.status(200).json(response)
}
var Create = async (req, res) => {
    const formData = req.body;
    let response = {
        data: "ok",
        postData: formData
    }
    // console.log("create responce......",response);
    res.status(200).json(response)
}
var Update = async (req, res) => {
    const allUserData = await user.findAll({});
    let response = {
        data: "ok",
        postData: allUserData
    }
    res.status(200).json(response)
}
var Delete = async (req, res) => {
    const allUserData = await user.findAll({});
    let response = {
        data: "ok",
        postData: allUserData
    }
    res.status(200).json(response)
}


module.exports = {
    All,
    Update,
    Delete,
    Create
}