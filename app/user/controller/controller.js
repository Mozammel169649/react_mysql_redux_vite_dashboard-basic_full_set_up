var db = require("../../../models");
const user = db.users;

var All = async (req, res) => {
    const response = await user.findAll({});
    return res.status(200).json(response)
}
var Update = async (req, res) => {
    var newData = req.body
    var id = req.body.id;
    let info = {
        name: newData.name,
        email: newData.email,
    }
    let item = await user.update(info,{where: {id:id}});
    res.status(200).send(item)
}
var Create = async (req, res) => {
    var newData = req.body
    // console.log("newData" ,newData );
    let info = {
        name: newData.name,
        email: newData.email,
    }
    const response = await user.create(info)
    res.status(200).json(response)
}

var Delete = async (req, res) => {
    let id = req.params.id;
    // console.log(req.params.id);
    await user.destroy({ where: { id: id }})
    res.status(200).send('item is deleted !')
}
var singleData = async (req, res) => {
    const id = req.params.id;
    const response = await user.findOne({where:{id:id}});
   
    return res.status(200).json(response)
}


module.exports = {
    All,
    Update,
    Delete,
    Create,
    singleData
}