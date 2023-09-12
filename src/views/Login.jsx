import registerBackgroundImage from 'assets/image/bg.jpg';
// import logo from '../assets/image/mazuproductionslogo.png'

function Login() {

return(

<div
    className="flex h-full py-16 w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(${registerBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div className="text-white">
        <div className="mb-8 flex flex-col items-center">
        {/* <img src={logo} style={{height: '50px'}} alt="Logo" /> */}
        <h1 className='text-3xl font-sans font-bold'> <span className='y text-yellow-400'>M</span>AZU LOGIN</h1>
         
          <span className="text-gray-300 mt-3">Enter Login Details</span>
        </div>
        <form action="#">
          <div className="mb-4 text-lg">
            <input
              className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="name"
              placeholder="Username"
            />
          </div>
          <div className="mb-4 text-lg">
            <input
              className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="Password"
              name="name"
              placeholder="*********"
            />
          </div>
          <div className="mt-8 flex justify-center text-lg text-black">
            <button
              type="submit"
              className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

)



}

export default Login