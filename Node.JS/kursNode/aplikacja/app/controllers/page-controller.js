class pageController {

    showHome(req, res) {
        res.render('pages/home', {   // renderuje szablon ejs
            title: 'Strona główna',
       }); 
    }

    showNotFound(req,res) {
        res.render('errors/404.ejs', { 
           title: 'Nie znaleziono',
           layout:'layouts/minimalistic.ejs',
           });
        };
};

module.exports = new pageController();