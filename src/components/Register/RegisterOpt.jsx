import registerBackgroundImage from 'assets/image/bg.jpg';
export const RegisterStepOtp =() => {
return(



      <div className="relative flex flex-col justify-center overflow-hidden bg-gray-700 py-12" style={{ backgroundImage: `url(${registerBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="relative bg-gray-800 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a 5 code Digit to your email ba**@dipainhouse.com</p>
              </div>
            </div>
            <div>
              <form action method="post">
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row gap-5 items-center justify-between mx-auto w-full max-w-xs">
                  <div class="flex items-center border-b-2 border-gray-500 py-2 mt-1">
                  <input
                    class="text-center appearance-none bg-transparent border-none w-full text-gray-50 text-3xl mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="number"
                    placeholder="Enter Code here"
                  />

                </div>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <div>
                      <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-3 bg-yellow-500 border-none text-white text-sm shadow-sm">
                        Verify Account
                      </button>
                    </div>
                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-yellow-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
)




}


export default RegisterStepOtp