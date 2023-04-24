import { useEffect, useState } from "react";
import OneMovie from "../components/OneMovie";

export default function Movies() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');

  const fetchData = async () => {
    const { data: { movies } } = await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then(res => res.json())
    setMovies(movies)
    setIsLoaded(false)
  }

  useEffect(() => {
    { fetchData() }
  }, [])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(value.toLocaleLowerCase())
  })

  return (<>
    <div className="search-bar" >
      <h1 className="title">MOVIES</h1>
      <form >
        <input
          type="text"
          onChange={handleChange}
          value={value}
          placeholder='Введите название фильма...'
        />
      </form>
    </div>
    {isLoaded === true
      ? <div className="div-loading">
        <img className="spinner" src="https://www.pinclipart.com/picdir/big/235-2355092_waiting-circle-clipart.png" alt="spinner" />
      </div>
      : filteredMovies.map((movie) => {
        return (<div className="div-movies">
          <OneMovie key={movie.id} id={movie.id} title={movie.title} year={movie.year} rating={movie.rating} genres={movie.genres} runtime={movie.runtime} language={movie.language} summary={movie.summary} medium_cover_image={movie.medium_cover_image} />
        </div>)
      })
    }
  </>
  )
}