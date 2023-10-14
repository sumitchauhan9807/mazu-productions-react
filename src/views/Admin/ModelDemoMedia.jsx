import { useEffect, useState } from "react";
import { GET_ACTOR_MEDIA_ADMIN } from "queries";
import { apolloClient } from "index";
import { useParams } from "react-router-dom";
import UserMedia from 'views/Admin/Components/UserMedia'
import Loader from 'components/UI/Loader'

function ModelDemoMedia() {

  const params = useParams();
  let [mediaData,setMediaData] = useState({})
  const [isLoading,setLoading] = useState(false)
  
  useEffect(() => {
    (async ()=>{
      try {
        setLoading(true)
        let { data } = await apolloClient.query({
          query: GET_ACTOR_MEDIA_ADMIN,
          variables: {
            id: params.id,
          },
          fetchPolicy: "no-cache",
        });
        if(data.getActorMediaById) {
          setMediaData(data.getActorMediaById)
        }
        setLoading(false)
      }catch(e) {
        setLoading(false)
        alert(e)
      }
    })()
  }, []);

  if(!mediaData.mediaGallery) return <Loader/>
  return (
    <>
    {isLoading && <Loader/>}
      <div className="flex-1 p-4">
        <UserMedia
        mediaData={mediaData}
        />
      </div>
    </>
  );
}

export default ModelDemoMedia;

