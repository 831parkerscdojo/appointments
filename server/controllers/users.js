//////////////////////////////////////////////////////////
//                   Users Controller                   //
//////////////////////////////////////////////////////////
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Appointment = mongoose.model('Appointment');

module.exports = {
    login: function(req, res){
        User.findOne({name:req.body.name}, function(err, user){
            // add validation later
            if(err){
                res.json(err);
            }
            else{
                if(user){
                    res.json(user);
                }
                else{
                    var user = new User(req.body);
                    user.save(function (err, user){
                        if(err){
                            res.json(err);
                        }
                        else{
                            res.json(user);
                        }
                    });
                };
            }
        });
    }
}