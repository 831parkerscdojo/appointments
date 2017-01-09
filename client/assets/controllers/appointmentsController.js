//////////////////////////////////////////////////////////
//               Appointments Controller                //
//////////////////////////////////////////////////////////
myApp.controller('appointmentsController', function(userFactory, appointmentFactory, $location, $routeParams){
    var that = this;
    this.user = userFactory.user();
    this.index = function(){
        appointmentFactory.index(function(data){
            if(data){
                that.appointments = data;
            }
        })

    }
    this.index();   

    this.create = function(){

        var appointment = {
            complain: that.addAppointment.complain,
            date: that.addAppointment.date,
            time: that.addAppointment.time,
            author: that.user._id
        }
        console.log(appointment)
        appointmentFactory.create(appointment, function(data){
            console.log(data);
            that.addAppointment = {};
        })
        $location.url('/home');
    };

    this.delete = function(x){
        console.log(that.appointments[x]);
        var id = that.appointments[x]._id;
        appointmentFactory.delete(id);
        that.index();
    };

    this.logout = function(){
        console.log(that.user);
        $location.url('/login');
        that.user = {}
        userFactory.logout();
    }

});