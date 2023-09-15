import registerBackgroundImage from 'assets/image/bg.jpg';


export const RegisterStepFour = () => {
    return (
        <div className="bg-deep-purple-accent-700 h-full" style={{ backgroundImage: `url(${registerBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <section className="text-gray-600  body-font py-5 mb-10 h-full m-0 p-0 relative" />  <div className="w-full h-14 font-sans text-center 5 uppercase   shadow overflow-hidden sm:rounded-md font-sans text-3xl text-white ">
                User Informations
            </div>
            <div className="container    mx-auto">
                <div className="flex flex-col text-center w-full mb-1">
                </div>
                <div className="mt-5 mb-10 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="lg:px-5 py-8  justify-center lg:w-96 items-center bg-gray-900 px-2  rounded-xl bg-opacity-90  mx-auto  ">
                                <div className=" items-center mx-auto gap-6  ">
                                  <div className='flex flex-wrap gap-5  mx-auto justify-center items-center'> <div className=" w-36">
                                        <label htmlFor="first-name" className="text-sm font-medium text-gray-50">Skype ID</label>
                                        <input type="text" name="first-name" placeholder={1} id="first-name" autoComplete="given-name" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                    </div>

                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Gender</label>
                                        <select id="country" name="country" autoComplete="country" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none">
                                            <option>Male</option>
                                            <option>female</option>
                                            <option>other</option>
                                        </select>
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="last-name" className="text-sm font-medium text-gray-50">Date Of Birth</label>
                                        <input type="text" name="last-name" placeholder="09/02/2021" id="last-name" autoComplete="family-name" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                    </div>


                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Location</label>
                                        <select id="country" name="country" autoComplete="country" className="text-center appearance-none bg-transparent bg-black border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none">

                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="last-name" className="text-sm font-medium text-gray-50">
                                            City</label>
                                        <input type="text" name="last-name" placeholder="City" id="last-name" autoComplete="family-name" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                    </div>

                                    <div className=" w-36">
                                        <label htmlFor="last-name" className="text-sm font-medium text-gray-50">
                                            Age</label>
                                        <input type="text" name="last-name" placeholder="above 18" id="last-name" autoComplete="family-name" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Dick Sizes in Inches</label>
                                        <select id="country" name="country" autoComplete="country" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>

                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-500">
                                            Boobs Size</label>
                                        <select id="country" name="country" autoComplete="country" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-500">
                                            Hair Colour</label>
                                        <select id="country" name="country" autoComplete="country" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none">
                                            <option>Black</option>
                                            <option>Brown</option>
                                            <option>yellow</option>
                                        </select>
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    </div>
                                   






                                </div>
                                {/* <fieldset className="mt-8 ">
                    <legend className=" text-base  text-1.5xl font-medium text-gray-900">Job Skill</legend>
                    <div className="mt-2  gap-3 flex flex-wrap">
                      <div className="flex place-items-center">
                        <div className="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-regular text-gray-50">Accounting</label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-regular text-gray-50">Bookkeeping</label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-regular text-gray-50">Auditing</label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-regular text-gray-50">written
                            communication</label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-regular text-gray-50">Team
                            Managment</label>
                        </div>
                      </div>
                      <legend className=" text-base  text-1.5xl font-medium text-gray-900">
                        Interview/type
                      </legend>
                      <div className="mt-2 flex flex-wrap gap-6">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="comments" className="font-mediuregular text-gray-50">Technical</label>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="comments" className="font-mediuregular text-gray-50">HR</label>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="comments" className="font-mediuregular text-gray-50">Final</label>
                          </div>
                        </div>
                        <legend className=" text-base  text-1.5xl font-medium text-gray-900">
                          Competencies
                        </legend>
                        <div className="  flex flex-wrap gap-6">
                          <div className="flex  items-start">
                            <div className="flex items-center h-5">
                              <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            </div>
                            <div className=" text-sm">
                              <label htmlFor="comments" className=" ml-3 font-mediuregular text-gray-50">Analysis</label>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="comments" className="font-mediuregular text-gray-50">R &amp;
                                D</label>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="comments" className="font-mediuregular text-gray-50">Bookkeeping</label>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="comments" className="font-mediuregular text-gray-50">Quick
                                Larner</label>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="comments" className="font-mediuregular text-gray-50">Team
                                Managment</label>
                            </div>
                          </div>
                        </div>
                      </div></div></fieldset> */}
                            </div>
                            <div className='flex flex-wrap mx-auto justify-center'>
                      <button className="flex lg:w-96 flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-3 bg-yellow-500 border-none text-white text-sm shadow-sm">
                       Save And N
                      </button>
                    </div>
                        </div>
                    </form></div>
            </div>
            <div className="" aria-hidden="true">
                <div className="py-5">
                    <div className />
                </div>
            </div>
        </div>

    );
};

export default RegisterStepFour