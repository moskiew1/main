const { where } = require('moongose/models/user_model');
const Company = require('../db/models/company');


class CompanyController {

    async showCompanies (req, res) {
        const { q, sort, countmin, countmax } = req.query;
        const page = req.query.page || 1;
        const perPage = 2;

        const where = {};

        // search
        if(q) {
        where.name = { $regex: q, $options: 'i'};
        }    
        
        // filters
        if(countmin || countmax) {
            where.employeesCount = {};
            if(countmin) where.employeesCount.$gte = countmin;
            if(countmax) where.employeesCount.$lte = countmax;
        }
        
        let query = Company.find(where);

        //pagination
        query = query.skip((page-1)* perPage);
        query = query.limit(perPage)
        

        // sortowanie
        if (sort) {
            const s = sort.split('|');
            query = query.sort({ [s[0]]: s[1]})
        }
        
        // exec
        const companies = await query.populate('user').exec();
        const resultsCount = await Company.find(where).count();
        const pagesCount = Math.ceil(resultsCount/perPage);

        res.render('pages/companies/companies', {
            companies,
            page,
            pagesCount,
            resultsCount
        });
    }

    async showCompany (req, res) {
        const { name } = req.params;
        const company = await Company.findOne({ slug: name }) // bierze zmienną nazwa i szuka sluga o takiej samej nazwie w  tablicy companies
        
        res.render('pages/companies/company', { 
            name: company?.name, //  renderuje plik company.ejs wysyła zmienną name która jest tworzona w company i wyciągana z companies 
            title: company?.name ?? 'brak wyników', // jeśli nie znajdzie nazwy firmy wyświetli brak wyników
        });     
     };

     // tworzy formularz dodawania firmy
     showCreateCompanyForm(req, res){
        res.render('pages/companies/create')
     };

     // tworzy nową firmę
     async createCompany(req, res) {  
        const company = new Company({
            name: req.body.name,
            slug: req.body.slug,
            employeesCount: req.body.employeesCount,
            user: req.session.user._id
        });

        try {
            await company.save();
            res.redirect('/firmy');
        } catch (e) {
            res.render('pages/companies/create', {
                errors: e.errors,
                form: req.body
            })
        }
     }

     // wyświtla formularz edycji firmy
     async showEditCompanyForm(req, res){
        const { name } = req.params;
        const company = await Company.findOne({ slug: name})
        res.render('pages/companies/edit', {
            form: company
        });
     };

     // edytuje firmę
     async editCompany(req, res) {  
        const { name } = req.params;
        const company = await Company.findOne({ slug: name});
        company.name = req.body.name;
        company.slug = req.body.slug;
        company.employeesCount = req.body.employeesCount;
        

        try {
            await company.save();
            res.redirect('/firmy');
        } catch (e) {
            res.render('pages/companies/edit', {
                errors: e.errors,
                form: req.body
            })
        }
     }

     async deleteCompany(req, res) {
        const { name } = req.params;
        try {
            await Company.deleteOne({ slug: name })
            res.redirect('/firmy');
        } catch(e) {
            //
        }

     }
}

module.exports = new CompanyController();
