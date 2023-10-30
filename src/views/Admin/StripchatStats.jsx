import { useEffect,useState } from "react"
import {STRIPCHAT_PAYOUTS} from 'queries'
import {apolloClient} from 'index'
import {useParams} from 'react-router-dom';
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const getAmountUSD = (amount) => {
  return amount * 0.05
}
function StripchatStats() {

let [isLoading,setLoading] = useState(false)
let [meta,setMeta] = useState({
  stripChatUsername:"",
})
const params = useParams();
const alertUser = useAlert()
let [stripChatData,setStripData] = useState({
  payouts:[],
  actor:{}
})
const [apiCount,setCount] = useState(0)

  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: STRIPCHAT_PAYOUTS,
          variables: {
            id:params.id,
          },
          fetchPolicy:'no-cache'
        })
        if(data.actorStripchatPayouts) {
          setStripData(data.actorStripchatPayouts)
        }
       setLoading(false)
      }catch(e) {
        setLoading(false)
        alertUser.error(e.message)
      }
    })()
  },[apiCount])

  
  return (
    <div className="container w-full mx-auto pt-20">
        { isLoading && <Loader/>}
    <div className="w-full px-4 md:px-0 md:mt-8  text-gray-800 leading-normal">
      <div className="p-4 justify-center items-center pb-4">
      <center><h3 className="sm:text-3xl text-xl font-medium title-font mb-4 text-gray-900">Stripchat Earnings statistics {stripChatData?.actor?.username}</h3></center>
      <div className="relative overflow-x-auto mt-12">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Amount Released (usd)
              </th>
              <th scope="col" className="px-6 py-3">
                Company Share (usd)
              </th>
              <th scope="col" className="px-6 py-3">
                Actor Share (usd)
              </th>
              <th scope="col" className="px-6 py-3">
                Manager share (usd)
              </th>
              <th scope="col" className="px-6 py-3">
                Recuiter Share (usd)
              </th>
              <th scope="col" className="px-6 py-3">
                Earning Source
              </th>
            </tr>
          </thead>
          <tbody>
            {stripChatData.payouts.map((payout)=>{
              return (
                <tr>
                  <td className="px-6 py-4">
                    {payout.source == 'stripchat' ? getAmountUSD(payout.amount) : payout.amount}
                  </td>
                  <td className="px-6 py-4">
                   {payout.source == 'stripchat' ? getAmountUSD(payout.companyShare) : payout.companyShare}
                  </td>
                  <td className="px-6 py-4">
                   {payout.source == 'stripchat' ? getAmountUSD(payout.actorShare) : payout.actorShare}
                  </td>
                  <td className="px-6 py-4">
                    {payout.source == 'stripchat' ? getAmountUSD(payout.managerShare) : payout.managerShare}
                  </td>
                  <td className="px-6 py-4">
                    {payout.source == 'stripchat' ? getAmountUSD(payout.recuiterShare) : payout.recuiterShare}
                  </td>
                  <td className="px-6 py-4">
                    {payout.source}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StripchatStats