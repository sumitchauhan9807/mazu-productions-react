import HeaderBackground from 'assets/image/bg.jpg'
import PorntoolModels from 'components/porntool-models'
import SweetCandy from 'assets/image/catpng.png'
// import HeaderBackground from '../../assets/image/bg.jpg'
import {useParams} from 'react-router-dom';
function Actor() {
  const params = useParams();
  let prefrence = params.id
  return (
    <main>
      {/* breadcrumb-area */}
      <section
        className="breadcrumb-area breadcrumb-bg object-cover"
        // data-background="img/bg/breadcrumb_bg.jpg"
        style={{backgroundImage:`url(${SweetCandy})`}}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">
                   {prefrence}
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Movie
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb-area-end */}
      {/* movie-area */}
      <section
        className="movie-area movie-bg"
        data-background="assets/image/bg.jpg"
        style={{backgroundImage:`url(${HeaderBackground})`}}
      >
        <div className="container">
          <div className="row tr-movie-active">
            <PorntoolModels prefrence={prefrence}/>
          </div>
        </div>
      </section>
      {/* movie-area-end */}
      {/* newsletter-area */}
      <section
        className="newsletter-area newsletter-bg"
        data-background="img/bg/newsletter_bg.jpg"
      >
        {/* <div className="container">
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
        </div> */}
      </section>
      {/* newsletter-area-end */}
    </main>

  )
}

export default Actor