import React,{useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  

 const fetchMovieHandler  = useCallback(async () =>  {
  setLoading(true)
  setError(null)
  try {
    const response =  await fetch("https://swapi.dev/api/films")
    if(!response.ok){
      throw new Error("Something went wrong")
    }


    const data = await response.json()
 
    const transformedMovies = data.results.map(movie => {
      return{
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date
      }
    })
    setMovies(transformedMovies)
   
   } catch(error){
      setError(error.message)
  }
  setLoading(false)
}, [])

useEffect(() => {
  fetchMovieHandler()
},[fetchMovieHandler])


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading&& movies.length === 0  &&<p>No movies</p>}
        {isLoading&& <p>Loading.....</p>}
        {!isLoading && error && <p>{error}</p> }
      </section>
    </React.Fragment>
  );
}

export default App;
