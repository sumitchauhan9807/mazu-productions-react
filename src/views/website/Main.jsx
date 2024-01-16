import GayImage from 'assets/image/gay.jpg'
import HeaderBackground from 'assets/image/bg.jpg'

import Alex from 'assets/image/alex.png'
import Ary from 'assets/image/arychoco.jpg'
import Cola from 'assets/image/cola.jpg'
import Zed from 'assets/image/zed.png'
import SweetCandy from 'assets/image/sweetcandy.jpg'
import SweetCandy1 from 'assets/image/catpng.png'
import Mockup from 'assets/image/mockup.jpg'

import PorntoolMovies from 'components/porntool-movies'
import CarsalSilder from 'components/Casliders'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

function NextArrow() {
  return <span class="slick-next">Next <i class="fas fa-caret-right"></i></span>
}
function PreviousArrow() {
  return <span class="slick-prev"><i class="fas fa-caret-left"></i> previous</span>
}
function Main() {
  var settings = {
    className:'row gallery-active',
    centerMode: true,
    centerPadding: '350px',
    slidesToShow: 1,
    infinite: true,
      speed: 500,
    prevArrow: <PreviousArrow/>,
    nextArrow: <NextArrow/>,
    appendArrows: ".slider-nav",
    arrows:true,
    
    autoplay:true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '220px',
          infinite: true,
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '180px',
          infinite: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '160px',
          arrows: false,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: '60px',
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
          arrows: false,
        }
      },
    ]
  };
  return (
    <main>
  {/* slider-area */}
  <section
    className="slider-area slider-bg"
    style={{backgroundImage:`url(${HeaderBackground})`}}
  >
    <div className="slider-active">
      {/* <div class="slider-item">
								<div class="container">
										<div class="row align-items-center">
												<div class="col-lg-6 order-0 order-lg-2">
														<div class="slider-img text-center text-lg-right" data-animation="fadeInRight" data-delay="1s">
																<img src="https://themebeyond.com/html/movflx/img/banner/slider_img01.jpg" alt="">
														</div>
												</div>
												<div class="col-lg-6">
														<div class="banner-content">
																<h6 class="sub-title" data-animation="fadeInUp" data-delay=".2s">Movflx</h6>
																<h2 class="title" data-animation="fadeInUp" data-delay=".4s">Unlimited <span>Movie</span>, TV Shows, & More.</h2>
																<div class="banner-meta" data-animation="fadeInUp" data-delay=".6s">
																		<ul>
																				<li class="quality">
																						<span>Pg 18</span>
																						<span>hd</span>
																				</li>
																				<li class="category">
																						<a href="#">Romance,</a>
																						<a href="#">Drama</a>
																				</li>
																				<li class="release-time">
																						<span><i class="far fa-calendar-alt"></i> 2021</span>
																						<span><i class="far fa-clock"></i> 128 min</span>
																				</li>
																		</ul>
																</div>
																<a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="banner-btn btn popup-video" data-animation="fadeInUp" data-delay=".8s"><i class="fas fa-play"></i> Watch Now</a>
														</div>
												</div>
										</div>
								</div>
						</div> */}
      <div className="slider-item">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-0 order-lg-2">
              <div
                className="slider-img text-center text-lg-right"
                data-animation="fadeInRight"
                data-delay="1s"
              >
                <img
                  src={GayImage}
                  alt=""
                  className="shannresponsive-image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-content">
                <h6
                  className="sub-title"
                  data-animation="fadeInUp"
                  data-delay=".2s"
                >
                  Cuba Nuevo{" "}
                  <span style={{ fontSize: "13px", color: "white" }}>
                    PRESENTS:
                  </span>{" "}
                </h6>
                <h2
                  className="title"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                 Cuba Nuevo{" "}
                  <span className='font-bold'>
                    {" "}
                    <br />
                    The Mask Wanker
                  </span>{" "}
                </h2>
                <div
                  className="banner-meta"
                  data-animation="fadeInUp"
                  data-delay=".6s"
                >
                  <ul>
                    <li className="quality">
                      <span>Pg 18</span>
                      <span>hd</span>
                    </li>
                    <li className="category">
                      <a href="#">Gay,</a>
                      <a href="#">Porn</a>
                    </li>
                    <li className="release-time">
                      <span>
                        <i className="far fa-calendar-alt" /> 2023
                      </span>
                      <span>
                        <i className="far fa-clock" /> 15 min
                      </span>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/video/696"
                  className="banner-btn btn popup-video"
                  data-animation="fadeInUp"
                  data-delay=".8s"
                >
                  <i className="fas fa-play" /> Watch Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="slider-item">
								<div class="container">
										<div class="row align-items-center">
												<div class="col-lg-6 order-0 order-lg-2">
														<div class="slider-img text-center text-lg-right" data-animation="fadeInRight" data-delay="1s">
																<img src="https://themebeyond.com/html/movflx/img/banner/slider_img03.jpg" alt="">
														</div>
												</div>
												<div class="col-lg-6">
														<div class="banner-content">
																<h6 class="sub-title" data-animation="fadeInUp" data-delay=".2s">Movflx</h6>
																<h2 class="title" data-animation="fadeInUp" data-delay=".4s">Unlimited <span>Movie</span>, TV Shows, & More.</h2>
																<div class="banner-meta" data-animation="fadeInUp" data-delay=".6s">
																		<ul>
																				<li class="quality">
																						<span>Pg 18</span>
																						<span>hd</span>
																				</li>
																				<li class="category">
																						<a href="#">Romance,</a>
																						<a href="#">Drama</a>
																				</li>
																				<li class="release-time">
																						<span><i class="far fa-calendar-alt"></i> 2021</span>
																						<span><i class="far fa-clock"></i> 120 min</span>
																				</li>
																		</ul>
																</div>
																<a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="banner-btn btn popup-video" data-animation="fadeInUp" data-delay=".8s"><i class="fas fa-play"></i> Watch Now</a>
														</div>
												</div>
										</div>
								</div>
						</div> */}
    </div>
  </section>
  <PorntoolMovies/>

  {/* <CarsalSilder/> */}

  {/* slider-area-end */}
  {/* up-coming-movie-area */}
  {/*?php  include('./components/movies.php')?*/}
  {/* up-coming-movie-area-end */}
  {/* gallery-area */}

  <div className='bg-gray-900'   style={{backgroundImage:`url(${HeaderBackground})`,  backgroundSize: 'cover', backgroundPosition: 'center'}}>
  <CarsalSilder/>
  </div>
  
  {/* <div className="gallery-area position-relative  bg-gray-900"  >
    
<CarsalSilder/>
  <div className="gallery-bg"></div>
    <div className="container-fluid p-0 fix  mx-auto justify-center items-center">
      
      <Slider {...settings}>
        <div className="col-10">
          <div className="gallery-item">
            <img src={Alex} alt=""  c />
          </div>
          
        </div>
        <div className="col-10">
          <div className="gallery-item">
          <img src={Ary} alt="" />
          </div>
        </div>
        <div className="col-10">
          <div className="gallery-item">
          <img src={Cola} alt="" />
          </div>
        </div>
        <div className="col-10">
          <div className="gallery-item">
          <img src={Zed} alt="" />
          </div>
        </div>
        <div className="col-10">
          <div className="gallery-item">
          <img src={SweetCandy} alt="" />
          </div>
        </div>
      </Slider>

      <div className="slider-nav"></div>
    </div>
    
  </div> */}
  <section
    className="services-area services-bg-two"
    data-background="https://themebeyond.com/html/movflx/img/bg/services_bg02.jpg"
    style={{backgroundImage:`url(https://themebeyond.com/html/movflx/img/bg/services_bg02.jpg)`}}
  >
    <div className="container -mt-36">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 order-0 order-lg-2">
          <div className="services-img-wrap">
            <img
              src={Mockup}
              alt=""
            />
            <a
              href=""
              className="download-btn"
              download
            >
              Download <img src="fonts/download.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="services-content-wrap">
            <div className="section-title mb-40">
              <span className="sub-title">ONLINE STREAMING</span>
              <h2 className="title">Mobile App Coming Soon..</h2>
            </div>
            <div className="services-list">
              <ul>
                <li>
                  <div className="icon">
                    <i className="flaticon-television" />
                  </div>
                  <div className="content">
                    <h5>Enjoy Your Favorite Actors Anytime </h5>
                    <p>
                    Discover endless entertainment as you relish the brilliance of your beloved actors at any moment, immersing yourself in their captivating performance
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="flaticon-video-camera" />
                  </div>
                  <div className="content">
                    <h5>Save And Download To Your Mobile Device 




