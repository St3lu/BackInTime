const authentificationController = require('./controllers/authentificationController');

module.exports = (app) => {
    app.post('/register', authentificationController.register)
}