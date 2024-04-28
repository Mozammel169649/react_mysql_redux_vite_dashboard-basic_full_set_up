var db = require("../../../models");
const product = db.products;

var All = async (req, res) => {
    const response = await product.findAll({});
    return res.status(200).json(response)
}
var Update = async (req, res) => {
    var newData = req.body
    var id = req.body.id;
    let info = {
        title: newData.title,
        code: newData.code,
        price: newData.price
    }
    let item = await product.update(info,{where: {id:id}});
    res.status(200).send(item)
}
var Create = async (req, res) => {
    var newData = req.body;

    let info = {
        title: newData.title,
        code: newData.code,
        price: newData.price
    }
    const response = await product.create(info)
    res.status(200).json(response)
}
var Delete = async (req, res) => {
    let id = req.params.id;
    await product.destroy({ where: { id: id }})
    res.status(200).send('item is deleted !')
}
var singleData = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const response = await product.findOne({where:{id:id}});
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