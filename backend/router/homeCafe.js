var express = require('express')
var router = express.Router()
const homeCafeController = require('../controllers/homeCafeController')

router.get('/admin', homeCafeController.admin)

router.get('/admin/get-user', homeCafeController.getUser)
router.get('/admin/:id/edit', homeCafeController.edit)
router.put('/admin/:id', homeCafeController.update)

router.patch('/admin/:id/restore', homeCafeController.restore)

router.delete('/admin/:id/destroy', homeCafeController.destroy)
router.delete('/admin/:id/destroyPower', homeCafeController.destroyPower)

router.post('/admin/create', homeCafeController.create)

router.post('/admin/create-user', homeCafeController.createUser)

router.post('/admin/handle-form', homeCafeController.handleForm)

router.post('/login', homeCafeController.login)



router.get('/trashMenu', homeCafeController.trashMenu)













module.exports = router;