import Getstrartedbg from 'assets/image/bg.jpg'
import React, { useState } from 'react';


export const ModelPackage = () => {


    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const TabContent = () => {
        switch (activeTab) {
            case 1:
                return (
                    <div >
                        <div className="w-full  px-4">
                            <div
                                className="
             bg-gray-900
             rounded-xl
             relative
             z-10
             overflow-hidden
             border-yellow-700 
             shadow-2xl
             py-10
             px-8
             sm:p-12
             lg:py-10 lg:px-6
             xl:p-12
             mb-10
             "
                            >
                                <span className="text-yellow-100 font-semibold text-3xl text-center  uppercase block mb-4">
                                    30% Package
                                </span>

                                <p
                                    className="
                text-xl text-body-color
                pb-1
                mb-8
                border-b border-[#F2F2F2]
                "
                                >


                                </p>
                                <div className="mb-7">
                                    <p className="text-xl text-body-color flex flex-wrap gap-2 leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>
                                        <span>Marketing (Online, Print, Social)</span>
                                    </p>
                                    <p className="text-xl text-body-color  flex flex-wrap gap-2 leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg> <span>Public Relations</span>
                                    </p>
                                    <p className="text-xl text-body-color flex flex-wrap gap-2  leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>   <span>Actor Management </span>
                                    </p>
                                    <p className="text-xl text-body-color  flex flex-wrap gap-2 leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>    <span> Booking ( collaborations, productions)</span>
                                    </p>
                                    <p className="text-xl text-body-color flex flex-wrap gap-2 leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>  <span>Online Sales ( XHamster, </span>Faphouse, ManyVids, IwantClips, Pornhub)
                                    </p>
                                    <p className="text-xl text-body-color  flex flex-wrap gap-2  leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>   <span>Live Cam Shows </span>
                                    </p>
                                    <p className="text-xl text-body-color  flex flex-wrap gap-2  leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>  <span>Payouts weekly (Live Cam Shows) </span>
                                    </p>
                                </div>

                                <div>
                                    <span className="absolute right-0 top-7 z-[-1]">
                                        <svg
                                            width={77}
                                            height={172}
                                            viewBox="0 0 77 172"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear"
                                                    x1={86}
                                                    y1={0}
                                                    x2={86}
                                                    y2={172}
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                                                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="w-full  px-4 ">
                            <div
                                className="
             bg-gray-900
             rounded-xl
             relative
             z-10
             overflow-hidden
             border-yellow-700 
             shadow-2xl
             py-10
             px-8
             sm:p-12
             lg:py-10 lg:px-6
             xl:p-12
             mb-10
             "
                            >
                                <span className="text-yellow-100 font-semibold text-3xl text-center  uppercase block mb-4">
                                    40% Package
                                </span>

                                <p
                                    className="
                text-xl text-body-color
                pb-1
                mb-8
                border-b border-[#F2F2F2]
                "
                                >


                                </p>
                                <div className="mb-7">
                                    <p className="text-xl text-body-color flex flex-wrap gap-2 leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>
                                        <span>Marketing (Online, Print, Social)</span>
                                    </p>
                                    <p className="text-xl text-body-color  flex flex-wrap gap-2 leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg> <span>Public Relations</span>
                                    </p>


                                    <p className="text-xl text-body-color flex flex-wrap gap-2 leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>  <span>Online Sales ( XHamster, </span>Faphouse, ManyVids, IwantClips, Pornhub)
                                    </p>
                                    <p className="text-xl text-body-color  flex flex-wrap gap-2  leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>   <span>Live Cam Shows </span>
                                    </p>
                                    <p className="text-xl text-body-color  flex flex-wrap gap-2  leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>  <span>Payouts  every 14 days (Live Cam Shows) </span>
                                    </p>
                                </div>

                                <div>
                                    <span className="absolute right-0 top-7 z-[-1]">
                                        <svg
                                            width={77}
                                            height={172}
                                            viewBox="0 0 77 172"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear"
                                                    x1={86}
                                                    y1={0}
                                                    x2={86}
                                                    y2={172}
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                                                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div >
                        <div className="w-full h-2/3  px-4">
                            <div
                                className="
             bg-gray-900
             rounded-xl
             relative
             z-10
             overflow-hidden
             border-yellow-700 
             shadow-2xl
             py-10
             px-8
             sm:p-12
             lg:py-10 lg:px-6
             xl:p-12
             mb-10
             "
                            >
                                <span className="text-yellow-100 font-semibold text-3xl text-center  uppercase block mb-4">
                                    60% Package
                                </span>

                                <p
                                    className="
                text-xl text-body-color
                pb-1
                mb-8
                border-b border-[#F2F2F2]
                "
                                >


                                </p>
                                <div className="mb-7">
                                    <p className="text-xl text-body-color flex flex-wrap gap-2 leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>
                                        <span>Online Sales ( XHamster, Faphouse, ManyVids, IwantClips, Pornhub)</span>
                                    </p>




                                    <p className="text-xl text-body-color  flex flex-wrap gap-2  leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>   <span>Live Cam Shows </span>
                                    </p>
                                    <p className="text-xl text-body-color  flex flex-wrap gap-2  leading-loose mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>  <span>Payouts monthly  (Live Cam Shows) </span>
                                    </p>
                                </div>

                                <div>
                                    <span className="absolute right-0 top-7 z-[-1]">
                                        <svg
                                            width={77}
                                            height={172}
                                            viewBox="0 0 77 172"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear"
                                                    x1={86}
                                                    y1={0}
                                                    x2={86}
                                                    y2={172}
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                                                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (

        <div style={{ backgroundImage: `url(${Getstrartedbg}) `, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20' >
                <div className="tab flex flex-wrap lg:gap-16 justify-center mb-0 bg-yellow text-white bg-yellow-">
                    <button onClick={() => handleTabClick(1)} className={`uppercase lg:px-16 px-3 py-3 lg:text-2xl text-lg   ${activeTab === 1 ? ' bg-gray-100 rounded-t-xl text-gray-900 text-xl shadow-inner' : 'border-gray-400 text-white rounded-t-xl border-2'}`}>
                        30% Package <br /> Payout
                    </button>
                    <button onClick={() => handleTabClick(2)} className={`uppercase  lg:px-16 px-3 py-3  lg:text-2xl text-lg ${activeTab === 2 ? ' bg-gray-100 rounded-t-xl text-gray-900 text-xl shadow-inner' : 'border-gray-400  text-white rounded-t-xl border-2'}`}>
                        40% Package <br /> Payout
                    </button>
                    <button onClick={() => handleTabClick(3)} className={`uppercase lg:px-16 px-3 py-3 lg:text-2xl text-lg  ${activeTab === 3 ? '  bg-gray-100 rounded-t-xl text-gray-900 text-xl shadow-inner' : 'border-gray-400  text-white rounded-t-xl border-2'}`}>
                        60% Package <br /> Payout
                    </button>
                </div>
                <div className="tab-content flex justify-center bg-gray-900 rounded-2xl py-5 border-2 border-white h-3/4 lg:w-3/4 mx-auto">
                    <TabContent />
                </div>
                <div className='flex flex-wrap justify-center mx-auto py-5'> <a href="/register?aff=arnoldES">  <button

                    type="button"
                    className="inline-flex items-center text-xl  justify-center  h-16 px-6 tracking-wide w-56 uppercase to-yellow-500 bg-gradient-to-r from-yellow-800 via-yellow-300  font-bold text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-125 transition duration-500 cursor-pointer"
                >
                    start now
                </button></a> </div>
            </div> </div>
    );
    //     return (
    //       <div className="bg-deep-purple-accent-700">
    //        <section
    //   className="
    //    bg-gray-800
    //    pt-20
    //    lg:pt-[120px]
    //    pb-12
    //    lg:pb-[90px]
    //    relative
    //    z-20
    //    overflow-hidden
    //    "   style={{backgroundImage:`url(${Getstrartedbg}) `, backgroundSize: 'cover', backgroundPosition: 'center' }}
    // >
    //   <div className="container">
    //     <div className="flex flex-wrap -mx-4">
    //       <div className="w-full px-4">
    //         <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
    //           <span className="font-semibold text-lg text-primary mb-2 block">

    //           </span>
    //           <h2
    //             className="
    //             font-bold
    //             text-3xl
    //             sm:text-4xl
    //             md:text-[40px]
    //             text-dark
    //             mb-4
    //             "
    //           >
    //             Models Package
    //           </h2>
    //           <p className="text-xl text-body-color">
    //             There are many variations of passages of Lorem Ipsum available but
    //             the majority have suffered alteration in some form.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-wrap justify-center -mx-4">
    //       <div className="w-full md:w-1/2 lg:w-1/3 px-4">
    //         <div
    //           className="
    //          bg-gray-900
    //          rounded-xl
    //          relative
    //          z-10
    //          overflow-hidden
    //          border border-yellow-700 
    //          shadow-2xl
    //          py-10
    //          px-8
    //          sm:p-12
    //          lg:py-10 lg:px-6
    //          xl:p-12
    //          mb-10
    //          "
    //         >
    //           <span className="text-yellow-100 font-semibold text-3xl text-center  uppercase block mb-4">
    //           30 % Package
    //           </span>

    //           <p
    //             className="
    //             text-xl text-body-color
    //             pb-1
    //             mb-8
    //             border-b border-[#F2F2F2]
    //             "
    //           >


    //           </p>
    //           <div className="mb-7">
    //             <p className="text-xl text-body-color flex flex-wrap gap-2 leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>
    //  <span>Marketing (Online, Print, Social)</span>
    //             </p>
    //             <p className="text-xl text-body-color  flex flex-wrap gap-2 leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg> <span>Public Relations</span>
    //             </p>
    //             <p className="text-xl text-body-color flex flex-wrap gap-2  leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>   <span>Actor Management </span>
    //             </p>
    //             <p className="text-xl text-body-color  flex flex-wrap gap-2 leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>    <span> Booking ( collaborations, productions)</span>
    //             </p>
    //             <p className="text-xl text-body-color flex flex-wrap gap-2 leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>  <span>Online Sales ( XHamster, </span>Faphouse, ManyVids, IwantClips, Pornhub)
    //             </p>
    //             <p className="text-xl text-body-color  flex flex-wrap gap-2  leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>   <span>Live Cam Shows </span>
    //             </p>
    //             <p className="text-xl text-body-color  flex flex-wrap gap-2  leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>  <span>Payouts weekly (Live Cam Shows) </span>
    //             </p>
    //           </div>

    //           <div>
    //             <span className="absolute right-0 top-7 z-[-1]">
    //               <svg
    //                 width={77}
    //                 height={172}
    //                 viewBox="0 0 77 172"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
    //                 <defs>
    //                   <linearGradient
    //                     id="paint0_linear"
    //                     x1={86}
    //                     y1={0}
    //                     x2={86}
    //                     y2={172}
    //                     gradientUnits="userSpaceOnUse"
    //                   >
    //                     <stop stopColor="#3056D3" stopOpacity="0.09" />
    //                     <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
    //                   </linearGradient>
    //                 </defs>
    //               </svg>
    //             </span>

    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full md:w-1/2 lg:w-1/3 px-4">
    //       <div
    //           className="
    //          bg-gray-900
    //          rounded-xl
    //          relative
    //          z-10
    //          overflow-hidden
    //          border border-yellow-700 
    //          shadow-2xl
    //          py-10
    //          px-8
    //          sm:p-12
    //          lg:py-10 lg:px-6
    //          xl:p-12
    //          mb-10
    //          "
    //         >
    //           <span className="text-yellow-100 font-semibold text-3xl text-center  uppercase block mb-4">
    //           40 % Package
    //           </span>

    //           <p
    //             className="
    //             text-xl text-body-color
    //             pb-1
    //             mb-8
    //             border-b border-[#F2F2F2]
    //             "
    //           >


    //           </p>
    //           <div className="mb-7">
    //             <p className="text-xl text-body-color flex flex-wrap gap-2 leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>
    //  <span>Marketing (Online, Print, Social)</span>
    //             </p>
    //             <p className="text-xl text-body-color  flex flex-wrap gap-2 leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg> <span>Public Relations</span>
    //             </p>
    //             <p className="text-xl text-body-color flex flex-wrap gap-2  leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>   <span>Actor Management </span>
    //             </p>

    //             <p className="text-xl text-body-color flex flex-wrap gap-2 leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>  <span>Online Sales ( XHamster, </span>Faphouse, ManyVids, IwantClips, Pornhub)
    //             </p>
    //             <p className="text-xl text-body-color  flex flex-wrap gap-2  leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>   <span>Live Cam Shows </span>
    //             </p>
    //             <p className="text-xl text-body-color  flex flex-wrap gap-2  leading-loose mb-1">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    //   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    // </svg>  <span>Payouts weekly (Live Cam Shows) </span>
    //             </p>
    //           </div>

    //           <div>
    //             <span className="absolute right-0 top-7 z-[-1]">
    //               <svg
    //                 width={77}
    //                 height={172}
    //                 viewBox="0 0 77 172"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
    //                 <defs>
    //                   <linearGradient
    //                     id="paint0_linear"
    //                     x1={86}
    //                     y1={0}
    //                     x2={86}
    //                     y2={172}
    //                     gradientUnits="userSpaceOnUse"
    //                   >
    //                     <stop stopColor="#3056D3" stopOpacity="0.09" />
    //                     <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
    //                   </linearGradient>
    //                 </defs>
    //               </svg>
    //             </span>

    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full md:w-1/2 lg:w-1/3 px-4">
    //         <div
    //           className="
    //          bg-white
    //          rounded-xl
    //          relative
    //          z-10
    //          overflow-hidden
    //          border border-yellow-700 border-opacity-20
    //          shadow-2xl
    //          py-10
    //          px-8
    //          sm:p-12
    //          lg:py-10 lg:px-6
    //          xl:p-12
    //          mb-10
    //          "
    //         >
    //           <span className="text-primary font-semibold text-lg block mb-4">
    //             Professional
    //           </span>
    //           <h2 className="font-bold text-dark mb-5 text-[42px]">
    //             $256
    //             <span className="text-xl text-body-color font-medium">
    //               / year
    //             </span>
    //           </h2>
    //           <p
    //             className="
    //             text-xl text-body-color
    //             pb-8
    //             mb-8
    //             border-b border-[#F2F2F2]
    //             "
    //           >
    //             Perfect for using in a Professional website or a client project.
    //           </p>
    //           <div className="mb-7">
    //             <p className="text-xl text-body-color leading-loose mb-1">
    //               Unlimited Users
    //             </p>
    //             <p className="text-xl text-body-color leading-loose mb-1">
    //               All UI components
    //             </p>
    //             <p className="text-xl text-body-color leading-loose mb-1">
    //               Lifetime access
    //             </p>
    //             <p className="text-xl text-body-color leading-loose mb-1">
    //               Free updates
    //             </p>
    //             <p className="text-xl text-body-color leading-loose mb-1">
    //               Use on Unlimited project
    //             </p>
    //             <p className="text-xl text-body-color leading-loose mb-1">
    //               12 Months support
    //             </p>
    //           </div>
    //           <a
    //             href="javascript:void(0)"
    //             className="
    //             w-full
    //             block
    //             text-xl
    //             font-semibold
    //             text-primary
    //             bg-transparent
    //             border border-[#D4DEFF]
    //             rounded-md
    //             text-center
    //             p-4
    //             hover:text-white hover:bg-primary hover:border-yellow-700
    //             transition
    //             "
    //           >
    //             Choose Professional
    //           </a>
    //           <div>
    //             <span className="absolute right-0 top-7 z-[-1]">
    //               <svg
    //                 width={77}
    //                 height={172}
    //                 viewBox="0 0 77 172"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
    //                 <defs>
    //                   <linearGradient
    //                     id="paint0_linear"
    //                     x1={86}
    //                     y1={0}
    //                     x2={86}
    //                     y2={172}
    //                     gradientUnits="userSpaceOnUse"
    //                   >
    //                     <stop stopColor="#3056D3" stopOpacity="0.09" />
    //                     <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
    //                   </linearGradient>
    //                 </defs>
    //               </svg>
    //             </span>

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    //       </div>
    //     );
};


export default ModelPackage