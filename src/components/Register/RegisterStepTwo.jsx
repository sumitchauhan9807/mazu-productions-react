import 'assets/css/custom/register.css'
import registerBackgroundsteptwoImage from 'assets/image/bg.jpg';
import React from 'react';  
import { gql, useMutation } from '@apollo/client';
import {UPDATE_PROFILE_PIC} from 'queries'
import {useState,useEffect} from 'react'
import Loader from 'components/UI/Loader'
import {useDispatch} from 'react-redux'
import {updateSetupStep} from '../../redux'
function RegisterStepTwo() {
  const dispatch = useDispatch()
  let fileInfpurRef = React.createRef();
  const [pic,changePic] = useState('https://picsum.photos/seed/d/150/150')
  
  const [updateProfilePic,{ data, loading, error }] = useMutation(UPDATE_PROFILE_PIC,{
    onError(err) {
      console.log(err);
      alert(err)
    },
  });

 

  const updatePicture = (file) => {
    var fileReader = new FileReader();
			const url = fileReader.readAsDataURL(file);
			fileReader.onload = (e) => {
				changePic(e.target.result)
			};
  }

  const uploadPicture = () => {
    const profile_pic = fileInfpurRef.current.files[0];
    updatePicture(profile_pic)
  }

  const confirmUpload = () => {
    const profile_pic = fileInfpurRef.current.files[0];
    console.log(profile_pic,"profile_picprofile_picprofile_picprofile_picprofile_pic")
    updateProfilePic({
      variables: {file: profile_pic}
    })
  }

  useEffect(()=>{
    console.log(data)
    if(data?.updateProfilePic){
      dispatch(updateSetupStep(1))
    }
  },[data])


if (loading) return <Loader/>;
  
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center -mt-24" style={{ backgroundImage: `url(${registerBackgroundsteptwoImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-gray-200  lg:text-3xl text-xl">
        Upload <span className='text-yellow-500'> Profile Picture</span>
      </h1>
      <div className="flex flex-row flex-wrap gap-5 mt-8">
        <a href="#" className="flex flex-col items-center group gap-2">
          <img style={{height:'150px'}} className="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300" src={pic} />
          <p className="text-gray-500 group-hover:text-gray-300"> Username </p>
        </a>
        <a onClick={()=>fileInfpurRef.current.click()} href="#" className="flex flex-col items-center group gap-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[150px] w-[150px] group-hover:bg-gray-300 border-2 border-transparent" viewBox="0 0 20 20" fill="#6b7280">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
          <p className="text-gray-500 group-hover:text-gray-300"> Click here to upload </p>
        </a>
      </div>
      <input onChange={uploadPicture} ref={fileInfpurRef} style={{display:'none'}} type="file" accept=".png,.jpg,.jpeg"/>
      <button onClick={confirmUpload} className="border-2 rounded-2xl border-yellow-50 uppercase bg-green-400 text-yellow-50 px-4 py-1 mt-10 hover:border-gray-400 hover:text-gray-400">
        Confirm
      </button>

    </div>
  )
}

export default RegisterStepTwo