//////////////////////////////////////////////////////////
//               Appointment Model                      //
//////////////////////////////////////////////////////////
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AppointmentSchema = new mongoose.Schema({
    complain: String,
    date: {type: Date, default: new Date},
    time: String,
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    created_at: {type: Date, default: new Date},
})

var Appointment = mongoose.model('Appointment', AppointmentSchema);