import AddTeam from 'views/Admin/Components/AddTeam'
import AddUser from 'views/Admin/Components/AddUser'
import {useEffect, useState} from 'react'
import {CREATE_TEAM,GET_ALL_TEAMS,ADD_TEAM_ADMIN,GET_TEAM_ADMINS} from 'queries'
import {apolloClient} from 'index'
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'



function TeamAdmins() {
 
  let [addTeamAdminModel,toggleAddTeamAdmin] = useState(false)

  let [allAdmins,setAllAdmins] = useState([])
  let [isLoading,setLoading] = useState(false)
  let [added,setAdded] = useState(0)


  const alertUser = useAlert()

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
  },[added])
  
  const addTeamAdmin = async (teamAdminData) => { 
    try {
      setLoading(true)
      const { data, errors } = await apolloClient.mutate({
        mutation: ADD_TEAM_ADMIN,
        variables: {
          name:teamAdminData.name,
          username:teamAdminData.username,
          email:teamAdminData.email,
          password:teamAdminData.password,
        },
      });
      setLoading(false)
      if(data.addTeamAdmin){
        alertUser.success('Team Admin Added Successfully')
        toggleAddTeamAdmin(false)
        setAdded(added + 1)
      }
    }catch(e) {
      setLoading(false)
      if(e?.message?.includes('duplicate key')) {
        return alertUser.error('This username or email already exists')
      }
      alert(e.message)
    }
    console.log(teamAdminData)
  }

  return (
    <div className="container w-full mx-auto pt-20">
      <div className="w-full px-4 md:px-0 md:mt-8  text-gray-800 leading-normal">
      { isLoading && <Loader/>}
      <center><button onClick={()=>toggleAddTeamAdmin(true)} className="mt-4 text-xl w-1/4 text-white  bg-indigo-600 py-2 rounded-xl shadow-lg">Add New Team Admin</button></center>
        {addTeamAdminModel && <AddUser
        toggle={toggleAddTeamAdmin}
        add={addTeamAdmin}
       />} 
        
        <div className="p-4 flex justify-center items-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
            <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                  Admin name
                </th>
                <th scope="col" className="px-6 py-3">
                  Admin Username
                </th>
                {/* <th scope="col" className="px-6 py-3 bg-blue-500">
                  Action
                </th> */}
              </tr>
            </thead>
            <tbody>
              {allAdmins.map((admin)=>{
               return (
                <tr className="bg-blue-600 border-b border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                  {admin.name}
                </th>
                <td className="px-6 py-4">
                {admin.username}
                </td>
                  {/* <td className="px-6 py-4 bg-blue-500">
                    <button onClick={()=> {toggleAddTeamAdmin(true); setActiveTeam(team)}} className="font-medium text-white hover:underline">Add Team Admin</button>
                  </td> */}
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

export default TeamAdmins