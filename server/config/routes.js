//////////////////////////////////////////////////////////
//                       Routes                         //
//////////////////////////////////////////////////////////
var users = require('../controllers/users');
var appointments = require('../controllers/appointments');

module.exports = function(app){
    app.get('/', function(req, res){
        console.log("connected");
    });

    app.post('/login', function(req, res){
        users.login(req, res);
        console.log('login working');
    });

    app.get('/logout', function(req, res){
        console.log('logout working');
    });

    app.get('/appointments', function(req, res){
        appointments.index(req, res);
    });

    app.post('/appointments/delete/:id', function(req, res){
        appointments.delete(req, res);
    })

    app.post('/appointments/new', function(req, res){
        appointments.create(req, res);
    });

}