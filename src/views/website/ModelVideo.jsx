import HeaderBackground from 'assets/image/bg.jpg'
import PorntoolModels from 'components/porntool-models'
import SweetCandy from 'assets/image/catpng.png'
// import HeaderBackground from '../../assets/image/bg.jpg'
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {GET_ALL_ACTORS,GET_MEDIA_INFO} from 'queries'
import {apolloClient} from 'index'
import {getUrl} from 'helpers'

function ModelVideo() {
  const params = useParams();
  let id = params.id
  const [videoData,setVideoData] = useState({})
  useEffect(()=>{
    (async ()=>{
      try {
        let {data,errors} = await apolloClient.query({
          query: GET_MEDIA_INFO,
          variables:{
            media:Number(id)
          },
          fetchPolicy:'no-cache'
        })
        setVideoData(data.getMediaInfo)
      }catch(e){ 

      }
    })()
  },[])
  return (
    <main>
      <section className="movie-details-area" data-background="https://themebeyond.com/html/movflx/img/bg/movie_details_bg.jpg" style={{backgroundImage: 'url("https://themebeyond.com/html/movflx/img/bg/movie_details_bg.jpg")'}}>
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-xl-3 col-lg-4">
              <div className="movie-details-img">
                <img src={getUrl(videoData.potrait)} alt="" />
                <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><img src="https://themebeyond.com/html/movflx/img/images/play_icon.png" alt="" /></a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="movie-details-content">
                <h5>Mazu Productions</h5>
                <h2>{videoData.title} </h2>
                <div className="banner-meta">
                  <ul>
                    <li className="quality">
                      <span>Pg 18</span>
                      <span>hd</span>
                    </li>
                    <li className="category">
                      {videoData?.tags?.map((tag)=>{
                        return (
                          <a href="#">{tag.name},</a>
                         )
                      })}
                    </li>
                    <li className="release-time">
                      <span><i className="far fa-calendar-alt" /> 2021</span>
                      <span><i className="far fa-clock" /> {videoData.duration} min</span>
                    </li>
                  </ul>
                </div>
                <p>{videoData.description}</p>
                <div className="movie-details-prime">
                  <ul>
                    <li className="share"><a href="#"><i className="fas fa-share-alt" /> Share</a></li>
                    <li className="streaming">
                      <h6>Prime Video</h6>
                      <span>Streaming Channels</span>
                    </li>
                    <li className="watch"><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="btn popup-video"><i className="fas fa-play" /> Watch Now</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="movie-details-btn">
              <a href="#" className="download-btn" download>Download <img src="fonts/download.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="movie-area movie-bg"
        data-background="assets/image/bg.jpg"
        style={{backgroundImage:`url(${HeaderBackground})`}}
      >
        <div className="container">
          <div className="row tr-movie-active">
            {/* <PorntoolModels prefrence={prefrence}/> */}
          </div>
        </div>
      </section>
      {/* movie-area-end */}
      {/* newsletter-area */}
      <section className="newsletter-area newsletter-bg" data-background="https://themebeyond.com/html/movflx/img/bg/newsletter_bg.jpg" style={{backgroundImage: 'url("https://themebeyond.com/html/movflx/img/bg/newsletter_bg.jpg")'}}>
        <div className="container">
          <div className="newsletter-inner-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="newsletter-content">
                  <h4>Trial Start First 30 Days.</h4>
                  <p>Enter your email to create or restart your membership.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <form action="#" className="newsletter-form">
                  <input type="email" required placeholder="Enter your email" />
                  <button className="btn">get started</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* newsletter-area-end */}
    </main>

  )
}

export default ModelVideo