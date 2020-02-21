var orm = require("../config/orm");


var burger = {
    selectAll: function(cb) {
        orm.selectAll("burger", function(res){
            cb(res)
        });
    }

    insertOne: function(cols, vals, cb) {
        orm.selectAll("burger", cols, vals, function(res){
            cb(res)
        });
    }

    updateOne: function(objColVals, condition, cb) {
        orm.selectAll("burger", objColVals, condition, function(res){
            cb(res)
        });
    }

    deleteOne: function(condition, cb) {
        orm.selectAll("burger", condition, function(res){
            cb(res)
        });
    }

}

module.export = burger;