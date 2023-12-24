import { Player } from 'video-react';
import {apolloClient} from 'index'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect, useRef, useState } from 'react';
import { USER_TYPES } from 'constants'
import {GET_VIDEO_DATA} from 'queries'
import { getUrl } from 'helpers'
import { useAlert } from 'react-alert'

function VideoPlayer(props) {

  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })
  const alertUser = useAlert()
  const playerRef = useRef()
  const [poster,setPoster] = useState(getUrl(props.poster))
  const [videoUrl,setVideoUrl] = useState('https://storage.googleapis.com/mazuproductions/1222%20(1).mp4')
  const [playedUpdated,setPlayerUpdated] = useState(false)

  const getVideoData = async () => {
    try {
      let { data, errors } = await apolloClient.query({
        query: GET_VIDEO_DATA,
        variables: {
          videoId: String(props.id)
        },
        fetchPolicy: 'no-cache'
      })
      console.log(data.getMPVideoData)
      // setPoster(`https://storage.googleapis.com/mazuproductions/${data.getMPVideoData.potrait}`)
      setVideoUrl(data.getMPVideoData.cloudUrl)
      
      
    } catch (e) {
      // alert(e)
      alertUser.show(e.message)
    }
  }
//getMPVideoData
  useEffect(()=>{
    (async ()=>{
      let userType = user.userType
      if(userType == USER_TYPES.MP_USER) {
        await getVideoData()
      }
      setPlayerUpdated(true)
      // playerRef.current.load()
      setTimeout(()=>{
        playerRef.current.play()
      },500)
    })()
  },[])
  return (
    <>
      {playedUpdated ? 
      <Player
        ref={playerRef}
        poster={poster}
        fluid={false}
        autoPlay={true}
        width={'100%'}
        height={350}
      >
      <source src={videoUrl} />
      </Player> : <center>Loading Please wait ...</center>
      }
    </>
  )
}

export default VideoPlayer