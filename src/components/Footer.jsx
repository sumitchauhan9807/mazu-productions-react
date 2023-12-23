import logo from '../assets/image/mazuproductionslogo.png'
import {Link} from "react-router-dom"; 
function Footer () {
  return (
    <footer>
    <div className="footer-top-wrap bg-gray-900" >
      <div className="container">
        <div className="footer-menu-wrap">
          <div className="flex flex-wrap">
            <div className="col-lg-3">
              <div className="footer-logo">
                <Link to="/"><img src={logo} style={{height: '50px'}} alt="" /></Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="footer-menu">
                <nav className='flex flex-wrap'>
                  <ul className=" flex flex-wrap  gap-5">
                    <li><a href="index.html" className='text-yellow-500'>Home</a></li>
                    {/* <li><a href="index.html" className='text-white' >Movie</a></li> */}
                    <li><a href="/category" className='text-white'>Category</a></li>
                    {/* <li><a href="index.html" className='text-white'>pages</a></li> */}
                    <li><a href="/register" className='text-yellow-600'>MODELS NEEDED</a></li>
                  </ul>
                  <div className="footer-search">
                    <form action="#">
                      <input type="text" placeholder="Find Favorite Movie" />
                      <button><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-quick-link-wrap">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="">
                <ul className='flex flex-wrap justify-start items-start gap-5'>
                  <li><a href="#" className='text-white'>FAQ</a></li>
                  <li><a href="#" className='text-white'>Help Center</a></li>
                  <li><a href="/terms" className='text-white'>Terms of Use</a></li>
                  <li><a href="privacy" className='text-white'>Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer-social">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="copyright-text">
              <p>Copyright © 2023. All Rights Reserved By <a href="index.html">DIALOG<span className='text-white'>maxX</span></a></p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="payment-method-img text-center text-md-right">
              {/* <img src="img/images/card_img.png" alt="img" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;