import React, { useEffect, useState } from 'react';
import { addFavourite } from './services/FavouriteService';


const FavouriteButton = (props) => {
    const [favourited, setFavourited] = useState(false);

    const setFavourite = async() => {
        const { id, poster_path, original_title, vote_average, runtime, release_date } = props.movie;
        console.log("og", original_title);
        const data = {
            movieId: id,
            movieTitle: original_title,
            release_date: release_date,
            vote_average: vote_average
        }
        const res = await addFavourite(data);
        console.log(res);
    }
    return (
        <div>
            <button type="button" onClick={() => { setFavourite }}>Add to Favourites</button>
        </div>
    )
}

export default FavouriteButton
