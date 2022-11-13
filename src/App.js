import React,{useState} from 'react';

import Button from './Components/Button/Button';
import MovieList from './Components/MovieList';

function App() {
    const[movies,setMovies] = useState([]);
    // Now Assume that fetching data takes time then we have to show some loading Spinner.
   const[isLoading,setisLoading]= useState(false);
    async   function fetchMoviesHandler(){
      setisLoading(true);
     const response  = await fetch('https://swapi.dev/api/films/')
      const data =  await response.json();

      
     
        const transformedMovies = data.results.map(moviedata=>{
          return{
            id:moviedata.episode_id,
            title:moviedata.title,
            openingText:moviedata.opening_crawl,
            releaseDate:moviedata.release_date,

          }
        });     
      setMovies(transformedMovies);

      setisLoading(false);
     }
  
  return (
    <>
    
    <section>
      <Button onClick = {fetchMoviesHandler}/>
    </section>
    <section>
      {/* If movies is 0 and data is not arrived */}
    {!isLoading && movies.length>0 && <MovieList movies={movies} ></MovieList>}
    {/* If there is no movies  */}
    {!isLoading && movies.length===0 && <p>Found No Movies</p>}
    {isLoading && <p>Loading.....</p>}
    </section>
   
 
    </>

  );
}

export default App;
// 177.zVIdeo