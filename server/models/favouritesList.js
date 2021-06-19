const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavouritesSchema = new Schema({
    movieTitle: {
        type:String,
        required:true
    },
    movieId: {
        type:Number,
        required:true
    },
    release_date: {
        type:Date,
        required:true
    },
    vote_average: {
        type:Number,
        required:true
    },
})

const Favourites = mongoose.model('Favourites', FavouritesSchema);

module.exports = Favourites;