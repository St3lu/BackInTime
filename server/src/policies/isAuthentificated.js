const passport = require('passport')

module.exports = (req,res,next) => {
    passport.authenticate('jwt',(err, user) =>  {
        if(err || !user){
            res.status(403).send({
                error: "You do not have acces"
            })
        }else{
            req.user = user
            next()
        }
    })(req,res,next)
}