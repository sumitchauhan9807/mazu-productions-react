import { useEffect, useState } from 'react'
import AddEarning from './Components/AddVideoEarning'
import Loader from 'components/UI/Loader'
import { ADD_WEB_VIDEO_UPDATE ,GET_WEB_VIDEO ,UPDATE_WEB_VIDE_UPDATE ,RELEASE_VIDEO_PAYMENT} from 'queries'
import {useParams} from 'react-router-dom';
import { useAlert } from 'react-alert'
import {apolloClient} from 'index'
import VideoUpdates from 'components/UI/VideoUpdates'

function VideoEarnings(){ 
  console.log("renede")
  let [addEarningModel,toggleAddEarningModel] = useState(false)
  let [isLoading,setLoading] = useState(false)
  const [videoData,setVideoData] = useState({
    video: {},
    updates:[]
  })
  const [apiCount,setCount] = useState(0)
  const [updatedapiCount,setUpdatedapiCount] = useState(0)

  
  const params = useParams();
  const alertUser = useAlert()


  useEffect(()=>{
    (async ()=> {
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: GET_WEB_VIDEO,
          variables: {
            id:params.id,
          },
          fetchPolicy:'no-cache'
        })
        if(data.getWebVideo) {
          data.getWebVideo.updates.forEach((u)=>{
            u.updating = false
          }) 
           setVideoData(data.getWebVideo)
           setUpdatedapiCount((prev)=>{
              return prev + 1
           })
        }
       setLoading(false)
      }catch(e) {
        setLoading(false)
        alertUser.error(e.message)
      }
    })()
  },[apiCount])

  const addEarning = async (earningData) => {
    
    // return 
    try {
      setLoading(true)
      let {data,errors} = await apolloClient.mutate({
        mutation: ADD_WEB_VIDEO_UPDATE,
        variables: {
          id:params.id,
          earnings:earningData.earnings,
          bonus:earningData.bonus,
          earnigDate:earningData.earnigDate,
          views:earningData.views
        },
        fetchPolicy:'no-cache'
      })
      if(data.addWebVideoUpdate) {
        toggleAddEarningModel(false)
        setCount((prev)=>{
          return prev + 1
        })
      }
      setLoading(false)
    }catch(e) {
      setLoading(false)
      alertUser.error(e.message)
    }
  }
  const updateEarningData = async (toUpdateData) => {
    try {
      setLoading(true)
      let {data,errors} = await apolloClient.mutate({
        mutation: UPDATE_WEB_VIDE_UPDATE,
        variables: {
          id:String(toUpdateData.id),
          earnings:toUpdateData.earnings,
          bonus:toUpdateData.bonus,
          views:toUpdateData.views
        },
        fetchPolicy:'no-cache'
      })
      if(data.updateWebVideoUpdate) {
        setCount((prev)=>{
          return prev + 1
        })
        setLoading(false)
      }
    }catch(e) {
      setLoading(false)
      alertUser.error(e.message)
    }
  }

  const releasePayment = async (videoData) => {
    try {
      setLoading(true)
      var date = new Date(videoData.earningDate)
      date.setDate(date.getDate() + 1)
      let {data,errors} = await apolloClient.mutate({
        mutation: RELEASE_VIDEO_PAYMENT,
        variables: {
          videoId:String(params.id),
          startDate:videoData.earningDate,
          endDate:date,
        },
        fetchPolicy:'no-cache'
      })
      if(data.releaseVideoPayment) {
        alertUser.success("payment released successfully")
        setCount((prev)=>{
          return prev + 1
        })
      }
      setLoading(false)

    }catch(e) {
      setLoading(false)
      alertUser.error(e.message)
    }
  }
  if(isLoading) return <Loader />
  return (
    <div className="container w-full mx-auto pt-20">
      {addEarningModel && (
        <AddEarning toggle={toggleAddEarningModel} add={addEarning} />
      )}
    <div className="w-full px-4 md:px-0 md:mt-8  text-gray-800 leading-normal">
      <center>
        <button
          onClick={() => {
            toggleAddEarningModel(true);
          }}
          className="mt-4 text-xl w-1/4 text-white  bg-indigo-600 py-2 rounded-xl shadow-lg"
        >
          Add Earning
        </button>
      </center>
      <div className="container w-full mx-auto">
        <div className="w-full px-4 md:px-0  text-gray-800 leading-normal">
          <div className="p-4 justify-center items-center pb-4">
            <div className="relative overflow-x-auto mt-12">
              {  videoData.updates.length ? <VideoUpdates 
                videoData = {videoData.updates}
                updateEarningData={updateEarningData}
                updatedapiCount={updatedapiCount}
                releasePayment={releasePayment}
              />: <h2>No Earnings Found</h2>}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default VideoEarnings