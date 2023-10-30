import Header from './components/Header'
import {useEffect, useState} from 'react'
import {GET_ACTOR_PAYOUTS} from 'queries'
import {apolloClient} from 'index'
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'

function Earnings() {
  let [isLoading,setLoading] = useState(false)
  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: GET_ACTOR_PAYOUTS,
          fetchPolicy:'no-cache'
        })
        
       setLoading(false)

      }catch(e) {
        setLoading(false)
        alert(e.message)
      }
    })()
  },[])

  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <Header name='Earnings'/>
      <div className="px-6 pt-6 2xl:container">
        \asdasdasdas
        </div>
    </div>
  
  )
}


export default Earnings