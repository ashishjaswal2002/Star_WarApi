import React,{useState,useEffect,useCallback} from 'react';
import AddMovie from './Components/AddMovie';

import Button from './Components/Button/Button';
import MovieList from './Components/MovieList';

function App() {
    const[movies,setMovies] = useState([]);
    // Now Assume that fetching data takes time then we have to show some loading Spinner.
   const[isLoading,setisLoading]= useState(false);
  //  If the data show errror then 
  const[error,setError] = useState(null);


  const fetchMoviesHandler = useCallback(async () => {
    setisLoading(true);
    setError(null);
    try {
      const response = await fetch('https://movies-react-15ec9-default-rtdb.firebaseio.com/movie.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
     const loadMovies = [];
       for(const key in data){
        loadMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate,
        })
       }
     
   
      setMovies(loadMovies);
    } catch (error) {
      setError(error.message);
    }
    setisLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

   async function addMoviesHandler(movie){
   const response=    await   fetch('https://movies-react-15ec9-default-rtdb.firebaseio.com/movie.json',{
        method:'POST',
        body:JSON.stringify(movie),
        headers:{
          'Content-Type':'application/json'
        }
      });

       const data = response.json();
      console.log(data);
   }
     
  
  return (
    <>
    
    <section>
      <AddMovie onAddmovies={addMoviesHandler} />
      <Button onClick = {fetchMoviesHandler}/>
    </section>
    <section >
      {/* If movies is 0 and data is not arrived */}
    {!isLoading && movies.length>0 && <MovieList movies={movies} ></MovieList>}
    {/* If there is no movies  */}
    {!isLoading && movies.length===0 && !error && <p  >Found No Movies</p>}
    {isLoading && <p>Loading.....</p>}
    {!isLoading && error && <p>{error}</p>}
    </section>
   
 
    </>

  );
}

export default App;
