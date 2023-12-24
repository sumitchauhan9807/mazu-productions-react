import {useDispatch,useSelector} from 'react-redux'
import {apolloClient} from 'index'
import Loader from 'components/UI/Loader'
import { useNavigate } from 'react-router';
import {getUrlFT} from 'helpers'
import logo from '../../assets/image/mazuproductionslogo.png'

import {GET_USER_SUBSCRIPTIONS ,USER_PROFILE_PUBLIC} from 'queries'
import { useEffect, useState } from 'react';


function Profile() {
  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })
  console.log(user)
	const navigate = useNavigate();

  useEffect(()=>{
    if(!user.userData) navigate('/userlogin') 
  },[user.userData])
  const [isLoading,setLoading] = useState(false)
  const [userSubscriptions,setUserSubscriptions] = useState([])
  const [hasAllSub,setHasAllSub] = useState(false)

  const getUserData = async (username) => {
    try {
      let {data,errors} = await apolloClient.query({
        query: USER_PROFILE_PUBLIC,
        variables:{
          username:username
        },
        fetchPolicy:'no-cache'
      })
      return data.userProfilePublic
      
    } catch(e) {
      console.log(e)  
    }
  }

  const setSubscriptions = async (allSubscriptions) => {
    try {
      let hasAllSub = allSubscriptions.find(s => s.fanclub == 'all')
      if(hasAllSub) setHasAllSub(true)
      allSubscriptions = allSubscriptions.filter(s => s.fanclub != 'all')
      let dataPromises = []
      allSubscriptions.forEach(sub => {
        dataPromises.push(getUserData(sub.fanclub))
      });
      Promise.allSettled(dataPromises).then((data)=>{
        data = data.map(d =>d?.value)
        setUserSubscriptions(data)
      })
    }catch(e) {
      console.log(e)
    }
  }

  useEffect(()=>{
    (async ()=>{
      try {
        let {data,errors} = await apolloClient.query({
          query: GET_USER_SUBSCRIPTIONS,
          fetchPolicy:'no-cache'
        })
        setLoading(false)
        setSubscriptions(data.getMpUserSubscriptions)
      }catch(e) {
        setLoading(false)
        alert(e.message)
      }
    })()
  },[])
  return (
    <section className="tv-series-area tv-series-bg" data-background="img/bg/tv_series_bg02.jpg" style={{backgroundImage: 'url("https://themebeyond.com/html/movflx/img/bg/tv_series_bg02.jpg")'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Current Dialogmax Subscriptions</span>
                {/* <h2 className="title">World Best TV Series</h2> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {hasAllSub && <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="movie-item mb-50">
                <div className="movie-poster">
                  <a ><img src={logo} alt="" /></a>
                </div>
                <div className="movie-content">
                  <div className="top">
                    <h5 className="title"><a >General Subscription</a></h5>
                    {/* <span className="date">2021</span> */}
                  </div>
                  <div className="bottom">
                    <ul>
                      {/* <li><span className="quality">hd</span></li> */}
                      {/* <li>
                        <span className="duration"><i className="far fa-clock" /> 128 min</span>
                        <span className="rating"><i className="fas fa-thumbs-up" /> 3.5</span>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div> }
            {userSubscriptions.map((subscription)=>{
              return (
                <div className="col-xl-3 col-lg-4 col-sm-6" key={subscription.id}>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a><img src={getUrlFT(subscription.profilePic)} alt="" /></a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title"><a >{subscription.username}</a></h5>
                        {/* <span className="date">2021</span> */}
                      </div>
                      <div className="bottom">
                        <ul>
                          {/* <li><span className="quality">hd</span></li> */}
                          {/* <li>
                            <span className="duration"><i className="far fa-clock" /> 128 min</span>
                            <span className="rating"><i className="fas fa-thumbs-up" /> 3.5</span>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            
          </div>
        </div>
      </section>
  )
}

export default Profile