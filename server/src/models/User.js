const mongoose = require('mongoose');
const Joi = require('joi');


const userSchema = new mongoose.Schema({
    email : {
        required: true,
        type: String
        
    
    },
    full_name : {
        required: true,
        type: String, 
        minlength: 5,
        maxlength: 40
    },
    password: {
        required: true,
        type: String,
        minlength: 5,
        maxlength: 100
    },
    birth_date : {
        required: true,
        type: String
    }
});



const User = mongoose.model('users', userSchema);

const validate = (user) => {
    const schema = {
        email: Joi.string().required(),
        full_name : Joi.string().required().min(5).max(40),
        password: Joi.string().required().min(5).max(100),
        birth_date: Joi.string().required()
    }

    const result = Joi.validate(user, schema);
    return result;
}


module.exports.User = User;
module.exports.validate = validate;