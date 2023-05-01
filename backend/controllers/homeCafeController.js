const { trusted } = require("mongoose");
const ListMilktea = require("../models/ListMilktea");
const ListTea = require("../models/ListTea");
const ListFastfood = require("../models/ListFastfood");
const User = require("../models/User");
const { MongooseObject, mutiMongooseObject } = require("../util/Mongoose");

class HomeCafeController {
  createUser = async (req, res, next) => {
    console.log("req.body", req.body)
    if (req.body) {
      const user = await User.findOne({ account: req.body.account })
      console.log('user', user,)
      if (user) {
        return res.status(500).json({
          errCode: 2,
          mess: "Tài khoản đã tồn tại",
        });
      }
      else {
        req.body = new User(req.body);
        req.body
          .save()
          .then(() =>
            res.json({
              success: true,
            })
          )
          .catch(next);

      }
    }
    else {
      return res.status(500).json({
        errCode: 1,
        mess: "Thông tin rỗng, vui lòng nhập lại",
      });
    }


  }



  getUser(req, res, next) {
    User.find()
      .then(users => {
        res.json({
          users: mutiMongooseObject(users),
        });
      })
      .catch(error => {
        console.log(error);
      });

  }
  admin(req, res, next) {
    Promise.all([ListMilktea.find({}), ListTea.find({}), ListFastfood.find({})])
      .then(([milktea, tea, fastfood]) => {
        res.json({
          milktea: mutiMongooseObject(milktea),
          tea: mutiMongooseObject(tea),
          fastfood: mutiMongooseObject(fastfood),
        });
      })
      .catch(next);
  }
  edit(req, res, next) {
    console.log(req.params.id);
    Promise.all([
      ListMilktea.findById(req.params.id),
      ListTea.findById(req.params.id),
      ListFastfood.findById(req.params.id),
    ])
      .then(([milktea, tea, fastfood]) => {
        let value;
        if (milktea != null) {
          value = MongooseObject(milktea);
          res.json({ value });
        } else if (phindi != null) {
          value = MongooseObject(tea);
          res.json({ value });
        } else {
          value = MongooseObject(fastfood);
          res.json({ value });
        }
      })
      .catch(next);
  }

  update(req, res, next) {
    Promise.all([
      ListMilktea.updateOne({ _id: req.params.id }, req.body),
      ListTea.updateOne({ _id: req.params.id }, req.body),
      ListFastfood.updateOne({ _id: req.params.id }, req.body),
    ])
      .then(() => {
        return res.json({ success: true });
      })
      .catch(next);
  }
  login = async (req, res, next) => {
    const account = req.body.account;
    const password = req.body.password;
    console.log("req.body", req.body)
    if (!account || !password) {
      return res.status(500).json({
        errCode: 1,
        mess: "Tài khoản hoặc mật khẩu rỗng",
      });
    } else {
      const user = await User.findOne({ account: account })
      if (user) {
        if (user.password === password) {
          return res.status(200).json({ errCode: 0, user: user });
        }
        else {
          return res.status(500).json({
            errCode: 2,
            mess: "Mật khẩu không đúng, vui lòng thử lại",
          });
        }
      }
      else {
        return res.status(500).json({
          errCode: 3,
          mess: "Tài khoản không tồn tại",
        });
      }

    }

  }
  async create(req, res, next) {
    switch (req.body.action) {
      case "milktea":
        req.body = new ListMilktea(req.body);
        req.body
          .save()
          .then(() =>
            res.json({
              success: true,
            })
          )
          .catch(next);
        break;
      case "tea":
        req.body = new ListTea(req.body);
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
      case "fastfood":
        req.body = new ListFastfood(req.body);
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
      ListMilktea.delete({ _id: req.params.id }),
      ListTea.delete({ _id: req.params.id }),
      ListFastfood.delete({ _id: req.params.id }),
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
      ListMilktea.deleteOne({ _id: req.params.id }),
      ListTea.deleteOne({ _id: req.params.id }),
      ListFastfood.deleteOne({ _id: req.params.id }),
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
          ListMilktea.delete({ _id: { $in: req.body.coursesIds } }),
          ListTea.delete({ _id: { $in: req.body.coursesIds } }),
          ListFastfood.delete({ _id: { $in: req.body.coursesIds } }),
        ])
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      case "Restore":
        Promise.all([
          ListMilktea.restore({ _id: { $in: req.body.coursescoursesIds } }),
          ListTea.restore({ _id: { $in: req.body.coursesIds } }),
          ListFastfood.restore({ _id: { $in: req.body.coursesIds } }),
        ])
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      case "DeleteAll":
        Promise.all([
          ListMilktea.deleteOne({ _id: { $in: req.body.coursesIds } }),
          ListTea.deleteOne({ _id: { $in: req.body.coursesIds } }),
          ListFastfood.deleteOne({ _id: { $in: req.body.coursesIds } }),
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
      ListMilktea.findDeleted(),
      ListTea.findDeleted(),
      ListFastfood.findDeleted(),
    ])
      .then(([milktea, tea, fastfood]) => {
        return res.json({
          milktea: mutiMongooseObject(milktea),
          tea: mutiMongooseObject(tea),
          fastfood: mutiMongooseObject(fastfood),
        });
      })
      .catch(next);
  }

  restore(req, res, next) {
    console.log("req.params.id", req.params.id);
    Promise.all([
      ListMilktea.restore({ _id: req.params.id }),
      ListTea.restore({ _id: req.params.id }),
      ListFastfood.restore({ _id: req.params.id }),
    ])
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new HomeCafeController();
