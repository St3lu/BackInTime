module.exports = (app) => {
    app.post('/register',(req, res) => {
        res.send({
            message: `Got you ${req.body.email}`
        })
    })
}