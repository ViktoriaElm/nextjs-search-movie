

export default function OneMovie({ summary, medium_cover_image, id, title, year, rating, genres, language }) {
    return (<div className="div-movie">
        <img className="movie-img" src={medium_cover_image} key={id} />
        <div className="movie-about">
            <h2 className="movie-title">{title}</h2>
            <h4 className="movie-genres">{genres.map((genres) => {
                return (<ul>
                    <li className="li-genres">{genres}</li>
                </ul>)
            })}</h4>
            <h4 className="movie-year">{year}, <span className="stars">✭</span> {rating} / 10 </h4>
            <h4 className="movie-language">{language}</h4>
            <p className="movie-summary-text">{summary.slice(0, 290)}...</p>
        </div>

    </div>)
}


