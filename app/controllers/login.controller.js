const db = require('../models');
const config = require("../config/auth.config");
const Officer = db.officer;

var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs")

exports.genkey = (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10)
    res.status(200).json({ password: hash });
};

exports.login = (req, res) => {
    Officer.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).json({
                accessToken: null,
                message: "password not found"
            })
        }
        const token = jwt.sign({
            id: user.id
        }, config.secret, {
            algorithm: "HS256",
            expiresIn: 60 //เวลาหมดอายุ token  60s
        }
    );
    return res.status(200).json({
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token
    });
   
    }).catch(err => {
        res.status(500).json  ({message: err.message });  
    })
};

exports.findAll = (req, res) => {
    try {
        Officer.findAll({
            attributes: ["username", "team"]
        })
            .then(officer => {
                res.send(officer);
            })
            .catch(error => {
                console.error(error.message);
                res.status(500).send('Server Error');
            });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
