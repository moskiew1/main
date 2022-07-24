const mongoose = require('mongoose');
const { users } = require('moongose/models');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/zadanie-moongose');

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
}

const userSchema = new Schema({
    name: { 
        type: String,
        required: [true, 'Pole nazwa jest wymagane'],
        minLenght: [3, 'Podaj przynajmniej 3 litery'],
    },
    email: { 
        type: String,
        required: [true, 'Pole email jest wymagane'],
        validate: [validateEmail, 'Nie poprawny adres email'],
        trim: true,
        lowercase: true,
    },
    password: { 
        type: String,
        required: [true, 'Hasło jest wymagane'],
    },
    isAdmin: {
        type: Number,
        default: 0,
        min: 0,
        max: 1
    }
});

const hash = value => 'kfu8732hv93d'
userSchema.path('password').set(value => hash(value))

const User = mongoose.model('User', userSchema)

async function saveUser() {
    const user = new User({
        name: 'Michał',
        email: 'michal@gmail.com',
        password: 'janek',
        isAdmin: 1,
    })
    try{
        await user.save();
        console.log('Zapisano!');
    } catch(e) {
        for(const key in e.errors) {
            console.log(e.errors[key].message); 
        }
        console.log(e);
    }    
}
//saveUser();

async function getUsers() {
    const users = await User.find({});
    console.log(users);
}
//getUsers();

async function getUserByEmail(email) {
    const users = await User.findOne({email});
    console.log(users);
}

getUserByEmail('janek@gmail.com');