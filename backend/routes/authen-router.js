const express = require('express')

const authenCtrl = require('../controllers/authentication-ctrl')

const router = express.Router()

router.post('/authen/register', authenCtrl.signUp)
router.post('/authen/login', authenCtrl.login)

module.exports = router