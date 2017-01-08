//////////////////////////////////////////////////////////
//                    Polls Controller                  //
//////////////////////////////////////////////////////////
myApp.controller('pollsController', function(userFactory, pollFactory, $location, $routeParams){
    var that = this;
    this.user = userFactory.user();
    this.index = function(){
        pollFactory.index(function(data){
            if(data){
                that.polls = data;
            }
        })

    }
    this.index();   

    this.create = function(){
        var options = that.addPoll.options
        console.log(that.addPoll.options)
        var pollOptions = []
        for(i in options){
            pollOptions.push({name: options[i], votes:0})
        }
        console.log(pollOptions);
        var poll = {
            question: that.addPoll.question,
            options: pollOptions,
            author: that.user._id
        }
        console.log(poll)
        pollFactory.create(poll, function(data){
            console.log(data);
            that.addPoll = {};
        })
        $location.url('/home');
    };

    this.show = function(id){
        var id = $routeParams.id;
        console.log("pollsController show working", id)
        pollFactory.show(id, function(data){
            that.thePoll = data;
            console.log("poll working ", that.thePoll);
            $location.url('/show/'+id);
        });
    };

    this.vote = function(ind){
        that.thePoll.options[ind].votes++
        console.log("vote working", that.thePoll.options)
        pollFactory.vote(that.thePoll, function(data){
            that.thePoll = data;
        });
    };

    this.delete = function(ind){
        console.log(that.polls[ind]);
        var id = that.polls[ind]._id;
        pollFactory.delete(id);
        that.index();
    };

    this.logout = function(){
        console.log(that.user);
        $location.url('/login');
        that.user = {}
        userFactory.logout();
    }

});