module.exports = {
    signin: function (req, res) {
        var body = req.body;
        var user = body.username;
        var password = body.password;

        // cache first

        // check in db

        // which db? does it matter?

        // call db access layer

        
    },
    register: function (req, res) {
        
    },
    signout: function (req, res) {
        
    },
    profile_update: function (req, res) {
        
    },
    password_reset: function (req, res) {
        
    }
}