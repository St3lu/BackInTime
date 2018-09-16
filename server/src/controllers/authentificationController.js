const {User, validate} = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

module.exports = {
    async register (req, res) {
        try{
            const result = validate(req.body);
            if(result.error) return res.status(400).send({
                error: result.error.details[0].message
            });
            bcrypt.hash(req.body.password, 10, async (err, hash) => {

            
                let user = new User({
                    email : req.body.email,
                    password : hash,
                    full_name : req.body.full_name,
                    birth_date : req.body.birth_date
                });
                        
                

                
                const existantEmail = await User.findOne({email : req.body.email})
                
                
                if( existantEmail) {
                    res.status(409).send({error : 'This email is already in use'})
                }
                
                user = await user.save()
                res.send(user)
            
                
            })
                 
        }catch(err) {
            res.send(
                {
                    error: err
                }
            )
        }
        
    },

        
    
    async login(req, res){
        try{
            const user = await User.findOne({email : req.body.email})
            
            if(!user){
                res.status(400).send({error: "There is no user with such an email"})
            }else {
                bcrypt.compare(req.body.password, user.password, (err, response) => {
                    if(!response) {
                        res.status(400).send({error: "The password does not match with email"})
                    }else {
                        jwt.sign({
                            user,
                            isAdmin: false
                        }, config.secret, (err, token) => {
                            if(err) {
                                console.log(err)
                            }else {
                                res.send({token})
                            }
                        })
                    }
                })
            }
        }catch(err){
            res.status(400).send("Something went wrong");
        }
    }
    

}
    