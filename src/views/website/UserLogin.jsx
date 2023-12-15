import registerBackgroundImage from 'assets/image/bg.jpg';
import {MP_USER_LOGIN} from 'queries'
import {apolloClient} from 'index'
import React ,{useState,useEffect,useRef} from 'react'
import Loader from 'components/UI/Loader'
import { useAlert } from 'react-alert'
import {useDispatch,useSelector} from 'react-redux'
import {setUserData} from '../../redux'
import { Link, useNavigate } from "react-router-dom";
import {getNavigateURL} from 'helpers/index'
// import logo from '../assets/image/mazuproductionslogo.png'

function useDidUpdateEffect(fn, inputs) {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) { 
      return fn();
    }
    didMountRef.current = true;
  }, inputs);
}


const doLogin = async (emailOrUname,password) => {
  try {
    let result = apolloClient.query({
      query: MP_USER_LOGIN,
      variables: {
        username: emailOrUname,
        password: password,
      },
    })
    return result
  }catch(e) {
    throw Error(e)
  }
}

function UserLogin() {
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
  
  useEffect(()=>{
		if(user.userData) {
			navigate("/");
		}
	},[user.userData])
  const loginUser = async () => {
    try {
      setLoading(true)
      let {data,errors} = await doLogin(usernameOrEmail.current.value,password.current.value)
      if(data?.MpLogin?.errors) {
        alertUser.error(data.MpLogin.errors[0].message)
        
      }
      if(data.MpLogin.user) {
        alertUser.success("Logged in successfully")
       
        if(data.MpLogin.error) {
          return alertUser.error(data.MpLogin.error.message)
        }
        if(data.MpLogin.user) {
          dispatch(setUserData(data.MpLogin.user,data.MpLogin.token,'MpUser'))
        } 
      }
      setLoading(false)

    }catch(e) {
      alertUser.error(e.message)
        setLoading(false)
    }
  }

return(

  <div>
    {isLoading && <Loader/>}
        {/* component */}
        <style dangerouslySetInnerHTML={{__html: "\n/*remove custom style*/\n  .circles{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n  .circles li{\n    position: absolute;\n    display: block;\n    list-style: none;\n    width: 20px;\n    height: 20px;\n    background: rgba(255, 255, 255, 0.2);\n    animation: animate 25s linear infinite;\n    bottom: -150px;  \n}\n.circles li:nth-child(1){\n    left: 25%;\n    width: 80px;\n    height: 80px;\n    animation-delay: 0s;\n}\n \n \n.circles li:nth-child(2){\n    left: 10%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 2s;\n    animation-duration: 12s;\n}\n \n.circles li:nth-child(3){\n    left: 70%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 4s;\n}\n \n.circles li:nth-child(4){\n    left: 40%;\n    width: 60px;\n    height: 60px;\n    animation-delay: 0s;\n    animation-duration: 18s;\n}\n \n.circles li:nth-child(5){\n    left: 65%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 0s;\n}\n \n.circles li:nth-child(6){\n    left: 75%;\n    width: 110px;\n    height: 110px;\n    animation-delay: 3s;\n}\n \n.circles li:nth-child(7){\n    left: 35%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 7s;\n}\n \n.circles li:nth-child(8){\n    left: 50%;\n    width: 25px;\n    height: 25px;\n    animation-delay: 15s;\n    animation-duration: 45s;\n}\n \n.circles li:nth-child(9){\n    left: 20%;\n    width: 15px;\n    height: 15px;\n    animation-delay: 2s;\n    animation-duration: 35s;\n}\n \n.circles li:nth-child(10){\n    left: 85%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 0s;\n    animation-duration: 11s;\n}\n  @keyframes animate {\n \n    0%{\n        transform: translateY(0) rotate(0deg);\n        opacity: 1;\n        border-radius: 0;\n    }\n \n    100%{\n        transform: translateY(-1000px) rotate(720deg);\n        opacity: 0;\n        border-radius: 50%;\n    }\n \n}\n" }} />
        <div className="relative min-h-screen flex ">
          <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
            <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"style={{ backgroundImage: `url(${registerBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute bg-gradient-to-b from-gray-600 to-gray-500 opacity-0 inset-0 z-0" />
              <div className="w-full  max-w-md z-10">
                <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6 uppercase">  <span className="text-yellow-500"> U</span>SER login</div>
                <div className="sm:text-sm xl:text-md text-gray-200 font-normal"> Login to DIALOG<span className='text-white'>maxX</span> Account
                </div>
              </div>
              {/*-remove custom style*/}
              <ul className="circles">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
            <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-4 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
              <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                  <h2 className="mt-6 text-3xl font-bold text-gray-900">
                    Welcome Back!
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
                </div>
               <form className="mt-8 space-y-6" action="#" method="POST">
                  <div className="relative">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                    <input 
                     type="text"
                     name="name"
                     placeholder="Username"
                     ref={usernameOrEmail}
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" />
                  </div>
                  <div className="mt-8 content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </label>
                    <input className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"  name="name"
                    placeholder="password"
                    ref={password}
                    />
                  </div>
                  <div>
                    <button    onClick={loginUser}
                         type="button" className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

)



}

export default UserLogin