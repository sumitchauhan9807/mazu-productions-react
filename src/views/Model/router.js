import {Routes , Route, Link } from "react-router-dom";
import React, { useEffect ,useState } from 'react';
import Dashboard from 'views/Model/Dashboard'
import Views from 'views/Model/Views'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import Loader from 'components/UI/Loader'
import {getUrlFT} from 'helpers'
import Earnings from 'views/Model/Earnings'



import {logoutUser,changeUserName} from '../../redux'




function ModelDashboard() {
  console.log("ModelDashboard RENDER")
  const dispatch = useDispatch()
  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })
  const [loading,setLoading] = useState(false)

  if(!user) return <Loader/>
  if(!user.token) {
    window.location.href = '/login'
    return <Loader/>
  }
  if(!user.userData.profileComplete) {
    window.location.href = '/register'
    return <Loader/>
  }
  const logOut = (e) => {
    e.preventDefault()
    setLoading(true)
    dispatch(logoutUser())
    setTimeout(()=>{
      setLoading(false)

      // navigate('/login')
    },1000)
  }

  return (
    <React.Fragment>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <a href="#" title="home">
            <img src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" className="w-32" alt="tailus logo" />
          </a>
        </div>
        <div className="mt-8 text-center">
          <img src={getUrlFT(user.userData.profilePic)} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{user.userData.username}</h5>
          {/* <span className="hidden text-gray-400 lg:block">Admin</span> */}
        </div>
        <ul className="space-y-2 tracking-wide mt-8">
        <li>
            <Link to="/dashboard" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-300 group-hover:text-cyan-300" fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
              </svg>
              <span className="group-hover:text-gray-700">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/earnings" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-300 group-hover:text-cyan-300" fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
              </svg>
              <span className="group-hover:text-gray-700">Earnings</span>
            </Link>
          </li>
          <li>
            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-600 group-hover:text-cyan-600" fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              <span className="group-hover:text-gray-700">Reports</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span className="group-hover:text-gray-700">Other data</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path className="fill-current text-gray-600 group-hover:text-cyan-600" fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <span className="group-hover:text-gray-700">Finance</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <a href="#" onClick={logOut}><span className="group-hover:text-gray-700">Logout</span></a>
        </button>
      </div>
    </aside>
    
      <Routes>
        <Route exact path ="/dashboard" element= {<Dashboard user={user}/>}/> 
        {/* <Route exact path ="/dashboard/views" element= {<Views/>}/>  */}
        <Route exact path ="/dashboard/earnings" element= {<Earnings/>}/> 
      </Routes>
    </React.Fragment>
  )
}

export default ModelDashboard