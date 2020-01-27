const mongo_db = require('mongoose');
const { Schema } =mongo_db;


function getCustom() {
    return true;
}
const schema_db = new Schema({
    topic: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    date:{type: String, require: true},
    state:{type: String, require: true}
});

module.exports = mongo_db.model('schema', schema_db);
