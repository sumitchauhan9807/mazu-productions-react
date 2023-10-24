function VideoUpdates({videoData}) {
  console.log(videoData,"videoData")
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
                Update Earnings
              </th>
            </tr>
          </thead>
          <tbody>
            {videoData.map((data,index)=>{
              return (
                <tr key={index}>
                  <td className="px-6 py-4">
                   {data.earnings}
                  </td>
                  <td className="px-6 py-4">
                  {data.bonus}
                  </td>
                  <td className="px-6 py-4">
                  {data.views}
                  </td>
                  <td className="px-6 py-4">
                  {formatDate(data.earningDate)}
                  </td>
                  <td className="px-6 py-4">
                  <button  type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Update</button>
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