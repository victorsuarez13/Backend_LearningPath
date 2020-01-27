const mongo_db = require('mongoose');

mongo_db.connect('mongodb://localhost/learning_path')
    .then(db => console.log('db connected'))
    .catch(err => console.log('not coonected'));    
module.exports = mongo_db;