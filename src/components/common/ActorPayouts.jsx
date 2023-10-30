function ActorPayouts({payouts}) {
  return (
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
        <th scope="col" className="px-6 py-3">
          Release Date
        </th>
      </tr>
    </thead>
    <tbody>
      {payouts.map((payout)=>{
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
            <td className="px-6 py-4">
              {formatDate(payout.createdAt)}
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}
const getAmountUSD = (amount) => {
  return amount * 0.05
}
function formatDate(date) {
  date = Date(date)
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
console.log(d)
  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}
export default ActorPayouts