</h5>
                    <p>
                    Conveniently save and download your favorite content to enjoy on the go, directly on your mobile device..
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <section
    className="pricing-area pricing-bg"
    data-background="https://themebeyond.com/html/movflx/img/bg/pricing_bg.jpg"
    style={{backgroundImage:`url(https://themebeyond.com/html/movflx/img/bg/pricing_bg.jpg)`}}
  >
    <div className="px-0 py-16 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-2 lg:py-20 -mt-36">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title title-style-three text-center mb-70">
            <span className="sub-title">our pricing plans</span>
            <h2 className="title">General Subscription</h2>
          </div>
        </div>
      </div>
      <div className="pricing-box-wrap">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="pricing-box-item mb-30">
              <div className="pricing-top">
                <h6>24 months</h6>
                <div className="price">
                  <h3> 6.99 EUR</h3>
                  <span>Monthly</span>
                </div>
              </div>
              <div className="pricing-list">
                <ul>
                  <li className="quality">
                    <i className="fas fa-check" /> Video quality{" "}
                    <span>Good</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Resolution <span>480p</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> 24 months{" "}
                    <span></span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Cancel anytime
                  </li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a href="/fanclub" className="btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="pricing-box-item active mb-30">
              <div className="pricing-top">
                <h6>12 months</h6>
                <div className="price">
                  <h3>9.99 EUR</h3>
                  <span>Monthly</span>
                </div>
              </div>
              <div className="pricing-list">
                <ul>
                  <li className="quality">
                    <i className="fas fa-check" /> Video quality{" "}
                    <span>Better</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Resolution <span>1080p</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> 12 months{" "}
                    <span></span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Cancel anytime
                  </li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a href="/fanclub" className="btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="pricing-box-item mb-30">
              <div className="pricing-top">
                <h6>3 months</h6>
                <div className="price">
                  <h3>12.99 EUR</h3>
                  <span>Monthly</span>
                </div>
              </div>
              <div className="pricing-list">
                <ul>
                  <li className="quality">
                    <i className="fas fa-check" /> Video quality{" "}
                    <span>Best</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Resolution{" "}
                    <span>4K+HDR</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> 3 months{" "}
                    <span></span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Cancel anytime
                  </li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a href="/fanclub" className="btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="pricing-box-item mb-30">
              <div className="pricing-top">
                <h6>1 Month</h6>
                <div className="price">
                  <h3>14.99 EUR</h3>
                  <span>Monthly</span>
                </div>
              </div>
              <div className="pricing-list">
                <ul>
                  <li className="quality">
                    <i className="fas fa-check" /> Video quality{" "}
                    <span>Best</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Resolution{" "}
                    <span>4K+HDR</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Monthly{" "}
                    <span></span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Cancel anytime
                  </li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a href="/fanclub" className="btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* <div className="relative lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div> */}
        {/* <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Your new ideal style
          </h5>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Lorem ipsum</span> dolor sit amet,
            consectetur adipiscing elit. Etiam sem neque, molestie sit amet
            venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,
            sed consequat odio sollicitudin.
          </p>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn More
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div> */}
      </div>
        </div>
      </div>
    </div>
  </section>
  {/* pricing-area-end */}
</main>

  )
}

export default Main