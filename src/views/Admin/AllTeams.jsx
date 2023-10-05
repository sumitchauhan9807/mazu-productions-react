import AddTeam from 'views/Admin/Components/AddTeam'
import AddUser from 'views/Admin/Components/AddUser'
import TeamAdminSelector from 'views/Admin/Components/TeamAdminSelector'

import {useEffect, useState} from 'react'
import {CREATE_TEAM,GET_ALL_TEAMS,UPDATE_TEAM_ADMIN} from 'queries'
import {apolloClient} from 'index'
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'



function AllTeams() {
  let [addTeamModel,toggleAddTeamModal] = useState(false)
  

  let [allTeams,setAllTeams] = useState([])
  let [isLoading,setLoading] = useState(false)
  let [added,setAdded] = useState(0)
  let [updateTeamAdminModel,toggleUpdateAdminModel] = useState(false)
  let [activeTeam,setActiveTeam] = useState(null)



  const alertUser = useAlert()

  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: GET_ALL_TEAMS,
          fetchPolicy:'no-cache'
        })
        setAllTeams(data.getAllTeams)
        console.log(data.getAllTeams)
       setLoading(false)

      }catch(e) {
        setLoading(false)
        alert(e.message)
      }
    })()
  },[added])
  
  const addTeam = async (teamData) => {
    try {
      setLoading(true)
      const { data, errors } = await apolloClient.mutate({
        mutation: CREATE_TEAM,
        variables: {
          name:teamData.name,
        },
      });
      setLoading(false)
      if(data.createTeam){
        alertUser.success('Team Added Successfully')
        toggleAddTeamModal(false)
        setAdded(added + 1)
      }
    }catch(e) {
      setLoading(false)
      alert(e)
    }
    console.log(teamData)
  }

  const UpdateTeamAdmin = async (adminData) => { 
    try {
      setLoading(true)
      const { data, errors } = await apolloClient.mutate({
        mutation: UPDATE_TEAM_ADMIN,
        variables: {
          adminId:String(adminData.adminId),
          teamId:String(activeTeam.id)
        },
      });
      setLoading(false)
      if(data.updateTeamAdmin){
        alertUser.success('Admin Updated Successfully')
        toggleUpdateAdminModel(false)
        setAdded(added + 1)
      }
    }catch(e) {
      setLoading(false)
      alert(e)
    }
  }

  return (
    <div className="container w-full mx-auto pt-20">
      <div className="w-full px-4 md:px-0 md:mt-8  text-gray-800 leading-normal">
      { isLoading && <Loader/>}
      <center><button onClick={()=>toggleAddTeamModal(true)} className="mt-4 text-xl w-1/4 text-white  bg-indigo-600 py-2 rounded-xl shadow-lg">Add New Team</button></center>
        {addTeamModel && <AddTeam
        toggleAddTeamModal={toggleAddTeamModal}
        addTeam={addTeam}
        />}

        {updateTeamAdminModel && <TeamAdminSelector
        toggle={toggleUpdateAdminModel}
        add={UpdateTeamAdmin}
        activeTeam={activeTeam}
        />} 
        
        <div className="p-4 flex justify-center items-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
            <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                  Team name
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                  Team admin
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allTeams.map((team)=>{
               return (
                <tr className="bg-blue-600 border-b border-blue-400">
                <td scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                  {team.name}
                </td>
                <td className="px-6 py-4 bg-blue-500">
                  {team.admin ? team.admin.name : '--'}
                </td>
                  <td className="px-6 py-4 bg-blue-500">
                    <Link to={`/admin/team/managers/${team.id}`} className="font-medium text-white hover:underline">View Team Managers</Link> &nbsp;
                    <button onClick={()=>{toggleUpdateAdminModel(true); setActiveTeam(team)} } class="font-medium text-white hover:underline">Update Team Manger</button>
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

export default AllTeams