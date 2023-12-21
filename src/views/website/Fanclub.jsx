// HomePage.js

import React, { useEffect ,useState } from 'react';
import registerBackgroundImage from 'assets/image/bg.jpg';
import {GET_ALL_SUBSCRIPTIONS,CHECKOUT_STRIPE_MP,GET_USER_SUBSCRIPTIONS} from 'queries'
import {apolloClient} from 'index'
import Loader from 'components/UI/Loader'
import {useDispatch,useSelector} from 'react-redux'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router';

const FanClub = () => {
	const [subscriptions,setSubscriptions] = useState([])
	const [activeSubscription,setActiveSubscription] = useState(null)
  const [isLoading,setLoading] = useState(false)
  const alertUser = useAlert()
	const navigate = useNavigate();

	const user = useSelector((state)=>{
    if(state._persist.rehydrated) {
      return state.user
    }
  })
	useEffect(()=>{
		(async ()=>{
      try {
        setLoading(true)
        let {data,errors} = await apolloClient.query({
          query: GET_ALL_SUBSCRIPTIONS,
          fetchPolicy:'no-cache'
        })
				setSubscriptions(data.porntoolSubscriptions)
				setActiveSubscription(data?.porntoolSubscriptions[0])
        setLoading(false)

      }catch(e) {
        setLoading(false)
        alert(e.message)
      }
    })()
	},[])
	const getUserSubscriptions = async () => {
		try {
			let {data,errors} = await apolloClient.query({
				query: GET_USER_SUBSCRIPTIONS,
				fetchPolicy:'no-cache'
			})
			setLoading(false)
			return data.getMpUserSubscriptions
		}catch(e) {
			setLoading(false)
			alert(e.message)
		}
	}
	const checkoutStripe = async () => {
		try {
			if(!user.userData) {
				navigate('/userlogin')
				alertUser.show("Please Login to buy Membership")
				return
			}
			if(user.userType != 'MpUser') {
				alertUser.show("Function availabe only for users")
				return
			}
			setLoading(true)
			let subscriptions = await getUserSubscriptions()
			console.log(subscriptions)
			if(subscriptions.length) {
				alertUser.show("You already have an active Subscription")
				return
			}
			alertUser.show("Redirecting to checkout")
			let {data,errors} = await apolloClient.mutate({
				mutation: CHECKOUT_STRIPE_MP,
				variables: {
					input: {
						package: String(activeSubscription.packageId),
						discount: null,
						coupon: null,
						currency: 'usd',
                        fanclub:"testTaap"
					},
				},
				fetchPolicy:'no-cache'
			})
			window.location.href = data.createStripeCheckoutMP
			setLoading(false)

		}catch(e) {
			setLoading(false)
			alert(e.message)
		}
	}
    return (
     <div className='bg-gray-800' style={{ backgroundImage: `url(${registerBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
			 {isLoading && <Loader/>}
        <div className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-56">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 uppercase font-sans text-6xl font-bold tracking-tight text-yellow-600 sm:text-6xl sm:leading-none">
                            Get access
                            <br className="hidden md:block" />

                            <span className="inline-block text-5xl text-white text-deep-purple-accent-400">
                                to Full Videos{' '}
                            </span>
                        </h2>
                        <p className="text-base text-gray-50 md:text-lg">
                        Gain exclusive access to full-length videos and enjoy uninterrupted entertainment by accessing our premium content today.
                        </p>
                    </div>
                    <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                        <div>
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                                    <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                </svg>

                            </div>
                            <h6 className="mb-2 text-white font-semibold leading-5">
                                Unlock 2,421 studios in one subscription
                            </h6>
                           
                        </div>
                        <div>
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
															<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
														</svg>

                            </div>
                            <h6 className="mb-2 text-white font-semibold leading-5">
                                Quality you deserve — full HD and 4K
                            </h6>

                        </div>
                        <div>
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
												<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
											</svg>

                            </div>
                            <h6 className="mb-2 text-white font-semibold leading-5">
                                Find your fetish among 436,052 videos
                            </h6>

                        </div>
                        <div>
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
															<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
													</svg>

                            </div>
                            <h6 className="mb-2 text-white font-semibold leading-5">
                                Quality you deserve — full HD and 4K
                            </h6>

                        </div>
                       
                    </div>
                </div>
                <div>
                    <div>
                        <div className="p-8 bg-gray-900  rounded">
                            <div className="mb-4 text-center">
                                <p className="text-xl font-medium tracking-wide text-white">
                                    JOIN FAN CLUB
                                </p>
                                <div className="flex items-center justify-center">
                                    <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                        ${activeSubscription && activeSubscription.price - 0.01 }
                                    </p>
                                    <p className="text-lg text-gray-500">/ month</p>
                                </div>
                            </div>
                            <ul className="mb-8 ">
															{subscriptions.map((subscription)=>{
																return (
																	<div key={subscription.id} className="">
                                    <div className="inline-flex items-center ">
                                        <label
                                            className="relative flex cursor-pointer  items-center rounded-full p-3  hover:scale-125 transition duration-500 cursor-pointer"
                                            for="html"
                                            data-ripple-dark="true"
                                        >
                                            <input
																							  type="radio"
																								value={subscription.id}
																								checked={subscription.id == activeSubscription.id}
																								onChange={()=> setActiveSubscription(subscription)}
                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                            />
                                            <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3.5 w-3.5"
                                                    viewBox="0 0 16 16"
                                                    fill="currentColor"
                                                >
                                                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </div>
                                        </label>
                                        <label
                                            className="mt-px cursor-pointer select-none w-full font-light text-xl text-gray-50"
                                            for="html"
                                        >
                                            {subscription.packageName} &nbsp;
                                            ${subscription.price - 0.01} /Month
                                        </label>
                                    </div>
																</div>
																)
															})}
                            </ul>
                            <button
														onClick={checkoutStripe}
                                type="button"
                                className="inline-flex items-center animate-pulse justify-center w-full h-12 px-6 font-medium tracking-wide to-pink-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-125 transition duration-500 cursor-pointer"
                            >
                                BECOME A FAN
                            </button>
                        </div>
                        <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75"></div>
                        <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50"></div>
                        <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25"></div>
                    </div>
                </div>
            </div>
        </div></div>
    );
};

export default FanClub;
