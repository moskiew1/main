class UserController {
    showRegister(req,res) {
        res.render('pages/auth/register');
    }
}

module.exports = new UserController();