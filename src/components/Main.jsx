import GayImage from '../assets/image/gay.png'
import HeaderBackground from '../assets/image/bg.jpg'
import Movies from './Movies'

function Main() {
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
                  RentAGay{" "}
                  <span style={{ fontSize: "13px", color: "white" }}>
                    PRESENTS:
                  </span>{" "}
                </h6>
                <h2
                  className="title"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  ZE[D]{" "}
                  <span>
                    {" "}
                    <br />
                    The Inglorious Bastard
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
                <a
                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                  className="banner-btn btn popup-video"
                  data-animation="fadeInUp"
                  data-delay=".8s"
                >
                  <i className="fas fa-play" /> Watch Now
                </a>
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
  {/* slider-area-end */}
  {/* up-coming-movie-area */}
  {/*?php  include('./components/movies.php')?*/}
  {/* up-coming-movie-area-end */}
  {/* gallery-area */}
  <div className="gallery-area position-relative">
    <div className="gallery-bg" />
    <div className="container-fluid p-0 fix">
      <div className="row gallery-active">
        <div className="col-12">
          <div className="gallery-item">
            <img src="assets/image/cola.jpg" alt="" />
          </div>
        </div>
        <div className="col-12">
          <div className="gallery-item">
            <img src="assets/image/alex.png" alt="" />
          </div>
        </div>
        <div className="col-12">
          <div className="gallery-item">
            <img src="assets/image/arychoco.jpg" alt="" />
          </div>
        </div>
        <div className="col-12">
          <div className="gallery-item">
            <img src="assets/image/zed.png" alt="" />
          </div>
        </div>
        <div className="col-12">
          <div className="gallery-item">
            <img src="assets/image/sweetcandy.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="slider-nav" />
  </div>
  <Movies/>
  <section
    className="services-area services-bg-two"
    data-background="https://themebeyond.com/html/movflx/img/bg/services_bg02.jpg"
  >
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 order-0 order-lg-2">
          <div className="services-img-wrap">
            <img
              src="https://themebeyond.com/html/movflx/img/images/services_img02.jpg"
              alt=""
            />
            <a
              href="https://themebeyond.com/html/movflx/img/images/services_img02.jpg"
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
              <h2 className="title">Download Your Shows Watch Offline.</h2>
            </div>
            <div className="services-list">
              <ul>
                <li>
                  <div className="icon">
                    <i className="flaticon-television" />
                  </div>
                  <div className="content">
                    <h5>Enjoy on Your TV.</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="flaticon-video-camera" />
                  </div>
                  <div className="content">
                    <h5>Watch Everywhere.</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
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
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title title-style-three text-center mb-70">
            <span className="sub-title">our pricing plans</span>
            <h2 className="title">Our Pricing Strategy</h2>
          </div>
        </div>
      </div>
      <div className="pricing-box-wrap">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="pricing-box-item mb-30">
              <div className="pricing-top">
                <h6>premium</h6>
                <div className="price">
                  <h3>$7.99</h3>
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
                    <i className="fas fa-check" /> Screens you can watch{" "}
                    <span>1</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Cancel anytime
                  </li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a href="#" className="btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="pricing-box-item active mb-30">
              <div className="pricing-top">
                <h6>standard</h6>
                <div className="price">
                  <h3>$9.99</h3>
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
                    <i className="fas fa-check" /> Screens you can watch{" "}
                    <span>2</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Cancel anytime
                  </li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a href="#" className="btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="pricing-box-item mb-30">
              <div className="pricing-top">
                <h6>premium</h6>
                <div className="price">
                  <h3>$11.99</h3>
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
                    <i className="fas fa-check" /> Screens you can watch{" "}
                    <span>4</span>
                  </li>
                  <li>
                    <i className="fas fa-check" /> Cancel anytime
                  </li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a href="#" className="btn">
                  Buy Now
                </a>
              </div>
            </div>
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