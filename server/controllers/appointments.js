//////////////////////////////////////////////////////////
//            Appointments Controller                   //
//////////////////////////////////////////////////////////

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Appointment = mongoose.model('Appointment');

module.exports = {
    index: function(req, res){
        Appointment.find({}).populate('_user').exec(function(err, appointments){
            if(err){
                res.json(err);
            }
            //display appointments
            else{
                res.json(appointments);
            }
        });
    },

    create: function(req, res){
        console.log(req.body);

        Appointment.findOne({complain: req.body.complain}, function(err, appointment){
            if(err){
                res.json(err);
            }
            else{
                //if appointment exists
                if(appointment){
                    res.json("That appointment has been created already");
                }
                //if not, save appointment
                else{
                    User.findOne({_id:req.body.author}, function(err, user){
                        var appointment = new Appointment({
                        complain: req.body.complain,
                        date: req.body.date,
                        time: req.body.time,
                        _user: req.body.author,
                        });
                        appointment._user = req.body.author;
                        user.appointments.push(appointment);
                        //save appointment
                        appointment.save(function(err, appointment){
                        console.log(appointment, "new appointment working");
                        if(err){
                            res.json(err);
                            }
                        else{res.json(appointment)};
                    })
                   
                    });
                }
            }
        });
         
    },

    show: function(req, res){
        Appointment.findById(req.params.id, function(err, appointment){
            if(err){
                res.json(err)
            }
            else{
                console.log(appointment);
                res.json(appointment);
            }
        })
    },


    delete: function(req, res){
        Appointment.remove({_id:req.params.id}, function(err, appointments){
            if(err){
                res.json(err)
            }
            else{
                res.json("appointment deleted")
            }
        })
    }
};