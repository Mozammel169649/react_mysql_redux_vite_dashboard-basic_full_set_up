const { INTEGER } = require("sequelize");
var db = require("../../../models");
const supplier = db.suppliers;

var Paginate = async (req, res) => {
    const { page, limit } = req.query;
    const indexOfFirstItem = (page - 1) * limit;
    const nextTenUsers = await supplier.findAll({
        offset: parseInt(indexOfFirstItem),
        limit: parseInt(limit),
    });
    return res.status(200).json(nextTenUsers)
}
var All = async (req, res) => {
    const response = await supplier.findAll({});
    return res.status(200).json(response)
}
var Count = async (req, res) => {
    const { count } = await supplier.findAndCountAll({});
    return res.status(200).json(count)
}
var Update = async (req, res) => {
    var newData = req.body
    var id = req.body.id;
    let info = {
        name: newData.name,
        email: newData.email,
        number: newData.number
    }
    let item = await supplier.update(info, { where: { id: id } });
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
    await supplier.destroy({ where: { id: id } })
    res.status(200).send('item is deleted !')
}
var singleData = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const response = await supplier.findOne({ where: { id: id } });
    //    console.log("responce.....",response);
    return res.status(200).json(response)
}


module.exports = {
    All,
    Count,
    Paginate,
    Update,
    Delete,
    Create,
    singleData
}