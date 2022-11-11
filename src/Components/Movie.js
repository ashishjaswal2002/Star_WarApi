import React from 'react';
import classes from './Movie.module.css';
const Movie = (props)=>{

    return(
        <div className={classes.container}>
        <li key = {props.id}className={classes.movie}>
            <h1 style={{color:'blue'}}>{props.title}</h1>
            <h2>{props.releaseDate}</h2>
            <p>{props.openingtext}</p>
        </li>
</div>
    )


}

export default Movie;