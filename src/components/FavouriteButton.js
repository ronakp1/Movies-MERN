import React, {useEffect, useState} from 'react'

const FavouriteButton = (props) => {
    const [favourited, setFavourited] = useState(false);
    useEffect(() => {
        const {id, poster_path, original_title, vote_average, runtime, release_date} = props.movie;
        console.log("og",original_title);
        const data =  {
            movieTitle: original_title,
            movieId: id,
            release_date: release_date,
            vote_average: vote_average
        }
    fetch('/api/favourite/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)})
    }, [favourited]);

    return (
        <div>
            <button type="button" onClick={() => setFavourited(true)}>Add to Favourites</button>
        </div>
    )
}

export default FavouriteButton
