import { useRef ,useState ,useEffect } from "react"
import { useAlert } from 'react-alert'
import {GET_TEAM_ADMINS} from 'queries'
import Loader from 'components/UI/Loader'
import {apolloClient} from 'index'


function TeamAdminSelector(props) {
  const alertUser = useAlert()
  let [isLoading,setLoading] = useState(false)
  let [allAdmins,setAllAdmins] = useState([])

  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: GET_TEAM_ADMINS,
          fetchPolicy:'no-cache'
        })
        setAllAdmins(data.getAllTeamManagers)
       setLoading(false)

      }catch(e) {
        setLoading(false)
        alert(e.message)
      }
    })()
  },[])


  let admin = useRef('')
  const add = () =>{
    props.add({
      adminId:admin.current.value,
    })
  }
  return (
  <div>
    { isLoading && <Loader/>}
   <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <center className="mt-4">{props.activeTeam.name}</center> 
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                     Team Admin
                  </label>
                </div>
                <div className="md:w-2/3">
                <select ref={admin} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    {allAdmins.map((source)=>{
                      return <option key={source.id} value={source.id}>{source.name}</option>
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button onClick={add} type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Update Team Admin for <b>{props.activeTeam.name}</b></button>
              <button onClick={()=>{props.toggle(false)}} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeamAdminSelector