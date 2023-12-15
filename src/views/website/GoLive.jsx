import React, { useState } from 'react';
import HeaderBackground from 'assets/image/getstartbg4.jpg'
import Logo from 'assets/image/Deluxe.jpg'
import Profileimg from 'assets/image/getstarted1.jpg'
// import React,  from 'react';


const GoLivePage = ({ videoUrl, thumbnailUrl }) => {
    const [showVideo, setShowVideo,] = useState(false);
    return (
        <div className='' style={{ backgroundImage: `url(${HeaderBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}><div class="px-4 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-80  shadow-2xl border-b-2 mb-4 " >
            <div class="relative flex items-center py-2  justify-between ">
                <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                >

                    <span class="ml-2 text-xl font-bold tracking-wide text-gray-50 uppercase">
                        <img className='h-16' src={Logo} alt="" />
                    </span>
                </a>
                <ul class="flex items-center hidden space-x-8 lg:flex">
                    <li className='border-r-8 border-2 shadow-2xl px-4 py-1 flex gap-6  flex-wrap bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-3xl'>
                        <img src={Profileimg} alt="" className='h-16 w-16 object-cover border-pink-800 border-4 rounded-full' />     <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide  text-3xl mt-3 text-gray-50 transition-colors duration-200 hover:text-yellow-500 hover:text-deep-purple-accent-400"
                        >
                            MODEL NAME
                        </a>
                    </li>
                    <li className='border-r-2 px-2'>
                        <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide  text-gray-50 transition-colors duration-200 hover:text-yellow-500 hover:text-deep-purple-accent-400"
                        >
                            PHOTOS <span className='text-gray-500'>1000</span>
                        </a>
                    </li>
                    <li className='border-r-2 px-2'>
                        <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-gray-50 transition-colors duration-200 hover:text-yellow-500 hover:text-deep-purple-accent-400"
                        >
                            VIDEOS  <span className='text-gray-500'>200</span>
                        </a>
                    </li>
                    <li className='border-r-2 px-2'>
                        <a
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            class="font-medium tracking-wide text-gray-50 transition-colors duration-200 hover:text-yellow-500 hover:text-deep-purple-accent-400"
                        >
                            MEMBERS <span className='text-gray-500'>9563</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            aria-label="About us"
                            title="About us"
                            class="font-medium tracking-wide text-gray-50 transition-colors font hover:text-yellow-500 duration-200 hover:text-deep-purple-accent-400"
                        >
                            NEW MEMBERS <span className='text-gray-500 ' >9563</span>
                        </a>
                    </li>
                </ul>
                <ul class="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <a
                            href="/"
                            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 rounded-2xl text-white transition duration-200  hover:bg-white hover:text-gray-900 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            JOIN FAN CLUB
                        </a>
                    </li>
                </ul>

            </div>
        </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 3fr 2fr',
                gap: '2px',
                height: '100vh ',


            }} className=' flex justify-center mx-auto'>

                <div className=' rounded-b-xl border-b-8 border-0 border-gray-800 rounded-xl ' style={{ backgroundColor: '', padding: '10px', height: '76vh' }}>

                    <div className='mx-auto flex '> <span className='text-4xl font-sans uppercase text-center justify-center mx-auto '>Models Online</span></div>
                    <ul>
                        <>
                            <div className="grid-cols-1 sm:grid md:grid-cols-1  " >
                                <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                                    <a href="#!">
                                        <img
                                            className="rounded-t-lg w-full h-full object-cover" style={{ height: '20vh' }}
                                            src="https://www.niceandquite.com/wp-content/uploads/2013/07/tumblr_mkz33h2rfU1sn6ya0o1_500.gif"
                                            alt="Hollywood Sign on The Hill"
                                        />
                                        <div className="absolute top-1  left-2 style={{height: '20vh'}}">
                                            <h5 className="text-xl font-medium">MODEL NAME</h5>

                                        </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700" >

                                            <h5 className="text-xl font-medium mt-2">Watch Now</h5>
                                        </div>
                                    </a>
                                </div>
                                <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                                    <a href="#!">
                                        <img
                                            className="rounded-t-lg w-full h-56 object-cover" style={{ height: '20vh' }}
                                            src="https://www.gifmeat.com/wp-content/uploads/2017/06/Oiled-big-ass-MFC-webcam-model-Sensualhotass-live-on-cam-gif.gif"
                                            alt="Hollywood Sign on The Hill"
                                        />
                                        <div className="absolute top-1  left-2 bg-black bg-opacity-0 rounded-3xl text-white p-1">
                                            <h5 className="text-xl font-medium">MODEL NAME</h5>

                                        </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700">

                                            <h5 className="text-xl font-medium mt-2"   >Watch Now</h5>
                                        </div>
                                    </a>
                                </div>
                                <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                                    <a href="#!">
                                        <img
                                            className="rounded-t-lg w-full h-56 object-cover" style={{ height: '20vh' }}
                                            src="https://media.tenor.com/naaKUMTrITkAAAAM/rolyat-rolyatistaylor.gif"
                                            alt="Hollywood Sign on The Hill"
                                        />
                                        <div className="absolute top-1  left-2 bg-black bg-opacity-0 rounded-3xl text-white p-1">
                                            <h5 className="text-xl font-medium">MODEL NAME</h5>

                                        </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700">

                                            <h5 className="text-xl font-medium mt-2" style={{ fontSize: '1.3rem' }}>Watch Now</h5>
                                        </div>
                                    </a>
                                </div>

                                {/* Repeat similar structure for other cards */}
                                {/* ... */} <div className=" justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  justify-center flex mx-auto ">

                                    <h5 className="text-xl font-medium mt-4 uppercase cursor-pointer" style={{ fontSize: '1.3rem' }}>see More</h5>
                                </div>
                            </div>
                        </>


                    </ul>
                </div>


                <div className='border-0' style={{ backgroundColor: '', padding: '10px', height: '76vh' }}>

                    {/* <h2>Live Video Player</h2> */}

                    <div className='border-2'>
                        {!showVideo ? (
                            <div onClick={() => setShowVideo(true)} style={{ position: 'relative' }}>
                                <img
                                    src='https://i.makeagif.com/media/11-29-2015/zbEDcb.gif'
                                    alt="Thumbnail"
                                    style={{ cursor: 'pointer', height: '65vh', }} className='object-cover w-full  rounded-t-xl '
                                /> <div className=' absolute bottom-5 inset-x-0 flex flex-wrap gap-10 justify-center items-center mx-auto'  >
                                    <button className='font-sans uppercase flex flex-wrap  px-5 py-2 text-4xl rounded-full text-white bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>

                                        Send Kiss</button>
                                    <button className='font-sans uppercase flex flex-wrap gap-2  px-5 py-2 text-4xl rounded-full text-white bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>Send Tips</button>
                                    <button className='font-sans uppercase  px-5 py-2 text-4xl flex flex-wrap rounded-full text-white gap-2 bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                        Add Friend</button></div>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    {/* Play button icon or graphic */}
                                    <svg
                                        onClick={() => setShowVideo(true)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        style={{ cursor: 'pointer', }}
                                        className=' animate-pulse bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500'
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                    {/* <span className='text-center flex justify-center mx-auto  bg-green-500 text-green-50 rounded-b-lg'  >Join Live</span> */}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div style={{ position: 'relative' }}>
                                    <video controls style={{ height: '62vh' }}>
                                        <source src={videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div
                                        className='absolute bottom-5 inset-x-0 z-50 flex flex-wrap gap-10 justify-center items-center mx-auto w-full'
                                        style={{
                                            position: 'absolute',
                                            bottom: '10%',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            zIndex: '100',
                                        }}
                                    >
                                        <button className='font-sans uppercase flex flex-wrap  px-5 py-2 text-4xl rounded-full text-white bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>

                                            Send Kiss</button>
                                        <button className='font-sans uppercase flex flex-wrap gap-2  px-5 py-2 text-4xl rounded-full text-white bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>Send Tips</button>
                                        <button className='font-sans uppercase  px-5 py-2 text-4xl flex flex-wrap rounded-full text-white gap-2 bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                        </svg>
                                            Add Friend</button>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                    <div class="grid grid-cols-2 rounded-b-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 gap-4 border-b-8 border-gray-800 border-">

                        <div class=" flex flex-wrap gap-10 p-4"><div className='flex justify-start items-start'><svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                            <span className='text-3xl flex justify-center items-center mx-auto mt-2 ml-2 text-white'>15689</span>
                        </div><div className='flex justify-start items-start'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                                <span className='text-3xl flex justify-end items-end mx-auto mt-2 text-white' >526</span>
                            </div></div>


                        <div class=" p-4 flex justify-end gap-9 items-end"><div><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-16 h-16  transform transition-transform hover:scale-110 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        </div> <div className='flex flex-wrap gap-3 bg-gray-900 border-2 border-b-4 py-2 px-2 rounded-xl hover:bg-white hover:text-gray-900 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                                <span className='text-3xl mt-2'>share</span></div></div>
                    </div>


                </div>


                <div className='border-0 border-b-4 border-gray-700' style={{ backgroundColor: '', padding: '10px' }}>

                    {/* <h2>Chat Interface</h2> */}

                    <div style={{ border: '0px solid black', height: '75vh' }} className=' shadow-2xl border-b-4 border-gray-700 bg-opacity-95'>
                        <>

                            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gradient-to-r border-b-8 border-gray-700 border-4 from-gray-900 via-gray-800 to-gray-900 bg-opacity-95  h-full p-4" >
                                <div className=' flex flex-wrap justify-center mx-auto gap-10'>
                                    <div className='flex flex-wrap gap-3  px-2 py-2 text-xl'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                        Public</div>
                                    <div className='flex flex-wrap gap-3  px-2 py-2 text-xl' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                        Private Chat</div>
                                    {/* <div className='flex flex-wrap gap-3  px-2 py-2 text-xl'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                        test</div> */}


                                </div><div className="flex flex-col h-full overflow-x-auto mb-4 bg-gradient-to-r from-gray-900 via-gray-800  to-gray-900 flex flex-col max-w-full mx-auto" >


                                    <>
                                        {/* component */}
                                        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-transparent flex flex-col max-w-full mx-auto" >

                                            <div className="flex-1 overflow-y-auto p-4" >
                                                <div className="flex flex-col space-y-8">

                                                    <div className="flex justify-end">
                                                        <div className="bg-gray-900 text-white p-3 rounded-xl max-w-lg text-xl lg:text-lg 2xl:text-xl border-b-4 ">
                                                            Hey, how's your day going?
                                                        </div>
                                                    </div>
                                                    {/* Example Received Message */}
                                                    <div className="flex">
                                                        <div className=" bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 text-white p-3 rounded-xl max-w-full bg-opacity-75 border-b-4 shadow-xl bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500">
                                                            Not too bad, just a bit busy. How about you?
                                                        </div>
                                                    </div>
                                                    {/* Example Message */}
                                                    <div className="flex justify-end">
                                                        <div className="bg-gray-900 text-white p-3 rounded-xl max-w-lg border-b-4 ">
                                                            I'm good, thanks. Anything exciting happening?
                                                        </div>
                                                    </div>
                                                    {/* Example Received Message */}
                                                    <div className="flex">
                                                        <div className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 text-white p-3 rounded-xl max-w-full bg-opacity-75 border-b-4 shadow-xl" >
                                                            Not really, just the usual. Work and errands.
                                                        </div>
                                                    </div>
                                                    {/* Example Message */}
                                                    <div className="flex justify-end">
                                                        <div className="bg-gray-900 text-white p-3 rounded-xl max-w-lg border-b-4 ">
                                                            Sounds like a typical day. Got any plans for the weekend?
                                                        </div>
                                                    </div>
                                                    {/* Example Received Message */}
                                                    <div className="flex">
                                                        <div className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 text-white p-3 rounded-xl max-w-full bg-opacity-75 border-b-4 shadow-xl" >
                                                            Not yet, I'm hoping to relax and maybe catch up on some reading. How
                                                            about you?
                                                        </div>
                                                    </div>
                                                    {/* Example Message */}
                                                    <div className="flex justify-end">
                                                        <div className="bg-gray-900 text-white p-3 rounded-xl max-w-lg border-b-4 ">
                                                            I might go hiking if the weather's nice. Otherwise, just taking it
                                                            easy
                                                        </div>
                                                    </div>
                                                    {/* Example Received Message */}
                                                    <div className="flex">
                                                        <div className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 text-white p-3 rounded-xl max-w-full bg-opacity-75 border-b-4 shadow-xl" >
                                                            Hiking sounds fun. Hope the weather cooperates for you!
                                                        </div>
                                                    </div>
                                                    {/* Example Message */}
                                                    <div className="flex justify-end">
                                                        <div className="bg-gray-900 text-white p-3 rounded-xl max-w-lg border-b-4 ">
                                                            Thanks! Fingers crossed. Enjoy your day!
                                                        </div>
                                                    </div>
                                                    {/* Example Received Message */}
                                                    <div className="flex">
                                                        <div className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 text-white p-3 rounded-xl max-w-full bg-opacity-75 border-b-4 shadow-xl" >
                                                            You too, take care!
                                                        </div>
                                                    </div>
                                                    {/* Example Message */}
                                                    <div className="flex justify-end">
                                                        <div className="bg-gray-900 text-white p-3 rounded-xl max-w-lg border-b-4 ">
                                                            Sure
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <div className="bg-gray-900 text-white p-3 rounded-xl max-w-lg border-b-4 ">
                                                            Thanks
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <div className="bg-gray-900 text-white p-3 rounded-xl max-w-lg border-b-4 ">
                                                            😁
                                                        </div>
                                                    </div>
                                                    {/* Example Message */}
                                                    <div className="flex">
                                                        <div className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 text-white p-3 rounded-xl max-w-full bg-opacity-75 border-b-4 shadow-xl" >
                                                            Okay
                                                        </div>
                                                    </div>
                                                    {/* Example Received Message */}
                                                    <div className="flex">
                                                        <div className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 text-white p-3 rounded-xl max-w-full bg-opacity-75 border-b-4 shadow-xl" >
                                                            😄
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                </div> <div className=' flex flex-wrap justify-center gap-4 mx-auto mb-2'>
                                    <div className='bg-pink-700 px-2 py-1 rounded-full text-white cursor-pointer'>Button</div>
                                    <div className='bg-pink-700 px-2 py-1 rounded-full text-white cursor-pointer'>Button</div>
                                    <div className='bg-pink-700 px-2 py-1 rounded-full text-white cursor-pointer'>Button</div>


                                </div>
                                <div className="flex flex-row items-center h-16 rounded-xl  bg-gradient-to-r from-pink-900 via-pink-800 to-pink-700  w-full px-4 p-5" >


                                    <div className='flex flex-wrap gap-3'>
                                        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                            </svg>

                                        </button>
                                        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600"> <svg
                                            className="w-10 h-12"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg></button>
                                    </div>
                                    <div className="flex-grow ml-4">
                                        <div className="relative w-full p-2 py-2">
                                            <input
                                                type="text"
                                                className="flex w-full border-2 px-2 py-2 p-3 rounded-xl text-xl focus:outline-none focus:border-green-500 pl-4 h-16" style={{ backgroundColor: '#301e27' }}
                                            />
                                            <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">

                                            </button>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <button className="flex items-center justify-center border-r-8 border-2 sha bg-gradient-to-r from-pink-900 via-pink-800 to-pink-900  hover:bg-white  py-3 rounded-xl text-white px-4 flex-shrink-0">
                                            <span>Send</span>
                                            <span className="ml-2">
                                                <svg
                                                    className="w-8 h-8 transform rotate-45 -mt-px"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>

                    </div>
                </div>
            </div>
            <> <div className='flex flex-wrap mx-auto justify-center -mt-36'><h1>ONGOING LIVES</h1></div>
                <div className="grid-cols-1 sm:grid md:grid-cols-5 pb-28  " >
                   
                    <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                className="rounded-t-lg w-full h-full object-cover" style={{ height: '20vh' }}
                                src="https://www.niceandquite.com/wp-content/uploads/2013/07/tumblr_mkz33h2rfU1sn6ya0o1_500.gif"
                                alt="Hollywood Sign on The Hill"
                            />
                            <div className="absolute top-1  left-2 style={{height: '20vh'}}">
                                <h5 className="text-xl font-medium">MODEL NAME</h5>

                            </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700" >

                                <h5 className="text-xl font-medium mt-2">Watch Now</h5>
                            </div>
                        </a>
                    </div>
                    <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                className="rounded-t-lg w-full h-56 object-cover" style={{ height: '20vh' }}
                                src="https://www.gifmeat.com/wp-content/uploads/2017/06/Oiled-big-ass-MFC-webcam-model-Sensualhotass-live-on-cam-gif.gif"
                                alt="Hollywood Sign on The Hill"
                            />
                            <div className="absolute top-1  left-2 bg-black bg-opacity-0 rounded-3xl text-white p-1">
                                <h5 className="text-xl font-medium">MODEL NAME</h5>

                            </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700">

                                <h5 className="text-xl font-medium mt-2"   >Watch Now</h5>
                            </div>
                        </a>
                    </div>
                    <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                className="rounded-t-lg w-full h-56 object-cover" style={{ height: '20vh' }}
                                src="https://media.tenor.com/naaKUMTrITkAAAAM/rolyat-rolyatistaylor.gif"
                                alt="Hollywood Sign on The Hill"
                            />
                            <div className="absolute top-1  left-2 bg-black bg-opacity-0 rounded-3xl text-white p-1">
                                <h5 className="text-xl font-medium">MODEL NAME</h5>

                            </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700">

                                <h5 className="text-xl font-medium mt-2" style={{ fontSize: '1.3rem' }}>Watch Now</h5>
                            </div>
                        </a>
                    </div>
                    <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                className="rounded-t-lg w-full h-full object-cover" style={{ height: '20vh' }}
                                src="https://www.niceandquite.com/wp-content/uploads/2013/07/tumblr_mkz33h2rfU1sn6ya0o1_500.gif"
                                alt="Hollywood Sign on The Hill"
                            />
                            <div className="absolute top-1  left-2 style={{height: '20vh'}}">
                                <h5 className="text-xl font-medium">MODEL NAME</h5>

                            </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700" >

                                <h5 className="text-xl font-medium mt-2">Watch Now</h5>
                            </div>
                        </a>
                    </div>
                    <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                className="rounded-t-lg w-full h-56 object-cover" style={{ height: '20vh' }}
                                src="https://www.gifmeat.com/wp-content/uploads/2017/06/Oiled-big-ass-MFC-webcam-model-Sensualhotass-live-on-cam-gif.gif"
                                alt="Hollywood Sign on The Hill"
                            />
                            <div className="absolute top-1  left-2 bg-black bg-opacity-0 rounded-3xl text-white p-1">
                                <h5 className="text-xl font-medium">MODEL NAME</h5>

                            </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700">

                                <h5 className="text-xl font-medium mt-2"   >Watch Now</h5>
                            </div>
                        </a>
                    </div>
                    <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                className="rounded-t-lg w-full h-56 object-cover" style={{ height: '20vh' }}
                                src="https://media.tenor.com/naaKUMTrITkAAAAM/rolyat-rolyatistaylor.gif"
                                alt="Hollywood Sign on The Hill"
                            />
                            <div className="absolute top-1  left-2 bg-black bg-opacity-0 rounded-3xl text-white p-1">
                                <h5 className="text-xl font-medium">MODEL NAME</h5>

                            </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700">

                                <h5 className="text-xl font-medium mt-2" style={{ fontSize: '1.3rem' }}>Watch Now</h5>
                            </div>
                        </a>
                    </div>
                    <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                className="rounded-t-lg w-full h-full object-cover" style={{ height: '20vh' }}
                                src="https://www.niceandquite.com/wp-content/uploads/2013/07/tumblr_mkz33h2rfU1sn6ya0o1_500.gif"
                                alt="Hollywood Sign on The Hill"
                            />
                            <div className="absolute top-1  left-2 style={{height: '20vh'}}">
                                <h5 className="text-xl font-medium">MODEL NAME</h5>

                            </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700" >

                                <h5 className="text-xl font-medium mt-2">Watch Now</h5>
                            </div>
                        </a>
                    </div>
                    <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                className="rounded-t-lg w-full h-56 object-cover" style={{ height: '20vh' }}
                                src="https://www.gifmeat.com/wp-content/uploads/2017/06/Oiled-big-ass-MFC-webcam-model-Sensualhotass-live-on-cam-gif.gif"
                                alt="Hollywood Sign on The Hill"
                            />
                            <div className="absolute top-1  left-2 bg-black bg-opacity-0 rounded-3xl text-white p-1">
                                <h5 className="text-xl font-medium">MODEL NAME</h5>

                            </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700">

                                <h5 className="text-xl font-medium mt-2"   >Watch Now</h5>
                            </div>
                        </a>
                    </div>
                    <div className="mx-3 mt-6 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                className="rounded-t-lg w-full h-56 object-cover" style={{ height: '20vh' }}
                                src="https://media.tenor.com/naaKUMTrITkAAAAM/rolyat-rolyatistaylor.gif"
                                alt="Hollywood Sign on The Hill"
                            />
                            <div className="absolute top-1  left-2 bg-black bg-opacity-0 rounded-3xl text-white p-1">
                                <h5 className="text-xl font-medium">MODEL NAME</h5>

                            </div>  <div className="absolute bottom-2 right-2 justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  bg-green-700">

                                <h5 className="text-xl font-medium mt-2" style={{ fontSize: '1.3rem' }}>Watch Now</h5>
                            </div>
                        </a>
                    </div>

                    {/* Repeat similar structure for other cards */}
                    {/* ... */}
                    {/* <div className=" justify-center   bg-opacity-100 rounded-xl text-white p-0 px-2  justify-center flex mx-auto ">

                                    <h5 className="text-xl font-medium mt-4 uppercase cursor-pointer" style={{ fontSize: '1.3rem' }}>see More</h5>
                                </div> */}
                </div>
            </>
        </div>
    );
};


export default GoLivePage;
