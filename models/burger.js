// Add Dependencies
const orm = require('../config/orm.js');

const burger = {
    all: function(cb){
        orm.all('burgers', res => {
            cb(res);
        });
    },
    create: function(val, cb){
        orm.insert('burgers', val, res => {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update('burgers', objColVals, condition, res => {
            cb(res);
        })
    },
    delete: function(condition, cb){
        orm.delete('burgers', condition, res => {
            cb(res);
        });
    }
};

module.exports = burger;