const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');


const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)



const ListMilktea = new Schema({
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
ListMilktea.plugin(mongoose_delete);
ListMilktea.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('ListMilktea', ListMilktea, 'listMilktea');
