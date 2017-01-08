//////////////////////////////////////////////////////////
//                   Polls Controller                   //
//////////////////////////////////////////////////////////

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll');

module.exports = {
    index: function(req, res){
        Poll.find({}).populate('_user').exec(function(err, polls){
            if(err){
                res.json(err);
            }
            //display polls
            else{
                res.json(polls);
            }
        });
    },

    create: function(req, res){
        console.log(req.body);

        Poll.findOne({question: req.body.question}, function(err, poll){
            if(err){
                res.json(err);
            }
            else{
                //if poll exists
                if(poll){
                    res.json("That poll has been created already");
                }
                //if not, save poll
                else{
                    User.findOne({_id:req.body.author}, function(err, user){
                        var poll = new Poll({
                        question: req.body.question,
                        _user: req.body.author,
                        options: req.body.options,
                        });
                        poll._user = req.body.author;
                        user.polls.push(poll);
                        //save poll
                        poll.save(function(err, poll){
                        console.log(poll, "new poll working");
                        if(err){
                            res.json(err);
                            }
                        else{res.json(poll)};
                    })
                   
                    });
                }
            }
        });
         
    },

    show: function(req, res){
        Poll.findById(req.params.id, function(err, poll){
            if(err){
                res.json(err)
            }
            else{
                console.log(poll);
                res.json(poll);
            }
        })
    },


    delete: function(req, res){
        Poll.remove({_id:req.params.id}, function(err, polls){
            if(err){
                res.json(err)
            }
            else{
                res.json("poll deleted")
            }
        })
    },

    vote: function(req, res){
        console.log("vote working ", req.body);
        Poll.update({_id: req.body._id}, {options: req.body.options}, function(err, poll){
             if(err){
                res.json(err);
            }
            else{
                res.json(poll);
                }
            }
        );
    }

    
};