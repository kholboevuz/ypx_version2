const {Router} = require('express')
const { HomeController, RegisterController, LoginController, DashboardController, AddController, SuccessController, FilePathController } = require('../controller/app.controller')
const {UserRegisterController} = require('../controller/register.controller')
const UserLoginController = require('../controller/login.controller')
const UserAddController = require('../controller/add.controller')

const UploadController = require('../controller/upload.controller')
const TestController = require('../controller/test.controller')
const TvController = require('../controller/tv.controller')

const router = Router()

//user
router.get('/', HomeController )
router.get('/register', RegisterController)
router.get('/login', LoginController)

//dashboard user
router.get('/dashboard/main', DashboardController)
router.get('/dashboard/add', AddController)
router.get('/dashboard/success', SuccessController)
router.get('/dashboard/tv', TvController)

//post surovlari uchun user
router.post('/register', UserRegisterController)
router.post('/login', UserLoginController)
router.post('/add', UserAddController)


//file uchun
router.get('/file', FilePathController)

//tes
router.get('/test', TestController)

router.post('/upload', UploadController);


module.exports = router