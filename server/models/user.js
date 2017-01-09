//////////////////////////////////////////////////////////
//                      User Model                      //
//////////////////////////////////////////////////////////
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    name: String,
    appointments: [{type: Schema.Types.ObjectId, ref: 'Appointment'}], 
})

var User = mongoose.model('User', UserSchema);