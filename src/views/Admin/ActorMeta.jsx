import { useEffect,useState } from "react"
import {GET_ACTOR_META,UPDATE_ACTOR_META} from 'queries'
import {apolloClient} from 'index'
import {useParams} from 'react-router-dom';
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'


function ActorMeta() {

let [isLoading,setLoading] = useState(false)
let [meta,setMeta] = useState({
  stripChatUsername:null,
  stripChatCompanyShare:50,
  stripChatRecuiterShare:15,
  stripChatActorShare:30,
  stripChatManagerShare:20
})
const params = useParams();
const alertUser = useAlert()


  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: GET_ACTOR_META,
          variables: {
            id:params.id
          },
          fetchPolicy:'no-cache'
        })
        console.log(data.getActorMeta)
        if(data.getActorMeta?.actorMeta){ 
          setMeta(data.getActorMeta.actorMeta)
        }
       setLoading(false)

      }catch(e) {
        setLoading(false)
        // alert(e.message)
      }
    })()
  },[])

  const setMetaValues = (e,key) => {
    console.log(key)
    console.log(meta)
    setMeta({ ... meta , [key]:e.target.value })
  } 

  const updateActorMeta = async () => {
    try{ 
      console.log(meta)
      let perTest1 = Number(meta.stripChatActorShare) 
        + Number(meta.stripChatManagerShare) 
        + Number(meta.stripChatCompanyShare)
      let perTest2 = Number(meta.stripChatRecuiterShare) 
      console.log(perTest1)
      if(perTest1 != 100) return alertUser.error("Percentages are messed up")
      if(perTest2 > 50) return alertUser.error("Recuiter share cannot be grater than 50")

      setLoading(true)
      let {data,errors} = await apolloClient.mutate({
        mutation: UPDATE_ACTOR_META,
        variables: {
          id: params.id,
          stripChatUsername: meta.stripChatUsername,
          stripChatCompanyShare:Number(meta.stripChatCompanyShare),
          stripChatRecuiterShare:Number(meta.stripChatRecuiterShare),
          stripChatActorShare:Number(meta.stripChatActorShare),
          stripChatManagerShare:Number(meta.stripChatManagerShare)
        }
        // fetchPolicy:'no-cache'
      })
      console.log(data,"asdas")
      if(data.UpdateActorMeta) {
        setMeta(data.UpdateActorMeta.actorMeta)
      }
      setLoading(false)
      alertUser.success('Updated successfully')
    }catch(e) {
      console.log(e)
      setLoading(false)
      alert(e)
    }
  }
  return (
    <div className="container w-full mx-auto pt-20">
        { isLoading && <Loader/>}
      <div className="w-full px-4 md:px-0 md:mt-8  text-gray-800 leading-normal">
          <div className="p-4  justify-center items-center">
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stripchat Username</label>
              <input type="text" value={meta.stripChatUsername} onChange={e => setMetaValues(e,'stripChatUsername')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            { meta.stripChatUsername != null && 
              <div>
                  <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stripchat Company Share</label>
                  <input type="number" value={meta.stripChatCompanyShare} onChange={e => setMetaValues(e,'stripChatCompanyShare')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stripchat Recuiter Share</label>
                  <input type="number" value={meta.stripChatRecuiterShare} onChange={e => setMetaValues(e,'stripChatRecuiterShare')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stripchat Actor Share</label>
                  <input type="number" value={meta.stripChatActorShare} onChange={e => setMetaValues(e,'stripChatActorShare')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stripchat Manager Share</label>
                  <input type="number" value={meta.stripChatManagerShare} onChange={e => setMetaValues(e,'stripChatManagerShare')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
              </div>
            }
            {/* <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input  value={meta.xham} onChange={e => setMetaValues(e,'xham')} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
            </div> */}
            <br/>
            <button onClick={updateActorMeta} className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
        </div>
      </div>
    </div>
  )
}

export default ActorMeta