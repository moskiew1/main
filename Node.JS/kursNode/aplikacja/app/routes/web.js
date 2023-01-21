const express = require('express');
const router = new express.Router();  // zmienia app.get na router.get
const CompanyController = require('../controllers/company-controller.js');
const UserController = require('../controllers/user-controller.js');
const PageController = require ('../controllers/page-controller.js')
const upload = require('../services/uploader.js');

router.get('/',PageController.showHome);
router.get('/firmy', CompanyController.showCompanies)
router.get('/firmy/:name', CompanyController.showCompany) 

router.get('/zarejestruj', UserController.showRegister) 
router.post('/zarejestruj', UserController.register) 
router.get('/zaloguj', UserController.showLogin) 
router.post('/zaloguj', UserController.login) 
router.get('/wyloguj', UserController.logout) 

router.get('/admin/profil',UserController.showProfile)
router.post('/admin/profil',UserController.update)

router.get('/admin/firmy/dodaj', CompanyController.showCreateCompanyForm) 
router.post('/admin/firmy/dodaj', upload.single('image'), CompanyController. createCompany)  /
router.get('/admin/firmy/:name/edytuj', CompanyController.showEditCompanyForm)  
router.post('/admin/firmy/:name/edytuj', upload.single('image'), CompanyController. editCompany)   
router.get('/admin/firmy/:name/usun', CompanyController. deleteCompany)
router.get('/admin/firmy/:name/usun-zdjecie', CompanyController. deleteImage)

router.get('*', PageController.showNotFound) 

module.exports = router;