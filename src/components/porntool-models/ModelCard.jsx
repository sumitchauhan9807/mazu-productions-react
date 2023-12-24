import { Link } from 'react-router-dom';
import {getUrlFT} from '../../helpers'
function ModelCard({model}) {
  const divStyle = {
    height: '500px',
    
    // Add other style properties as needed
  };
 return (
  <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
    <div className="movie-item movie-item-three mb-50">
      <div className="movie-poster">
        <img className=' w-full object-cover' style={divStyle}
          src={getUrlFT(model.profilePic)}
          alt=""
        />
        <ul className="overlay-btn">
          <li className="rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </li>
          <li>
            <Link to={`/fanclub/${model.username}`} className="btn">
              Join Fan club
            </Link>
          </li>
          {/* <li>
            <a href="movie-details.html" className="btn">
              Details
            </a>
          </li> */}
        </ul>
      </div>
      <div className="movie-content">
        <div className="top">
          <h5 style={{ color: "#E4D802" }} className="title">
            <a href="movie-details.html">{model.username}</a>
          </h5>
          {/* <span class="date"><?= $video['title']?></span> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModelCard