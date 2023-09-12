import registerBackgroundsteptwoImage from 'assets/image/bg.jpg';



function RegisterStepThree() {
    return (
      <div
				style={{
					backgroundImage: `url(${registerBackgroundsteptwoImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div
					style={{
						backgroundImage: `url(${registerBackgroundsteptwoImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
					className="bg-black h-full flex flex-col items-center justify-center"
				>
					<h1 className="text-gray-200 lg:text-5xl text-2xl mt-16">
						Upload Gallery <span className="text-yellow-500"> Pictures & Videos</span>
					</h1>

					<div className="px-4 py-5      mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex flex-row flex-wrap gap-5 mt-8">
						<div className="  gap-5 mt-54 overflow-hidden">
							<div className=" flex flex-wrap gap-3 mx-auto justify-center items-center">
								<a href="#" className="flex flex-col items-center group gap-2">
									<img
										className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 h-24 w-24"
										src="https://picsum.photos/seed/a/150/150"
									/>
									<p className="text-gray-500 group-hover:text-gray-300"> Tiffany </p>
								</a>

								<a href="#" className="flex flex-col items-center group gap-2">
									<img
										className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 h-24 w-24"
										src="https://picsum.photos/seed/b/150/150"
									/>
									<p className="text-gray-500 group-hover:text-gray-300"> Jessica </p>
								</a>

								<a href="#" className="flex flex-col items-center group gap-2">
									<img
										className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 h-24 w-24"
										src="https://picsum.photos/seed/c/150/150"
									/>
									<p className="text-gray-500 group-hover:text-gray-300"> Sunny </p>
								</a>
								<a href="#" className="flex flex-col items-center group gap-2">
									<img
										className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 h-24 w-24"
										src="https://picsum.photos/seed/b/150/150"
									/>
									<p className="text-gray-500 group-hover:text-gray-300"> Jessica </p>
								</a>

								<a href="#" className="flex flex-col items-center group gap-2">
									<img
										className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 h-24 w-24"
										src="https://picsum.photos/seed/c/150/150"
									/>
									<p className="text-gray-500 group-hover:text-gray-300"> Sunny </p>
								</a>

								<a href="#" className="flex flex-col items-center group gap-2">
									<img
										className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 h-24 w-24"
										src="https://picsum.photos/seed/d/150/150"
									/>
									<p className="text-gray-500 group-hover:text-gray-300"> Taeyeon </p>
								</a>
								<a href="#" className="flex flex-col items-center group gap-2">
									<img
										className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 h-24 w-24"
										src="https://picsum.photos/seed/b/150/150"
									/>
									<p className="text-gray-500 group-hover:text-gray-300"> Jessica </p>
								</a>

								<a href="#" className="flex flex-col items-center group gap-2">
									<img
										className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 h-24 w-24"
										src="https://picsum.photos/seed/c/150/150"
									/>
									<p className="text-gray-500 group-hover:text-gray-300"> Sunny </p>
								</a>

								<a href="#" className="flex flex-col items-center group gap-2">
									<img
										className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 h-24 w-24"
										src="https://picsum.photos/seed/d/150/150"
									/>
									<p className="text-gray-500 group-hover:text-gray-300"> Taeyeon </p>
								</a>
								{/* here comes the upload button */}
								<a href="#" className="flex flex-col items-center group gap-3 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-[100px] w-[100px] group-hover:bg-gray-300 border-2 border-transparent"
										viewBox="0 0 20 20"
										fill="#6b7280"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
											clip-rule="evenodd"
										/>
									</svg>
									<p className="text-gray-500 group-hover:text-gray-300">
										{" "}
										Upload 10 Pictures{" "}
									</p>
								</a>

								{/* end of upload button */}
							</div>
						</div>
					</div>
					{/* video section */}
					<div className="flex flex-wrap">
						<div className="px-4 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-1 lg:px-1 lg:py-5">
							<div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
								<img
									className="object-cover w-full h-56 rounded shadow-lg md:h-36 lg:h-44"
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
											<path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"></path>
										</svg>
									</div>
								</a>
							</div>
						</div>
						<div className="px-4 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-1 lg:px-1 lg:py-5">
							<div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
								<img
									className="object-cover w-full h-56 rounded shadow-lg md:h-36 lg:h-44"
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
											<path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"></path>
										</svg>
									</div>
								</a>
							</div>
						</div>
						{/* here comes the upload button */}

						<button className="border-2 flex mx-auto justify-center items-center border-gray-600 mb-1 text-gray-600 px-4 py-1 mt-20 h-10 hover:border-gray-400 hover:text-gray-400">
							Upload 2 Videos
						</button>

						{/* end of upload button */}
					</div>
					{/* end of video section */}

					<button className="border-2  border-gray-50 rounded-lg mb-28 bg-green-400 text-gray-50 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-100">
						Save and Next
					</button>
				</div>
			</div>

    )

}
export default RegisterStepThree