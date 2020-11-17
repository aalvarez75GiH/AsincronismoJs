// Rick and Morty
const express = require('express');
const users = require('./users');
const crypto = require('crypto'); //Esta libreria se usa para encriptar data
const jwt = require('jsonwebtoken');
const { isAuthenticated, hasRoles } = require('./index')
const router = express.Router();


const signToken = (_id) =>{//11
    return jwt.sign({ _id }, 'mi-secreto',{
        expiresIn: 60 * 60 * 24 * 365,
    })
}

// Login de usuarios ya registrados  
router.post('/login', (req,res) =>{
    const { email, password } = req.body
    users.findOne({ email })//5
            .exec()
            .then(user => {
                console.log(user)
                if (!user){ //7
                    // return res.send('Usuario y/o contraseña incorrecta')
                    return res.sendStatus(404)
                } 
                crypto.pbkdf2(password, user.salt, 10000, 64, 'sha1', (err, key) =>{ //8
                const encryptedPassword = key.toString('base64')//9
                if (user.password === encryptedPassword){ //10
                    const token = signToken(user._id)
                    return res.send({token})
                }
                        
            })
        })
    })