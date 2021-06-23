import styles from '../styles/MovieCard.module.css';
import close from '../svg/close.svg';
import Movie from './Movie';
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { MovieContext } from './MovieContext';
import star from '../svg/star.svg';
import Empty from '../svg/Empty';
import { removeFavourite } from './services/FavouriteService';

const MovieCard = ({ title, vote_average, poster, id, movieId }) => {
    const { pathname } = useLocation();
    const URL = `https://image.tmdb.org/t/p/w300`;
    console.log("jay", movieId);
    const starAverage = Math.round(vote_average / 2);

    const removeFavouriteHandler = async () => {
        const res = await removeFavourite(movieId);
        console.log("removed", res);
    }

    if (poster === null) {
        return (
            <Link to={`/movie/${id}`} key={id} className={`${styles.movieCard} ${styles.emptyCard}`} >
                <Empty height="150" width="150" />
                <div className={styles.movieInfo}>
                    <h2>{title}</h2>
                    <div>
                        {[...Array(starAverage)].map((element, index) => {
                            return (
                                <img className={styles.star} key={index} src={star} alt={"stars"} />
                            );
                        })}
                    </div>
                    <span>{vote_average}/10</span>
                </div>
            </Link>
        )
    } else {

        return (
            <React.Fragment>

                <Link to={pathname.includes(`favourite`) ? `/movie/${movieId}` : `/movie/${id}`} className={styles.movieCard} key={id}>

                    <img src={`${URL}${poster}`} alt="Movie Poster" />
                    <div className={styles.movieInfo}>
                        <h2>{title}</h2>
                        <div>
                            {[...Array(starAverage)].map((element, index) => {
                                return (
                                    <img className={styles.star} key={index} src={star} alt={vote_average.toFixed(1)} />
                                );
                            })}
                        </div>
                        <span>{vote_average.toFixed(1)}</span>

                    </div>
                    {pathname.includes('favourites') &&
                        <div>
                            <button type="button" onClick={removeFavouriteHandler}>Remove Favourite</button></div>
                    }
                </Link>

            </React.Fragment>
        )
    }
}
export default MovieCard;
