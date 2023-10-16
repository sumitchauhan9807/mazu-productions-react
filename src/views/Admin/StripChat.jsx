import { useEffect,useState } from "react"
import {STRIP_CHAT_DATA} from 'queries'
import {apolloClient} from 'index'
import {useParams} from 'react-router-dom';
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';


function StripChat() {

let [isLoading,setLoading] = useState(false)
let [meta,setMeta] = useState({
  stripChatUsername:"",
})
const params = useParams();
const alertUser = useAlert()
let [stripChatData,setStripData] = useState([])
const [startDate, setStartDate] = useState(new Date('2023-10-01'));
const [endDate, setEndDate] = useState(new Date());



  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: STRIP_CHAT_DATA,
          variables: {
            id:params.id,
          },
          fetchPolicy:'no-cache'
        })
        setStripData(data.stripChatData)
       
       setLoading(false)

      }catch(e) {
        setLoading(false)
        alertUser.error(e.message)
      }
    })()
  },[startDate,endDate])

  useEffect(()=>{
    console.log(stripChatData,"stripChatData")
  },[stripChatData])

  
  return (
    <div className="container w-full mx-auto pt-20">
        { isLoading && <Loader/>}
      <div className="w-full px-4 md:px-0 md:mt-8  text-gray-800 leading-normal">
        <div className="p-4 justify-center items-center">
      <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      {/* Start date  <DatePicker onChange={setStartDate} value={startDate} /> &nbsp;
      End Date  <DatePicker  onChange={setEndDate} value={endDate} />
      <br/>
      <br/>
    <button  className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Filter</button> */}
      </div>
      <div className="relative overflow-x-auto mt-12">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Earnings
              </th>
              <th scope="col" className="px-6 py-3">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3">
                End Date
              </th>
            </tr>
          </thead>
          <tbody>
           {stripChatData.map((stripData)=>{
             return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {stripData.totalEarnings}
              </th>
              <td className="px-6 py-4">
               {formatDate(stripData.startDate)}
              </td>
              <td className="px-6 py-4">
               {formatDate(stripData.endDate)}
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

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

export default StripChat