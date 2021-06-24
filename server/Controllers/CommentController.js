const Comment = require('../models/comments');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportConfig = require('../passport');

const post_comment = (req, res) => {
    // const comment = new Comment(req.body);
    console.log(req.body);
    // comment.save((err, comment) => {
    //     if(err)
    //     res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });

    // })
}

module.exports = {
    post_comment
}