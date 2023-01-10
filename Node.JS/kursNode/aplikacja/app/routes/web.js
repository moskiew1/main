const express = require('express');
const router = new express.Router();  // zmienia app.get na router.get
const CompanyController = require('../controllers/company-controller.js');
const UserController = require('../controllers/user-controller.js');
const PageController = require ('../controllers/page-controller.js')


router.get('/',PageController.showHome);
router.get('/firmy', CompanyController.showCompanies)
router.get('/firmy/:name', CompanyController.showCompany) 

router.get('/zarejestruj', UserController.showRegister) 
router.post('/zarejestruj', UserController.register) 



router.get('/admin/firmy/dodaj', CompanyController.showCreateCompanyForm) // wyświetla formularz dodawania firmy
router.get('/admin/firmy/:name/edytuj', CompanyController.showEditCompanyForm) // wyświetla formularz do edycji 
router.post('/admin/firmy/dodaj', CompanyController. createCompany)  // odbiera formularz ze strony 
router.post('/admin/firmy/:name/edytuj', CompanyController. editCompany)  // odbiera formularz ze strony 
router.get('/admin/firmy/:name/usun', CompanyController. deleteCompany)  // odbiera formularz ze strony 


router.get('*', PageController.showNotFound) 


module.exports = router;