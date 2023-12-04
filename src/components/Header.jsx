import logo from '../assets/image/mazuproductionslogo.png'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux'
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';
import { getNavigateURL } from 'helpers/index'


function useDidUpdateEffect(fn, inputs) {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      return fn();
    }
    didMountRef.current = true;
  }, inputs);
}



function Header() {
  const user = useSelector(state => state.user)

  let prefrences = ['gay', 'straight', 'lesbain', 'trans', 'bisexual']
  const alertUser = useAlert()
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault()
    dispatch(logoutUser())
  }
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>MAZU Productions</title>
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png" />
      {/* preloader */}
      <div id="preloader" style={{ display: 'none' }}>
        <div id="loading-center">
          <div className="card" style={{ width: '50%', margin: 'auto', marginTop: '15%' }}>
            {/* <img class="card-img-top" src="assets/image/mazuproductionslogo.png" alt="Card image cap"> */}
            <div className="card-body">
              <p className="card-text">Please agree that you are above 18 years of age</p>
              <a id="agreeTerms" className="btn btn-primary">I Agree</a>
              <a onclick="history.back()" className="btn btn-primary">Take me back</a>
            </div>
          </div>
        </div>
      </div>
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up" />
      </button>
      <header className="header-style-two">
        <div className="header-top-wrap">
          <div className="container custom-container">
            <div className="row align-items-center">
              <div className="col-md-6 d-none d-md-block">
                <div className="header-top-subs">
                  <p> <span>{user?.userData?.username && `Welcome back ${user.userData.username}`}</span> </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="header-top-link">
                  <ul className="quick-link">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">FAQS</a></li>
                  </ul>
                  <ul className="header-social">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-vimeo-v" /></a></li>
                    <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="menu-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                <div className="menu-wrap">
                  <nav className="menu-nav show">
                    <div className="logo">
                      <Link to="/">
                        <img src={logo} alt="Logo" className='lg:h-14 sm:h-8 md:h-8 h-8' />
                      </Link>
                    </div>

                    <div className='lg:hidden flex flex-wrap gap-2 justify-end items-end '>   {user.token ? <li className="header-btn"><a onClick={logOut} href="#" className="bg-gray-900 px-2 py-2 text-white border-2 border-yellow-600">Logout</a></li> : <li className="header-btn"><Link to="/userlogin" href="#" className="bg-gray-900 text-white border-2 border-yellow-600 px-2 py-2">Sign In</Link></li>}
                      {!user.token && <li className="header-btn"><Link to="/registernow" className="bg-gray-900 px-2 py-2 text-white border-2 border-yellow-600">Register</Link></li>}
                      <div className="navbar-wrap main-menu  flex flex-wrap">
                        <ul className=" ">
                          <li className="active menu-item-has-children"><a href="#">Studios</a>
                            <ul className="submenu">
                              <li><a href="/mazustudio">RentAGay Productions
                              </a></li>
                              <li><a href="/mazustudio">Cuba Nuevo
                              </a></li>
                              <li className="active"><a href="/mazustudio">Pussy Deluxe
                              </a></li>
                              <li className="active"><a href="/mazustudio">Black Bitch Films                                                  </a></li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children"><a href="#">Streaming</a>
                            <ul className="submenu">
                              <li><a href="movie.html">DVD / Blue Ray                                                  </a></li>
                              <li><a href="movie-details.html">Actors</a></li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children"><a href="#">Actors</a>
                            <ul className="submenu">
                              {prefrences.map((pref) => {
                                return (
                                  <li>
                                    <Link to={`/actor/${pref}`}>{pref}</Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </li>
                          <li className='-mt-12'><a href="/howtobecomeamodel">Models Wanted</a></li>
                          <li  className='-mt-12' ><Link to="/fanclub" href="tv-show.html">Subscribe</Link></li>

                          {/* <li><a href="pricing.html">Become A Model</a></li> */}
                          {/* <li class="menu-item-has-children"><a href="#">blog</a>
                                            <ul class="submenu">
                                                <li><a href="blog.html">Our Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li> */}
                          {/* <li><a href="contact.html">contacts</a></li> */}
                        </ul>
                      </div>  </div>

                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="active menu-item-has-children"><a href="#">Studios</a>
                          <ul className="submenu">
                            <li><a href="/mazustudio">RentAGay Productions
                            </a></li>
                            <li><a href="/mazustudio">Cuba Nuevo
                            </a></li>
                            <li className="active"><a href="/mazustudio">Pussy Deluxe
                            </a></li>
                            <li className="active"><a href="/mazustudio">Black Bitch Films                                                  </a></li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children"><a href="#">Streaming</a>
                          <ul className="submenu">
                            <li><a href="movie.html">DVD / Blue Ray                                                  </a></li>
                            <li><a href="movie-details.html">Actors</a></li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children"><a href="#">Actors</a>
                          <ul className="submenu">
                            {prefrences.map((pref) => {
                              return (
                                <li>
                                  <Link to={`/actor/${pref}`}>{pref}</Link>
                                </li>
                              )
                            })}
                          </ul>
                        </li>
                        <li><a href="/howtobecomeamodel">Models Wanted</a></li>
                        <li><Link to="/fanclub" href="tv-show.html">Subscribe</Link></li>

                        {/* <li><a href="pricing.html">Become A Model</a></li> */}
                        {/* <li class="menu-item-has-children"><a href="#">blog</a>
                                            <ul class="submenu">
                                                <li><a href="blog.html">Our Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li> */}
                        {/* <li><a href="contact.html">contacts</a></li> */}
                      </ul>
                    </div>
                    {/* d-none */}
                    <div className="header-action d-none d-md-block">
                      <ul>
                        {/* <li className="d-none d-xl-block">
                        <div className="footer-search">
                          <form action="#">
                            <input type="text" placeholder="Find Favorite Movie" />
                            <button><i className="fas fa-search" /></button>
                          </form>
                        </div>
                      </li> */}
                        <li className="header-lang">
                          <form action="#">
                            <div className="icon"><i className="flaticon-globe" /></div>
                            <select id="lang-dropdown">
                              <option value>En</option>
                              <option value>Au</option>
                              <option value>AR</option>
                              <option value>TU</option>
                            </select>
                          </form>
                        </li>
                        {user?.userType == 'MpUser' &&
                          <li className="header-btn">
                            <a className="btn " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Profile
                            </a>
                          </li>}
                        {user?.userType == 'model' &&
                          <li className="header-btn">
                            <Link className="btn " to="/dashboard" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Dashboard
                            </Link>
                          </li>}
                        {user?.userType == 'admin' &&
                          <li className="header-btn">
                            <Link className="btn " to="/admin" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Admin Backend
                            </Link>
                          </li>}
                        {user.token ? <li className="header-btn"><a onClick={logOut} href="#" className="btn">Logout</a></li> : <li className="header-btn"><Link to="/userlogin" href="#" className="btn">Sign In</Link></li>}
                        {!user.token && <li className="header-btn"><Link to="/registernow" className="btn">Register</Link></li>}

                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <div className="close-btn"><i className="fas fa-times" /></div>
                  <nav className="menu-box">
                    <div className="nav-logo"><a href="index.html"><img src="https://themebeyond.com/html/movflx/img/logo/logo.png" alt="" title /></a>
                    </div>
                    <div className="menu-outer">
                      {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li><a href="#"><span className="fab fa-twitter" /></a></li>
                        <li><a href="#"><span className="fab fa-facebook-square" /></a></li>
                        <li><a href="#"><span className="fab fa-pinterest-p" /></a></li>
                        <li><a href="#"><span className="fab fa-instagram" /></a></li>
                        <li><a href="#"><span className="fab fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header