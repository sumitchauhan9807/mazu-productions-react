import { Player } from 'video-react';
import {apolloClient} from 'index'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect, useRef, useState } from 'react';
import { USER_TYPES } from 'constants'
import {GET_VIDEO_DATA} from 'queries'
function VideoPlayer({id}) {

  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })
  const playerRef = useRef()
  const [poster,setPoster] = useState('https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg')
  const [videoUrl,setVideoUrl] = useState('https://media.w3.org/2010/05/sintel/trailer_hd.mp4')

  const getVideoData = async () => {
    try {
      let { data, errors } = await apolloClient.query({
        query: GET_VIDEO_DATA,
        variables: {
          videoId: String(id)
        },
        fetchPolicy: 'no-cache'
      })
      console.log(data.getMPVideoData)
      setPoster(`https://storage.googleapis.com/mazuproductions/${data.getMPVideoData.potrait}`)
      setVideoUrl(data.getMPVideoData.cloudUrl)
      console.log(playerRef,"playerRef")
      playerRef.current.load()
    } catch (e) {
      alert(e)
    }
  }
//getMPVideoData
  useEffect(()=>{
    let userType = user.userType
    if(userType == USER_TYPES.MP_USER) {
      getVideoData()
    }
	},[])
  return (
    <Player
    ref={playerRef}
    poster={poster}
  >
    <source src={videoUrl} />
  </Player>
  )
}

export default VideoPlayer