//////////////////////////////////////////////////////////
//               Appointment Factory                    //
//////////////////////////////////////////////////////////
myApp.factory('appointmentFactory', function($http){
    var factory = {};
    var that = this;

    factory.index = function(callback){
        $http.get('/appointments').success(function(output){
            appointments = output;
            callback(appointments);
        })
    }

    factory.create = function(appointment, callback){
        $http.post('/appointments/new', appointment).success(function(output){
            callback(output)
        })
    }

    factory.getappointment = function(){
        console.log(that.appointment);
        return that.appointment;
    }

    factory.delete = function(id){
        $http.post('/appointments/delete/' + id).success(function(output){
            console.log(output);
        })
    }

    return factory;
})