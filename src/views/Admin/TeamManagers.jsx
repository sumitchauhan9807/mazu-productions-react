import AddManager from 'views/Admin/Components/AddUser'
import {useEffect, useState} from 'react'
import {ADD_MANAGER,GET_TEAM_MANAGERS} from 'queries'
import {apolloClient} from 'index'
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'
import {Link, useParams} from 'react-router-dom';


function TeamManagers() {
  let [addManagerModel,toggleAddManagerModal] = useState(false)
  let [allManagers,setAllManagers] = useState({
    manager:[],
    team:{name:""}
  })
  let [isLoading,setLoading] = useState(false)
  let [added,setAdded] = useState(0)

  const alertUser = useAlert()
  const params = useParams();

  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: GET_TEAM_MANAGERS,
          variables: {
            id:params.id
          },
          fetchPolicy:'no-cache'
        })
        setAllManagers(data.getTeamManagers)
        console.log(data.getTeamManagers)
       setLoading(false)

      }catch(e) {
        setLoading(false)
        alert(e.message)
      }
    })()
  },[added])
  
  const addManager = async (managerData) => {
    try {
      setLoading(true)
      const { data, errors } = await apolloClient.mutate({
        mutation: ADD_MANAGER,
        variables: {
          name:managerData.name,
          username:managerData.username,
          email:managerData.email,
          password:managerData.password,
          team:params.id
        },
      });
      setLoading(false)
      if(data.addManager){
        alertUser.success('Team Manager Added Successfully')
        toggleAddManagerModal(false)
        setAdded(added + 1)
      }
    }catch(e) {
      setLoading(false)
      if(e?.message?.includes('duplicate key')) {
        return alertUser.error('This username or email already exists')
      }
      alert(e.message)
    }
    console.log(managerData)
  }

  return (
    <div className="container w-full mx-auto pt-20">
      <div className="w-full px-4 md:px-0 md:mt-8  text-gray-800 leading-normal">
      { isLoading && <Loader/>}
      <center><button onClick={()=>toggleAddManagerModal(true)} className="mt-4 text-xl w-1/4 text-white  bg-indigo-600 py-2 rounded-xl shadow-lg">Add New Manager</button>
      <h2 class="text-2xl font-extrabold dark:text-white mt-4"> Team: {allManagers.team.name}</h2>
      </center>
        {addManagerModel && <AddManager
        toggle={toggleAddManagerModal}
        add={addManager}
        />} 
        {}
        <div className="p-4 flex justify-center items-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
            <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allManagers?.manager.map((manager)=>{
               return (
                <tr className="bg-blue-600 border-b border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                  {manager.username}
                </th>
                <td className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                {manager.name}
                </td>
                <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                  {manager.email}
                </th>
                  <td className="px-6 py-4 bg-blue-500">
                    <Link to={`/admin/team/recuiters/${manager.id}`} className="font-medium text-white hover:underline">View Recuiters</Link>
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

export default TeamManagers