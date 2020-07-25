// Add Dependencies
const orm = require('../config/orm.js');

const burger = {
    all: function(cb){
        orm.all('burgers', res => {
            cb(res);
        });
    },
    create: function(val, cb){
        orm.create('burgers', val, res => {
            cb(res);
        });
    },
    update: function(col, condition, cb){
        orm.update('burgers', col, condition, res => {
            cb(res);
        })
    },
    delete: function(target, cb){
        orm.delete('burgers', target, res => {
            cb(res);
        });
    }
};

module.exports = burger;