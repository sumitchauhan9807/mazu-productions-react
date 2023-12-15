import React from 'react';


const GoLivePage = () => {
    return (
        <div  style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr 2fr', /* Columns: users, live video, chat */
            gap: '10px',
            height: '100vh ',
            width: '90vw' 
            
        }} className='bg-gray-800 flex justify-center mx-auto'>
            {/* Column 1: List of Users */}
            <div className='border-2' style={{ backgroundColor: '', padding: '10px', height: '55vh' }}>
                {/* Render your list of users here */}
                <h2>List of Users</h2>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    {/* Add more users as needed */}
                </ul>
            </div>

            {/* Column 2: Live Video Player (Larger) */}
            <div  className='border-2' style={{ backgroundColor: '', padding: '10px', height: '55vh' }}>
                {/* You can embed your live video player here */}
                {/* <h2>Live Video Player</h2> */}
                {/* Your video player component or iframe */}
                {/* Replace this with your live video player */}
                <div className="mx-auto lg:max-w-full">
                    <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                        <img
                            className="object-cover w-full h-full rounded shadow-lg sm:h-64 md:h-80 lg:h-full"
                            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <a
                            href="/"
                            aria-label="Play Video"
                            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                        >
                            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                                <svg
                                    className="w-10 text-gray-900"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Column 3: Chat Interface (Smaller) */}
            <div className='border-0' style={{ backgroundColor: '', padding: '10px' }}>
                {/* Implement your chat interface here */}
                <h2>Chat Interface</h2>
                {/* Add your chat component */}
                {/* Replace this with your chat component */}
                <div style={{ border: '1px solid black', height: '75vh' }}>
                    <>

                        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                            <div className="flex flex-col h-full overflow-x-auto mb-4">
                                <>
                                    {/* component */}
                                    <div className="bg-gray-100 flex flex-col max-w-fullmx-auto">

                                        <div className="flex-1 overflow-y-auto p-4">
                                            <div className="flex flex-col space-y-8">
                                                {/* Messages go here */}
                                                {/* Example Message */}
                                                <div className="flex justify-end">
                                                    <div className="bg-blue-200 text-black p-2 rounded-lg max-w-full">
                                                        Hey, how's your day going?
                                                    </div>
                                                </div>
                                                {/* Example Received Message */}
                                                <div className="flex">
                                                    <div className="bg-gray-300 text-black p-2 rounded-lg max-w-full">
                                                        Not too bad, just a bit busy. How about you?
                                                    </div>
                                                </div>
                                                {/* Example Message */}
                                                <div className="flex justify-end">
                                                    <div className="bg-blue-200 text-black p-2 rounded-lg max-w-lg">
                                                        I'm good, thanks. Anything exciting happening?
                                                    </div>
                                                </div>
                                                {/* Example Received Message */}
                                                <div className="flex">
                                                    <div className="bg-gray-300 text-black p-2 rounded-lg max-w-lg">
                                                        Not really, just the usual. Work and errands.
                                                    </div>
                                                </div>
                                                {/* Example Message */}
                                                <div className="flex justify-end">
                                                    <div className="bg-blue-200 text-black p-2 rounded-lg max-w-lg">
                                                        Sounds like a typical day. Got any plans for the weekend?
                                                    </div>
                                                </div>
                                                {/* Example Received Message */}
                                                <div className="flex">
                                                    <div className="bg-gray-300 text-black p-2 rounded-lg max-w-lg">
                                                        Not yet, I'm hoping to relax and maybe catch up on some reading. How
                                                        about you?
                                                    </div>
                                                </div>
                                                {/* Example Message */}
                                                <div className="flex justify-end">
                                                    <div className="bg-blue-200 text-black p-2 rounded-lg max-w-lg">
                                                        I might go hiking if the weather's nice. Otherwise, just taking it
                                                        easy
                                                    </div>
                                                </div>
                                                {/* Example Received Message */}
                                                <div className="flex">
                                                    <div className="bg-gray-300 text-black p-2 rounded-lg max-w-lg">
                                                        Hiking sounds fun. Hope the weather cooperates for you!
                                                    </div>
                                                </div>
                                                {/* Example Message */}
                                                <div className="flex justify-end">
                                                    <div className="bg-blue-200 text-black p-2 rounded-lg max-w-lg">
                                                        Thanks! Fingers crossed. Enjoy your day!
                                                    </div>
                                                </div>
                                                {/* Example Received Message */}
                                                <div className="flex">
                                                    <div className="bg-gray-300 text-black p-2 rounded-lg max-w-lg">
                                                        You too, take care!
                                                    </div>
                                                </div>
                                                {/* Example Message */}
                                                <div className="flex justify-end">
                                                    <div className="bg-blue-200 text-black p-2 rounded-lg max-w-lg">
                                                        Sure
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <div className="bg-blue-200 text-black p-2 rounded-lg max-w-lg">
                                                        Thanks
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <div className="bg-blue-200 text-black p-2 rounded-lg max-w-lg">
                                                        😁
                                                    </div>
                                                </div>
                                                {/* Example Message */}
                                                <div className="flex">
                                                    <div className="bg-gray-300 text-black p-2 rounded-lg max-w-lg">
                                                        Okay
                                                    </div>
                                                </div>
                                                {/* Example Received Message */}
                                                <div className="flex">
                                                    <div className="bg-gray-300 text-black p-2 rounded-lg max-w-lg">
                                                        😄
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            </div>
                            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                                <div>
                                    <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex-grow ml-4">
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                        />
                                        <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                                            <svg
                                                className="w-6 h-6"
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
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                                        <span>Send</span>
                                        <span className="ml-2">
                                            <svg
                                                className="w-4 h-4 transform rotate-45 -mt-px"
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
    );
};

export default GoLivePage;
