var user = require('../user_model/add_user_model');

exports.insert = async (req,res) =>{

    var data = await user.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}
exports.get_data = async (req,res) =>{

    try {
    
// pagination 
     var limit=1;
    var page_no = req.query.page_no;

    if(page_no == undefined)
    {
        page_no=1;
    }

    var start = (page_no-1)*limit;

    var data = await user.find().limit(limit).skip(start);
    var total_record = await user.find().count();
    
    var total_page = Math.ceil(total_record/limit);

    res.status(200).json({
        data,
        total_record,
        total_page

    })
}
    catch (error) {
        res.status(200).json({
            error
        })
    }
}
exports.delete_data = async (req,res) => {
    var id= req.params.id;
    var data = await user.findByIdAndDelete(id);

    res.status(200).json({
        status:"data delete",
        data
    })
}
exports.update_data = async (req,res) => {
    
    var id= req.params.id;

    var data = await user.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"data update",
        data
    })
}
exports.single_data = async (req,res) => {
    var id = req.params.id;
    var data = await user.findById(id,req.body);

    res.status(200).json({
        status:" single data",
        data
    })
}
exports.search_user = async (req,res) => {
    var name = req.params.name;
    var data = await user.find({"name":name});

    res.status(200).json({
        status:" search product",
        data
    })
}