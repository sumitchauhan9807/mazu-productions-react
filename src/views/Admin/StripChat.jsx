import { useEffect,useState } from "react"
import {STRIP_CHAT_DATA,RELEASE_STRIPCHAT_PAYMENT} from 'queries'
import {apolloClient} from 'index'
import {useParams} from 'react-router-dom';
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import Swal from "sweetalert2"
function StripChat() {
let [isLoading,setLoading] = useState(false)
let [meta,setMeta] = useState({
  stripChatUsername:"",
})
const params = useParams();
const alertUser = useAlert()
let [stripChatData,setStripData] = useState({
  earnings:[],
  actor:null
})
const [stripchatAmount, setStripchatAmount] = useState({
  amountPaid:0,
  unpaidAmount:0,
  totalAmount:0
});
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [apiCount,setCount] = useState(0)



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
        if(data.stripChatData) {
          setStripData(data.stripChatData)
          setStripchatAmount(()=>{
            return {
              amountPaid:data.stripChatData.earnings.reduce((acc,currentValue)=>{
                let ret = currentValue.isPaid ? Number(currentValue.totalEarnings) + acc : acc
                return ret
              },0),
              unpaidAmount:data.stripChatData.earnings.reduce((acc,currentValue)=>{
                let ret = !currentValue.isPaid ? Number(currentValue.totalEarnings) + acc : acc
                return ret
              },0),
              totalAmount:data.stripChatData.earnings.reduce((acc,currentValue)=>{
                return Number(currentValue.totalEarnings) + acc 
              },0)
            }
          })
        }
       setLoading(false)
      }catch(e) {
        setLoading(false)
        alertUser.error(e.message)
      }
    })()
  },[apiCount])

  useEffect(()=>{
    console.log(stripChatData,"stripChatData")
  },[stripChatData])

  const releasePayment = async (startDate,endDate) => {
    console.log(startDate)
    console.log(endDate)
    let data = await new Swal({
      title: "Are you sure?",
      text: "Payments will be release between this period!",
      type: "confirm",
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, I am sure!',
      cancelButtonText: "No, cancel it!",
    })
    console.log(data)
    if(!data.isConfirmed) return 
    try {
      setLoading(true)
      let {data,errors} = await apolloClient.query({
        query: RELEASE_STRIPCHAT_PAYMENT,
        variables: {
          id:params.id,
          startDate:startDate,
          endDate:endDate
        },
        fetchPolicy:'no-cache'
      })
      if(data.releaseStripchatPayment) {
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

  
  return (
    <div className="container w-full mx-auto pt-20">
        { isLoading && <Loader/>}
        
        
    <div className="w-full px-4 md:px-0 md:mt-8  text-gray-800 leading-normal">
      <div className="p-4 justify-center items-center pb-4">
      <h3 className="sm:text-3xl text-xl font-medium title-font mb-4 text-gray-900">Stripchat Earnings of {stripChatData?.actor?.username}</h3>
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
              <th scope="col" className="px-6 py-3">
                Release Payment
              </th>
            </tr>
          </thead>
          <tbody>
           {stripChatData.earnings.map((stripData)=>{
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
              <td className="px-6 py-4">
              {!stripData.isPaid && <button onClick={() => { releasePayment(formatDate(stripData.startDate),formatDate(stripData.endDate)) }} className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Release Payment</button> }
              </td>
            </tr>
             )
           })}
          </tbody>
        </table>
          </div>
        </div>
      </div>
      <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400  p-4">
        <span className="font-bold uppercase text-gray-500 mb-4">Unpaid Amount : {stripchatAmount.unpaidAmount}</span> <br/>
        <span className="font-bold uppercase text-gray-500">Paid Amount : {stripchatAmount.amountPaid}</span><br/>
        <span className="font-bold uppercase text-gray-500 mb-4">Total Amount Earned  : {stripchatAmount.totalAmount}</span> 
      </div>
      <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-32 p-4">
      <hr className="mb-6"/>

      <h5 className="font-bold uppercase text-gray-500 mb-4">Release payment for a period</h5>

      Start date  <DatePicker onChange={setStartDate} value={startDate} /> &nbsp;
      End Date  <DatePicker  onChange={setEndDate} value={endDate} />
      <br/>
      <br/>
    <button onClick={() => releasePayment(formatDate(startDate),formatDate(endDate)) } className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Release Payment</button>
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