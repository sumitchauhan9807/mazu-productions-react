import { useEffect, useState } from 'react'
import VideoCard from './Components/UI/VideoCard'
import AddVideo from './Components/AddVideo'
import {apolloClient} from 'index'
import {uploadToCloud} from 'helpers/common'
import {ADD_MODEL_WEB_VIDEO,GET_ALL_ACTOR_WEB_VIDEOS} from 'queries'
import {useParams} from 'react-router-dom';
import { useAlert } from 'react-alert'
import Loader from 'components/UI/Loader'


function ModelVideos() {

  let [addVideoModel,toggleAddVideoModal] = useState(false)
  let [uploadProgress,setUploadProgress] = useState(0)
  let [isLoading,setLoading] = useState(false)
  let [allVideos,setVideos] = useState([])
  let [addedVideos,setAddedVideos] = useState(0)

  const params = useParams();
  const alertUser = useAlert()


  useEffect(()=>{
    
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: GET_ALL_ACTOR_WEB_VIDEOS,
          variables:{
            id: params.id,
          },
          fetchPolicy:'no-cache'
        })
       setLoading(false)
       setVideos(data.getAllActorWebVideos)
      }catch(e) {
        setLoading(false)
        alert(e.message)
      }
    })()
  },[addedVideos])

  const addVideo = async (videoData) => {
    setLoading(true)
    try {
      let uploadData = await uploadToCloud(videoData.cover[0],(progress)=>{
				console.log(progress)
        setUploadProgress(progress)
			},'mazuproductions')
      const { data, errors } = await apolloClient.mutate({
        mutation: ADD_MODEL_WEB_VIDEO,
        variables: {
          source: videoData.source,
          id: params.id,
          name:videoData.name,
          cover:uploadData.filename
        },
      });
      setLoading(false)
      if(data.addWebVideo){
        alertUser.success('Video Added Successfully')
        toggleAddVideoModal(false)
        setAddedVideos(addedVideos+1)
      }
      console.log(data)
      console.log(errors)

    }catch(e) {
      setLoading(false)
      alert(e)
    }
  }
  return (
    <div className="container w-full mx-auto pt-20">
      	{ isLoading && <Loader progress={uploadProgress}/>}
    <div className="w-full px-4 md:px-0 md:mt-8  text-gray-800 leading-normal">
    <center><button onClick={()=>{toggleAddVideoModal(true)}} className="mt-4 text-xl w-1/4 text-white  bg-indigo-600 py-2 rounded-xl shadow-lg">Add New Video</button></center>
      <div className="p-4 flex justify-center items-center">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {allVideos.map((video)=>{
            return <VideoCard video={video}/>
          })}
        {addVideoModel && <AddVideo
          toggleAddVideoModal={toggleAddVideoModal}
          addVideo={addVideo}
        />}
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default ModelVideos

