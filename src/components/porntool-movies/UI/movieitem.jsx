import { Link } from 'react-router-dom'
import {getUrl} from '../../../helpers'
function MovieItem({movie}) {
  return (
    <div
    className="movie-item movie-item-two mb-30"
    data-blocked="<?= $gayVideo->blocked_in ?>"
  >
    <div className="movie-poster">
      <Link to={`/video/${movie.id}`}>
        <img className='h-96 object-cover' src={getUrl(movie.potrait)} alt="" />
      </Link>
    </div>
    <div className="movie-content">
      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
      <h5 className="title">
        <a href="movie-details.html">{movie.title}</a>
      </h5>
      {/* <span className="rel">{activeCategory}</span> */}
      <div className="movie-content-bottom">
        <ul>
          <li className="tag">
            <a href="#">HD</a>
            <a href="#">English</a>
          </li>
          <li>
            <span className="like">
              <i className="fas fa-thumbs-up" /> 3.5
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
export default MovieItem