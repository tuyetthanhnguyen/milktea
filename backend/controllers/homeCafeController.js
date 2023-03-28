const { trusted } = require("mongoose");
const ListCafe = require("../models/ListCafe");
const ListEspresso = require("../models/ListEspresso");
const ListPhindi = require("../models/ListPhindi");
const { MongooseObject, mutiMongooseObject } = require("../util/Mongoose");

class HomeCafeController {
  admin(req, res, next) {
    Promise.all([ListCafe.find({}), ListPhindi.find({}), ListEspresso.find({})])
      .then(([cafe, phindi, espresso]) => {
        res.json({
          cafe: mutiMongooseObject(cafe),
          phindi: mutiMongooseObject(phindi),
          espresso: mutiMongooseObject(espresso),
        });
      })
      .catch(next);
  }

  edit(req, res, next) {
    console.log(req.params.id);
    Promise.all([
      ListCafe.findById(req.params.id),
      ListPhindi.findById(req.params.id),
      ListEspresso.findById(req.params.id),
    ])
      .then(([cafe, phindi, espresso]) => {
        let value;
        if (cafe != null) {
          value = MongooseObject(cafe);
          res.json({ value });
        } else if (phindi != null) {
          value = MongooseObject(phindi);
          res.json({ value });
        } else {
          value = MongooseObject(espresso);
          res.json({ value });
        }
      })
      .catch(next);
  }

  update(req, res, next) {
    Promise.all([
      ListCafe.updateOne({ _id: req.params.id }, req.body),
      ListPhindi.updateOne({ _id: req.params.id }, req.body),
      ListEspresso.updateOne({ _id: req.params.id }, req.body),
    ])
      .then(() => {
        return res.json({ success: true });
      })
      .catch(next);
  }

  async create(req, res, next) {
    switch (req.body.action) {
      case "cafe":
        req.body = new ListCafe(req.body);
        req.body
          .save()
          .then(() =>
            res.json({
              success: true,
            })
          )
          .catch(next);
        break;
      case "phindi":
        req.body = new ListPhindi(req.body);
        req.body
          .save()
          .then(() =>
            res.json({
              success: true,
            })
          )
          .catch(next);
        break;
        break;
      case "espresso":
        req.body = new ListEspresso(req.body);
        req.body
          .save()
          .then(() =>
            res.json({
              success: true,
            })
          )
          .catch(next);
        break;
      default:
        break;
    }
  }
  destroy(req, res, next) {
    Promise.all([
      ListCafe.delete({ _id: req.params.id }),
      ListPhindi.delete({ _id: req.params.id }),
      ListEspresso.delete({ _id: req.params.id }),
    ])
      .then(() => {
        res.json({
          success: true,
        });
      })
      .catch(next);
  }

  destroyPower(req, res, next) {
    Promise.all([
      ListCafe.deleteOne({ _id: req.params.id }),
      ListPhindi.deleteOne({ _id: req.params.id }),
      ListEspresso.deleteOne({ _id: req.params.id }),
    ])
      .then(() => {
        res.json({
          success: true,
        });
      })
      .catch(next);
  }
  handleForm(req, res, next) {
    switch (req.body.action) {
      case "Delete":
        Promise.all([
          ListCafe.delete({ _id: { $in: req.body.coursesIds } }),
          ListPhindi.delete({ _id: { $in: req.body.coursesIds } }),
          ListEspresso.delete({ _id: { $in: req.body.coursesIds } }),
        ])
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      case "Restore":
        Promise.all([
          ListCafe.restore({ _id: { $in: req.body.coursescoursesIds } }),
          ListPhindi.restore({ _id: { $in: req.body.coursesIds } }),
          ListEspresso.restore({ _id: { $in: req.body.coursesIds } }),
        ])
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      case "DeleteAll":
        Promise.all([
          ListCafe.deleteOne({ _id: { $in: req.body.coursesIds } }),
          ListPhindi.deleteOne({ _id: { $in: req.body.coursesIds } }),
          ListEspresso.deleteOne({ _id: { $in: req.body.coursesIds } }),
        ])
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;
      default:
        break;
    }
  }
  trashMenu(req, res, next) {
    Promise.all([
      ListCafe.findDeleted(),
      ListPhindi.findDeleted(),
      ListEspresso.findDeleted(),
    ])
      .then(([cafe, phindi, espresso]) => {
        return res.json({
          cafe: mutiMongooseObject(cafe),
          phindi: mutiMongooseObject(phindi),
          espresso: mutiMongooseObject(espresso),
        });
      })
      .catch(next);
  }

  restore(req, res, next) {
    console.log("req.params.id", req.params.id);
    Promise.all([
      ListCafe.restore({ _id: req.params.id }),
      ListPhindi.restore({ _id: req.params.id }),
      ListEspresso.restore({ _id: req.params.id }),
    ])
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new HomeCafeController();
