//////////////////////////////////////////////////////////
//                     User Factory                     //
//////////////////////////////////////////////////////////
myApp.factory('userFactory', function($http, $sessionStorage){
    var factory = {};
    $sessionStorage.currUser;


    factory.login = function(newUser, callback){
        console.log("user factory working", newUser)
        $http.post('/login', newUser).success(function(output){
            $sessionStorage.currUser = output;
            console.log($sessionStorage.currUser);
            callback(output);
        });
    };

    factory.logout = function(){
        console.log("logout working");
        $sessionStorage.$reset();
    };

    factory.user = function(){
        return $sessionStorage.currUser;
    };

    return factory;
})