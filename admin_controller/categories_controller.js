var categories = require('../admin_model/categories_model');

exports.insert = async (req,res) =>{

    var data = await categories.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}
exports.get_data = async (req,res) => {
    var data = await categories.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
}