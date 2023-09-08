import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import MovieItem from './UI/movieitem'
import { useQuery, gql } from '@apollo/client';
import {GET_MEDIA_BY_CATEGORY} from '../../queries.js'
// import {useState} from 'react'

function MovieCarousel({category}) {

  // const [] = userState(category)
  const { loading, error, data } = useQuery(GET_MEDIA_BY_CATEGORY, {
    variables: { category:category },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  let movies = data.getMediaByCategory
  console.log(category)
  return (
    <OwlCarousel
      items={5}
      margin={30}
      loop={true}
      loadedClass={'ucm-active-two owl-loaded'}
      navText={['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']}
      responsive={{
        0: {
          items: 1,
          nav: false,
        },
        575: {
          items: 2,
          nav: false,
        },
        768: {
          items: 2,
          nav: false,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 5,
          nav:true
        },
      }}
      >
        { movies.length ? movies.map((movie)=>{
          return <MovieItem
            movie={movie}
            key={movie.id}
          />
        }) : ''}
        
    </OwlCarousel>
  )
}

export default MovieCarousel