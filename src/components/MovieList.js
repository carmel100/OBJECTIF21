
  import MovieCard from "./MovieCard";

  


function MovieList({ movies }) {
    return (
      <div  style={{ display:'flex',flexWrap:'wrap',justifyContent:'center' , columnGap: '30px',marginBlockStart: '20px'}}>
        {movies.length ? (
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        ) : (
          <p>Aucun film ne correspond aux critères.</p>
        )}
      </div>
    );
  }


export default MovieList