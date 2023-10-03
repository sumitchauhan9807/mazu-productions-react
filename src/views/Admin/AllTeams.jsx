import AddTeam from 'views/Admin/Components/AddTeam'
import {useState} from 'react'
import {CREATE_TEAM} from 'queries'
import {apolloClient} from 'index'
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'


function AllTeams() {
  let [addTeamModel,toggleAddTeamModal] = useState(false)
  let [isLoading,setLoading] = useState(false)
  const alertUser = useAlert()
  
  const addTeam = async (data) => {
    try {
      setLoading(true)
      const { data, errors } = await apolloClient.mutate({
        mutation: CREATE_TEAM,
        variables: {
          name:data.name,
        },
      });
      setLoading(false)
      if(data.createTeam){
        alertUser.success('Team Added Successfully')
        toggleAddTeamModal(false)
      }
    }catch(e) {
      setLoading(false)
      alert(e)
    }
    console.log(data)
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
        {}
        <div className="p-4 flex justify-center items-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
            <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                  Team name
                </th>
                <th scope="col" className="px-6 py-3">
                  Managers
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-600 border-b border-blue-400">
                <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4 bg-blue-500">
                  <a href="#" className="font-medium text-white hover:underline">View Team Managers</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AllTeams