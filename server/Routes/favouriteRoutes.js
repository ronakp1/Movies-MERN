const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const favouriteController = require('../Controllers/FavouriteController');

const router = Router();

router.post('/favourites',  passport.authenticate('jwt', { session: false }), favouriteController.post_favourites);

module.exports = router;