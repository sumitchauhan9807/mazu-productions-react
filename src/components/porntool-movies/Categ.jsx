import MovieItem from './UI/movieitem';
import { useQuery } from '@apollo/client';
import { GET_MEDIA_BY_CATEGORY } from '../../queries.js';

function MovieCarousel({ category }) {
  const { loading, error, data } = useQuery(GET_MEDIA_BY_CATEGORY, {
    variables: { category: category },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  let movies = data.getMediaByCategory;

  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns
    gap: '20px', // Adjust gap between items
  };

  return (
    <div style={gridContainerStyles}>
      {movies.length ? (
        movies.map((movie) => (
          <div key={movie.id}>
            <MovieItem movie={movie} />
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MovieCarousel;
