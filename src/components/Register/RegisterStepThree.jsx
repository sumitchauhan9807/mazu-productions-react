
import React , {useEffect, useState} from 'react'
import registerBackgroundsteptwoImage from 'assets/image/bg.jpg';
import { GET_MODEL_DEFAULT_GALLERY ,ADD_MODEL_GALLERY_MEDIA } from 'queries'
import { useQuery } from '@apollo/client';
import {uploadToCloud} from 'helpers/index'
import { useAlert } from 'react-alert'
import {apolloClient} from 'index'
import Loader from 'components/UI/Loader'
import {useDispatch} from 'react-redux'
import {updateSetupStep} from '../../redux'


const addModelMedia = async ({galleryId,filename,mimetype}) => {
	try {
		const { data, errors } = await apolloClient.mutate({
			mutation: ADD_MODEL_GALLERY_MEDIA,
			variables: {
				cost: 0,
				is_paid: true,
				mediaCloudName:filename,
				mimetype:mimetype
				// file: this.files,
			},
		});
	}catch(e) {
		alert(e.message)
	}
}

function RegisterStepThree() {
	let [isLoading,setLoading] = useState(false)
	let [uploadProgress,setUploadProgress] = useState(0)
	let [videos,setVideos] = useState([])
	let [images,setImages] = useState([])
	const dispatch = useDispatch()




	let fileInfpurRef = React.createRef();
	let videoInfpurRef = React.createRef();

	const alertUser = useAlert()
	const defaultGallery = useQuery(GET_MODEL_DEFAULT_GALLERY);
	let gallery = defaultGallery.data?.getModelDefaultGallery
  // if (defaultGallery.loading) return <Loader/>;
  // if (defaultGallery.error) return <p>Error : {defaultGallery.error.message}</p>;

	useEffect(()=>{
		if(!defaultGallery.data) return 
		let images = gallery.media.filter(m => m.format.includes("image"))
		let videos = gallery.media.filter(m => m.format.includes("video"))
		console.log(images.length)
		console.log(videos.length)

		if(images.length >= 10 && videos.length >= 2) {
			alertUser.show('Step three successfully completed')
			dispatch(updateSetupStep(2))
		}
		videos = videos.map((video)=>{
			return {
				... video,
				palying:false
			}
		})
		setImages(images)
		setVideos(videos)

	},[defaultGallery.data])
	if (defaultGallery.loading) return <Loader/>;
	if (defaultGallery.error) return <p>Error : {defaultGallery.error.message}</p>;

	const upload = async  (inputRef) => {
		try{
			setLoading(true)
			const file = inputRef.current.files[0];
			let uploadData = await uploadToCloud(file,(progress)=>{
				setUploadProgress(progress)
			})
			let mediaData = await addModelMedia({
				galleryId:gallery.id,
				filename:uploadData.filename,
				mimetype:uploadData.mimetype
			})
			setLoading(false)
			defaultGallery.refetch()
		}catch(e) {
			setLoading(false)
			console.log(e.message)
			// alert("err")
			alertUser.error(e.message)
		}
	}
	const palyVideo = (url) => {
		let allVideos = videos.map((video)=>{
			if(video.cloudUrl == url){
				video.palying = true
			}
			return video
		})
		setVideos(allVideos)
	}
	// upload()
    return (
      <div
				style={{
					backgroundImage: `url(${registerBackgroundsteptwoImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				{ isLoading && <Loader progress={uploadProgress}/>}
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
								{images.length ? images.map((mediaData)=>{
									return (
										<a href="#" className="flex flex-col items-center group gap-2">
										<img
											className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300 h-24 w-24"
											src={mediaData.cloudUrl}
										/>
									</a>
									)
								}) : null}
							<input onChange={()=>{upload(fileInfpurRef)}} ref={fileInfpurRef} style={{display:'none'}} type="file" accept=".png,.jpg,.jpeg"/>
							<input onChange={()=>{upload(videoInfpurRef)}} ref={videoInfpurRef} style={{display:'none'}} type="file" accept=".mp4,.webm"/>

								{/* here comes the upload button */}
								<a onClick={()=>fileInfpurRef.current.click()} href="#" className="flex flex-col items-center group gap-3 ">
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
						{videos.map((mediaData)=>{
							if(!mediaData.palying) {
								return (
								
									<div  className="px-4 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-1 lg:px-1 lg:py-5">
									<div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
										<img
											className="object-cover w-full h-56 rounded shadow-lg md:h-36 lg:h-44"
											src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
											alt=""
										/>
										<a
											onClick={()=>{palyVideo(mediaData.cloudUrl)}}
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
								)
							}else {
								return (
									<div>
										<video width={320} height={240} controls>
											<source src={mediaData.cloudUrl} type="video/mp4" />
											<source src="movie.ogg" type="video/ogg" />
											Your browser does not support the video tag.
										</video>
									</div>
								)
							}
							
						})}
						{/* here comes the upload button */}

						<button onClick={()=>videoInfpurRef.current.click()} className="border-2 flex mx-auto justify-center items-center border-gray-600 mb-1 text-gray-600 px-4 py-1 mt-20 h-10 hover:border-gray-400 hover:text-gray-400">
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