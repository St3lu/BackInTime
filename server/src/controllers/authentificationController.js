const {User, validate} = require('../models/User');


module.exports = {
    async register (req, res) {

        try{
            const result = validate(req.body);
            if(result.error) return res.status(400).send({
                error: result.error.details[0].message
            });
    
            let user = new User({
                email : req.body.email,
                password : req.body.password,
                full_name : req.body.full_name,
                birth_date : req.body.birth_date
            });

            const existantEmail = User.findOne(email = user.email)

            if(existantEmail){
                return res.status(400).send({error: "Email is already in use"})
            }else{
                user = await user.save()
                res.send(user)
            }
        }catch(err) {
            res.send(
                {
                    error: err
                }
            )
        }
    }
}