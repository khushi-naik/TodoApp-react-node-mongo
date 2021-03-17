const express = require('express')
router = express.Router()
todoRoute = require('../controllers/todoControllers')

router.get("/", todoRoute.todoController)


module.exports = router;