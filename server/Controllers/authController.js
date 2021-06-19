const User = require('../models/user');
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
      }

      if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
      }
    

    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }


    if (err.message.includes('User validation failed')) {
        console.log("in");
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const signup_post = async (req, res) => {
    try {
        console.log(req.body);
        const { username, password } = req.body;
        console.log("12", username)
        console.log("12", password);
        //   if (username !== undefined && password !== undefined) {
            const user = await User.create({ username, password });
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

            // res.status(201).json({ user: user._id });
            res.send({user: user._id})
            //   }
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

const signup_login = async (req, res) => {

    try {
        console.log(req.body);
        const { username, password } = req.body;
        console.log("13", username)
        console.log("13", password);
        if (username !== undefined && password || undefined) {
            const user = await User.login(username, password);
            res.status(200).json({ user: user._id });
        }
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
      }
}

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, 'test12345', {
        expiresIn: maxAge
    });
}

// const login_post = (req, res) => {

// }

module.exports = {
    signup_post, signup_login
}