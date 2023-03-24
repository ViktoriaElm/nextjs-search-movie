// import SearchPage from './form'
import { useEffect, useState } from "react";


// HomePage

export default function App(){
  const [isLoaded, setIsLoaded] = useState(false);

  return (<>
  <h1>Поиск фильмов</h1>
  <SearchPage/>
  <FetchMovies/>
  </>
  )
}




// SearchPage

function SearchPage(askMovie) {
  // const [movieId, setMovie] = useState(1);
  const [movieText, setMovieText] = useState('');

  //функция по поиску ввод названия
const handleSubmit = (e) => {
  e.preventDefault()
  // askMovie(movieText)
  setMovieText('')
}

const handleChange = (e) => {
  setMovieText ( e.currentTarget.value )
}

const handleKeyPress = (e) => {
  if ( e.key === "Enter" ) {
    handleSubmit(e)
  }
}


  return (<>
      <form onSubmit={ handleSubmit }>
          <input 
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={movieText}
          placeholder = 'Введите название фильма...'
          />
          <button>Искать</button>
      </form>
      {/* <FetchMovies id={movieId} /> */}
      </>
  )
}



// FetchMovies

function FetchMovies({ id }) {
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [movie, setMovie] = useState([]);
  
  
      useEffect(() => {
        async function fetchData() {
          let res = await fetch('https://yts.mx/api/v2/list_movies.json')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMovie(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          
        }
        
      )}
      console.log(fetchData())}, []);
  
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div> Загружаю...</div>;
      } else {
        return (
          <ul>
             <li>
      
                </li>
          </ul>
        );
      }
  }


   // const fetchData = async() => {
  //   const {data: {movies}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
  //   setMovies({movies: movies});
  //   setIsLoaded(false);
  //   console.log(movies);
  // }







   const fetchData = async() => {
  const {data: {movies}} = await fetch('https://yts.mx/api/v2/list_movies.json')
  .then(res => res.json())
  setMovies({movies}),
  setIsLoaded(false);
  console.log(movies);
  }