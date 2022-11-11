import React,{useState} from 'react';

import Button from './Components/Button/Button';
import MovieList from './Components/MovieList';

function App() {
    const[movies,setMovies] = useState([]);
     function fetchMoviesHandler(){
      fetch('https://swapi.dev/api/films/').then(response=>{
       return response.json();
      }).then((data)=>{
        const transformedMovies = data.results.map(moviedata=>{
          return{
            id:moviedata.episode_id,
            title:moviedata.title,
            openingText:moviedata.opening_crawl,
            releaseDate:moviedata.release_date,

          }
        });     
      setMovies(transformedMovies);
      });

     }
  
  return (
    <>
    
    <section>
      <Button onClick = {fetchMoviesHandler}/>
    </section>
    <section>
      <MovieList movies={movies} >

      </MovieList>
    </section>
   
 
    </>

  );
}

export default App;
// 177.zVIdeo