import { useEffect, useRef, useState } from "react"

function VideoUpdates({videoData,updateEarningData,updatedapiCount}) {
  
  let earningsRef = useRef("")
  let bonusRef = useRef("")
  let viewsRef = useRef("")

  videoData = videoData.map((vd)=>{
    return {...vd,updating:false}
  })
  let [earnings,setEarnings] = useState(videoData)

  useEffect(()=>{
    setEarnings(videoData)
  },[videoData.length,updatedapiCount])

  const setIsUpdating = (findex) => {
    let UpdateTable = earnings.map((e,index)=>{
      if(index == findex) {
        earningsRef.current = e.earnings
        bonusRef.current = e.bonus
        viewsRef.current = e.views

        return { ...e , updating:true}
      }
      return { ...e , updating:false}
    })
    setEarnings(UpdateTable)
  }
  const cancelUpdate = () => {
    let UpdateTable = earnings.map((e,index)=>{
      return { ...e , updating:false}
    })
    setEarnings(UpdateTable)
  }

  const updateEarning = (index) => {
    let entry = earnings[index]
    updateEarningData({
      id:entry.id,
      earnings:earningsRef.current.value,
      bonus:bonusRef.current.value,
      views:viewsRef.current.value,
      earningDate:entry.earningDate
    })
  }
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Earnings
              </th>
              <th scope="col" className="px-6 py-3">
              Bonus
              </th>
              <th scope="col" className="px-6 py-3">
                Views
              </th>
              <th scope="col" className="px-6 py-3">
                Earning Date
              </th>
              <th scope="col" className="px-6 py-3">
                Release Payment
              </th>
              <th scope="col" className="px-6 py-3">
                Update Earnings
              </th>
            </tr>
          </thead>
          <tbody>
            {earnings.map((data,index)=>{
              return (
                <tr key={index}>
                  <td className="px-6 py-4">
                   {data.updating ? <input ref={earningsRef} defaultValue={earningsRef.current} onChange={(e)=>{e.target.value=earningsRef.current.value}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" placeholder="Earnings" />:data.earnings}
                  </td>
                  <td className="px-6 py-4">
                  {data.updating ? <input ref={bonusRef} defaultValue={bonusRef.current}  onChange={(e)=>{e.target.value=bonusRef.current.value}}  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" placeholder="Bonus" />:data.bonus}
                  </td>
                  <td className="px-6 py-4">
                  {data.updating ? <input ref={viewsRef} defaultValue={viewsRef.current} onChange={(e)=>{e.target.value=viewsRef.current.value}}   className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" placeholder="Views" />:data.views}
                  </td>
                  <td className="px-6 py-4">
                  {formatDate(data.earningDate)}
                  </td>
                  <td className="px-6 py-4">
                  <button   type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Release Payment</button>
                  </td>
                  <td className="px-6 py-4">
                  {data.updating ? 
                  <>
                  <button  onClick={()=>updateEarning(index)} type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Confirm Update</button> 
                  <button  onClick={cancelUpdate} type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Cancel</button> 
                  
                  </>
                  : <button  onClick={()=>setIsUpdating(index)} type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Update</button>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
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
export default VideoUpdates