import registerBackgroundImage from 'assets/image/bg.jpg';
export const Success = () => {
    return (

         <div className=" bg-gray-800"  style={{ backgroundImage: `url(${registerBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> 
        <div className="flex items-center justify-center py-36 lg:py-56">
        <div className="p-4 rounded shadow-none ring ring-indigo-600/50">
          <div className="flex flex-col items-center space-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-4xl font-bold">Pyament Successfull !</h1>
            <p className='text-center'>Thank you for your Payment! Check your email for a link to the guide.</p>
           
             
              <span className="text-sm btn bg-yellow-600 font-medium">
                Home
              </span>
            
          </div>
        </div>
      </div></div>
    );
  };

  export default Success;