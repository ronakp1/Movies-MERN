import React, { useEffect, useState } from 'react';

import { getFavourites } from './services/FavouriteService';
import Output from './Output';
import Loading from './Loading';
function FavouritesList() {
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const hey = async () => {
            const res = await getFavourites();
            console.log(res)
            setFavouriteMovies(res);
            console.log(favouriteMovies);
            setLoading(false);
        }
        hey();
    }, []);

    return (
        <React.Fragment>
            {loading ? <Loading /> : <Output favouriteMovies={favouriteMovies} />}
        </React.Fragment>
    )
}

export default FavouritesList
