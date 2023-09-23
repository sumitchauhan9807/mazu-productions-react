import registerBackgroundImage from 'assets/image/bg.jpg';
import {MOD_QUERY} from 'queries'
import {apolloClient} from 'index'
import React ,{useState,useEffect,useRef} from 'react'
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'
import {useDispatch,useSelector} from 'react-redux'
import {setUserData} from '../../redux'
import { useNavigate } from "react-router-dom";
import {getNavigateURL} from 'helpers/index'
// import logo from '../assets/image/mazuproductionslogo.png'




const doLogin = async (emailOrUname,password) => {
  try {
    let result = apolloClient.mutate({
      mutation: MOD_QUERY,
      variables: {
        datingCommunity: 'flirttool.com',
        pin: emailOrUname,
        password: password,
      },
    })
    return result
  }catch(e) {
    throw Error(e)
  }
}

function AdminLogin() {
  let usernameOrEmail = React.createRef();
  let password = React.createRef();
	let [isLoading,setLoading] = useState(false)
  const alertUser = useAlert()
	const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })
  
  
  const loginUser = async () => {
    try {
      setLoading(true)
      let {data,errors} = await doLogin(usernameOrEmail.current.value,password.current.value)
      if(data?.login?.errors) {
        alertUser.error(data.login.errors[0].message)
        setLoading(false)
      }
      if(data.modLogin.moderator) {
        alertUser.success("Logged in successfully")
       

        dispatch(setUserData(data.modLogin.moderator,data.modLogin.token))
        
        setTimeout(()=>{
          window.location.href="/admin"
          setLoading(false)

        },1000)
      }
      

    }catch(e) {
      alertUser.error(e.message)
        setLoading(false)
    }
  }

return(

  <div
    className="flex h-full py-16 w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(${registerBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center',height:'1000px' }}
  >
    { isLoading && <Loader/>}
    <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div className="text-white">
        <div className="mb-8 flex flex-col items-center">
        {/* <img src={logo} style={{height: '50px'}} alt="Logo" /> */}
        <h1 className='text-3xl font-sans font-bold'> <span className='y text-yellow-400'>A</span>DMIN LOGIN</h1>
         
          <span className="text-gray-300 mt-3">Enter Login Details</span>
        </div>
          <div className="mb-4 text-lg">
            <input
              className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="name"
              placeholder="Username"
              ref={usernameOrEmail}
            />
          </div>
          <div className="mb-4 text-lg">
            <input
              className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="Password"
              name="name"
              placeholder="*********"
              ref={password}

            />
          </div>
          <div className="mt-8 flex justify-center text-lg text-black">
            <button
            onClick={loginUser}
              type="button"
              className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
            >
              Login
            </button>
          </div>
      </div>
    </div>
  </div>

)



}

export default AdminLogin