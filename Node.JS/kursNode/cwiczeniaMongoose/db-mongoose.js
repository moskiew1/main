const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/node-kurs');


const checkForbidenString = value => {
    if(value === 'slug') {
        throw new Error('Nazwa slug jest zabroniona!')
    }
}
//model
const companySchema = {
    slug: {
        type: String,
        required: [true, 'Pole slug jest wymagane'],
        minLengh: [3, 'minimalna liczba znaków to 3'],
        validate: checkForbidenString, 
    },
    name: {
        type: String,
        required: [true, 'Pole name jest wymagane'],
        trim: true,
        lowercase: true,
    },
    employeesCount: {
        type: Number,
        min: 1,
        default: 1,    
    }
};

//setter - dzięki nie mu możemy stworzyć dowoloną funkcję w tym przypadku poniższa funkcja jest wbudowana jako lowercase:true
//companySchema.path('slug').set(value => value.toLowerCase())

const Company = mongoose.model('Company', companySchema);


async function main() {
    //const companies = await Company.find({});
    //console.log(companies); 
 const company = new Company({
    name: '     NoWa NazWa   ',
    slug: '     NaZwA   ',
    //employeesCount: '1'
 });
try {
    await company.save();
    console.log('dodano pozycję do bazy');
    } catch(e) {
        console.log('Coś poszło nie tak');
        for(const key in e.errors) {
            console.log(e.errors[key].message);
        }
        
    }
 
}
main();