module.exports = (app) => {
    app.post('/register',(req, res) => {
        console.log(
            `
                Name: ${req.body.full_name}
                Email: ${req.body.email}
                Pasword: ${req.body.password}
                Birth date: ${req.body.birth_date}
            `
        )
        res.send({
            message: `
                Name: ${req.body.full_name}
                Email: ${req.body.email}
                Pasword: ${req.body.password}
                Birth date: ${req.body.birth_date}
            `
        })
    })
}