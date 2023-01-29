const Company = require('../../db/models/company');


class CompanyController {

    async showCompanies(req, res) {
        const companies = await Company.find();
        res.json(companies);
    }

    async create(req,res) {  
            const company = new Company({
                name: req.body.name,
                slug: req.body.slug,
                employeesCount: req.body.employeesCount,
                user: req.body.user
                //user:  req.session.user._id
            });
    
            try {
                await company.save();
                res.status(201).json(company);
            } catch (e) {
                res.status(422).json({ errors: e.errors });
                
            }
    }
}

module.exports = new CompanyController();