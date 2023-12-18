import gaycouple from 'assets/image/gay-couple.jpg'
import straight from 'assets/image/young-naked.jpg'
import HeaderBackground from 'assets/image/getstartbg4.jpg'
import lesbian from 'assets/image/lesbian.jpg'
export const Category = () => {
    return (
      <div style={{ backgroundImage: `url(${HeaderBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider text-yellow-500 uppercase rounded-full bg-teal-accent-400">
            ACTORs Category
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-start mx-auto">
        <a href="/actor/gay"> <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-56"
                src={gaycouple}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Gay</p>
              {/* <p className="mb-5 text-xs text-gray-800">Product Manager</p> */}
             
            </div>
          </div></a>
          <a href="/actor/straight"> <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-56"
                src={straight}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Straight</p>
              {/* <p className="mb-5 text-xs text-gray-800">Design Team Lead</p> */}
             
            </div>
          </div></a>
          <a href="/actor/lesbain"> <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-56"
                src={lesbian}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Lesbian</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          </div></a>
          <a href="/actor/trans">   <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-56"
                src={gaycouple}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Trans</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          
          </div></a>
          <a href="/actor/bisexual">  <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-56"
                src={gaycouple}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Bisexual</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          
          </div></a>
          <a href="/actor/black">  <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-10">
              <img
                className="object-cover w-80 h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-56"
                src={gaycouple}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">black</p>
              {/* <p className="mb-5 text-xs text-gray-800">Human Resources</p> */}
              
            </div>
          
          </div></a>
        </div>
      </div></div>
    );
  };

  export default Category;