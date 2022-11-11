import React from 'react';
import Movie from './Movie';
import classes from './MovieList.module.css'

const MovieList = (props)=>{


    return(
        <ul className={classes.movieslist}>
        {props.movies.map((movie)=>(<Movie
        key = {movie.id}
        title = {movie.title}
        releaseDate = {movie.releaseDate}
        openingtext =  {movie.openingText}
        
        />))}
        </ul>
    )

}

export default MovieList;