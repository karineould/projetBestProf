var Sequelize = require ('sequelize');
var db = require('./ConnectionDb.js');



// DEFINE THE MODEL
var Users = db.sequelize.define('users',{
    id_users: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email_users : {
        type : Sequelize.STRING
    },
    password_users: {
        type : Sequelize.STRING
    },
    role_users: Sequelize.INTEGER
});

//
//Users.sync().then(function(){
//    var data = {
//        email_users : 'k.oudlbraham@ynov.com',
//        password_users: 'bestprof',
//        role_users: 0
//    }
//
//    Users.create(data).then(function(users){
//        console.dir(users.get());
//    })
//});


// Create new users in your database and return its id
exports.create = function(email, password, role) {
    var user = {
        email_users: email,
        password_users: password,
        role_users: role
    }

    Users.create(user).then(function(users){
        return users.get();
    })
};


exports.authenticate = function(email, password, role) {
    Users.find({
        where: {
            email_users: email,
            password_users: password
        }
    }).then(function(result) {

        if (!result){
            return false;
        }else{
            return result.id_users;
        }


    });
};

exports.update = function(req,res){
    Users.findById(req.params.id, function (err, user) {
            if (err) throw err;

            // change the users location
            user.name = req.body;

            // save the user
            user.save(function (err) {
                if (err) throw err;

                console.log('User successfully updated!');
            });
            res.render('myProfil')
        });
},

exports.delete = function(req, res){
    Users.findById(req.params.id, function (err, user) {
            if (err) throw err;

            // delete him
            user.remove(function (err) {
                if (err) throw err;

                console.log('User successfully deleted!');
            });
        });
    res.render('deleteUser');
},
/*exports.connect = function(req,res){
    //Connexion par email/mdp

                //Infos rentrées par l'user
connect_user = {
        email_users: req.body.email_users,
        password_users: req.body.password_users
    };
    console.log('--------Informations rentrées LogIn--------');
    console.log('infos rentrées : ');
    console.log('email : ' + connect_user.email_users);
    console.log('password : ' + connect_user.password_users);

                //Vérification dans la bdd
    Users.findOne({email_users: connect_user.email_users, password_users: connect_user.password_users}, 
        function(err, userInfo){
            if(!userInfo){
                console.log('Les infos entrées afin de se connecter sont fausses!');
                res.render('signup');
            }
            else{
                var password = req.body.password_users;
                var userPass = connect_user.password_users;

                if (password == userPass) {
                    req.session.email_users = connect_user.email_users;
                }
                res.redirect('http://localhost:3306');
            }
        });
},*/
                /*Deconnexion*/
exports.disconnect = function(req,res){
    req.session.destroy();
    res.render('logout');
    console.log('L\'user s\'est déconnecté!');
}
