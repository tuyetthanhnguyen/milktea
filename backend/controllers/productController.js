
const ListMilktea = require('../models/ListMilktea');
const ListFastfood = require('../models/ListFastfood');
const ListTea = require('../models/ListTea');


const {
    MongooseObject,
    mutiMongooseObject
} = require('../util/Mongoose')

class ProductController {
    sanpham(req, res, next) {
        res.render('middlePage/product')
    }

    milktea(req, res, next) {
        Promise.all([ListMilktea.find({}), ListTea.find({}), ListFastfood.find({})])
            .then(([milktea, tea, fastfood]) => {
                res.render('product/milktea', { milktea: mutiMongooseObject(milktea), tea: mutiMongooseObject(tea), fastfood: mutiMongooseObject(fastfood) })
            })
            .catch(next)
    }
    additem(req, res, next) {
        ListMilktea.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    cart(req, res, next) {
        // Listmilktea.findDeleted({})
        // .then(() => 
        res.render('product/cars')
        // .catch(next)

    }


}

module.exports = new ProductController;