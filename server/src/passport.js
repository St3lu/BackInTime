const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('./config/config.js')
const User = require('./models/User')

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.secret
    }, async (payload,done) => {
        try{
            const user = User.findById(payload.id)
            if(!user){
                return done(new Error, false)
            }

            return done(null, user)
        }catch(err){
            return done(new Error, false)
        }
    })
)


module.exports = null