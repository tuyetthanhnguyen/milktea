const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');


const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)



const ListTea = new Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    },
    img: {
        type: String
    },
    price: {
        type: String,
    }

}, {

    timestamps: true
});




var mongoose_delete = require('mongoose-delete');
ListTea.plugin(mongoose_delete);
ListTea.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('ListTea', ListTea, 'listTea');
