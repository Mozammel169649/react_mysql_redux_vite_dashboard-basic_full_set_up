var db = require("../../../models");
const supplier = db.suppliers;

var All = async (req, res) => {
    const response = await supplier.findAll({});
    return res.status(200).json(response)
}
var Update = async (req, res) => {
    var newData = req.body
    var id = req.body.id;
    let info = {
        name: newData.name,
        email: newData.email,
        number: newData.number
    }
    let item = await supplier.update(info,{where: {id:id}});
    res.status(200).send(item)
}
var Create = async (req, res) => {
    var newData = req.body;

    let info = {
        name: newData.name,
        email: newData.email,
        number: newData.number
    }
    const response = await supplier.create(info)
    res.status(200).json(response)
}
var Delete = async (req, res) => {
    let id = req.params.id;
    await supplier.destroy({ where: { id: id }})
    res.status(200).send('item is deleted !')
}
var singleData = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const response = await supplier.findOne({where:{id:id}});
//    console.log("responce.....",response);
    return res.status(200).json(response)
}


module.exports = {
    All,
    Update,
    Delete,
    Create,
    singleData
}