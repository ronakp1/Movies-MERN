const Favourite = require('../models/favouritesList');

module.exports.getFavourite = (req, res) => {
    console.log(req.body);
    const data = req.body;
    // addFavourite(data);
}

// const addFavourite = async (data) => {
//     try {
//         const favourite = await Favourite.insert(data)
//     } catch (err) {
//         console.log(err);
//     }
// }