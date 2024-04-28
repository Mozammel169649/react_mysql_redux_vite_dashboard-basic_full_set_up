var db = require("../../../models");
const role = db.roles;

var All = async (req, res) => {
    const response = await role.findAll({});
    return res.status(200).json(response)
}
var Update = async (req, res) => {
    var newData = req.body
    var id = req.body.id;
    let info = {
        title: newData.title,
    }
    let item = await role.update(info,{where: {id:id}});
    res.status(200).send(item)
}
var Create = async (req, res) => {
    var newData = req.body;

    let info = {
        title: newData.title,
    }
    const response = await role.create(info)
    res.status(200).json(response)
}
var Delete = async (req, res) => {
    let id = req.params.id;
    await role.destroy({ where: { id: id }})
    res.status(200).send('item is deleted !')
}
var singleData = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const response = await role.findOne({where:{id:id}});
    // console.log("responce.....",response);
    return res.status(200).json(response)
}


module.exports = {
    All,
    Update,
    Delete,
    Create,
    singleData
}