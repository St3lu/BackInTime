const authentificationController = require('./controllers/authentificationController');
const isAuthentificated = require('./policies/isAuthentificated.js');

module.exports = (app) => {
    app.post('/register',authentificationController.register);
    app.post('/login', authentificationController.login);
}