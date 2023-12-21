import gaycouple from 'assets/image/gaymovie.png'
import straight from 'assets/image/straightmovie.png'
import HeaderBackground from 'assets/image/getstartbg4.jpg'
import TransMovie from 'assets/image/transmovie.png'
import asiamovie from 'assets/image/asiamovie.png'
import blackmovie from 'assets/image/blackmovie.png'
import couplemovie from 'assets/image/couplemovie.png'
import gayactors from 'assets/image/gayactors.png'
import straightactors from 'assets/image/straightactors.png'
import lesbians from 'assets/image/lesbains.png'
import bicouples from 'assets/image/bicouples.png'

export const Category = () => {
    return (
      <div style={{ backgroundImage: `url(${HeaderBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider  flex justify-center text-yellow-500 uppercase rounded-full bg-teal-accent-400">
           MOvie Category
          </p>
          <p className="text-base text-gray-700 md:text-lg  flex justify-center text-center">
          Explore the diverse array of movies across various genres in our extensive movie category, offering something for every cinematic taste and preference.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center mx-auto">
        <a href="/gaymovies" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'> <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={gaycouple}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center ">
              <p className="text-lg font-bold">Gay</p>
              {/* <p className="mb-5 text-xs text-gray-800">Product Manager</p> */}
             
            </div>
          </div></a>
          <a href="/straightmovies" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'> <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={straight}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Straight</p>
              {/* <p className="mb-5 text-xs text-gray-800">Design Team Lead</p> */}
             
            </div>
          </div></a>
          <a href="/asiamovies" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'> <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={asiamovie}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Asia</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          </div></a>
          <a href="/transmovies" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'>   <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={TransMovie}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Trans</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          
          </div></a>
          <a href="/couplemovies" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'>  <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={couplemovie}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Couples</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          
          </div></a>
          <a href="/blackmovies" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'>   <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={blackmovie}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">black</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          
          </div></a>
        </div>
        <div className="mx-auto mt-24 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider text-yellow-500 uppercase rounded-full bg-teal-accent-400  flex justify-center">
           Actor Category
          </p>
          <p className="text-base text-gray-700 md:text-lg  flex justify-center text-center">
          Discover the captivating world of actors in our extensive Actor Category, where you can explore the profiles, performances, and diverse talents of your favorite stars.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center mx-auto">
        <a href="/actor/gay" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'> <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={gayactors}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Gay</p>
              {/* <p className="mb-5 text-xs text-gray-800">Product Manager</p> */}
             
            </div>
          </div></a>
          <a href="/actor/straight" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'> <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={straightactors}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Straight</p>
              {/* <p className="mb-5 text-xs text-gray-800">Design Team Lead</p> */}
             
            </div>
          </div></a>
          <a href="/actor/lesbain" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'> <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={lesbians}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Lesbians</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          </div></a>
          <a href="/actor/trans" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'>   <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={TransMovie}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Trans</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          
          </div></a>
          <a href="/actor/bisexual" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6  flex justify-center'>  <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={bicouples}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Bisexual</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          
          </div></a>
          {/* <a href="/actor/black" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6'>   <div>
            <div className="relative pb-5 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-90 rounded shadow-lg sm:h-64 md:h-80 lg:h-90"
                src={blackmovie}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">black</p>
            
              
            </div>
          
          </div></a> */}
        </div>
        
      </div></div>
    );
  };

  export default Category;