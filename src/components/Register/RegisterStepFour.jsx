import registerBackgroundImage from 'assets/image/bg.jpg';
import { BASIC_SELCETIONS ,ADD_BASIC_INFO } from 'queries'
import { useQuery } from '@apollo/client';
import { useAlert } from 'react-alert'
import {apolloClient} from 'index'
import Loader from 'components/UI/Loader'
import {useDispatch} from 'react-redux'
import {updateSetupStep} from '../../redux'
import {getLocations} from 'helpers/common' 
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const addBasicInfo = async (basicInfo) => {
	try {
		const { data, errors } = await apolloClient.mutate({
			mutation: ADD_BASIC_INFO,
			variables: {
				options: basicInfo,
			},
		});
		if(errors) {
			throw Error(errors)
		}
		console.log(errors)
		console.log(data)
	}catch(e) {
		throw Error(e)
	}
}


function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0,10) === dateString;
  }


export const RegisterStepFour = () => {
  let countries = getLocations()
  const alertUser = useAlert()
	const dispatch = useDispatch()
	let [isLoading,setLoading] = useState(false)
//   console.log(isValidDate('1992-12-02'))
  const [country_code,setCountryCode] = useState(countries[0].calling_codes)
  const basicSelections = useQuery(BASIC_SELCETIONS);
  
  const form = useForm({
    defaultValues: {
      skype: "",
      gender: "male",
      height: "",
      hair_color: "brown",
      bdate: "",
      preference: "straight",
      phone:"",
      country:'Afghanistan',
      cup_shape:"A",
      breast_size:"30",
      dick_size:"4",
			actor_type:"solo"
    },
    // mode: "onChange"
  });
  const { register, formState: { errors },handleSubmit} = form
  let values = form.getValues()
  const setCountry = (e) => {
    let country = countries.find(c =>c.country == e.target.value)
    setCountryCode(country.calling_codes)
    console.log(e.target.value)
  }
  const onSubmit = async () => {
		console.log(values)
    if(!isValidDate(values.bdate)) {
      return alertUser.show('Please enter date of birth in format yyyy-mm-dd')
    }
		// console.log(values.bdate)
		// console.log(isValidDate(values.bdate))
		let data = {...values}
		let country = countries.find(c =>c.country == data.country)
		console.log(country.calling_codes)
		data.phone = country.calling_codes + data.phone
		console.log(data,'asdasdasdasdasdasd')
		try{
			setLoading(true)
			await addBasicInfo(data)
			alertUser.show('Step four successfully completed')
			dispatch(updateSetupStep(3))
			setLoading(false)
		}catch(e) {
			setLoading(false)
			alertUser.error(e.message)
		}
	}
  if (basicSelections.loading) return <Loader/>;
	if (basicSelections.error) return <p>Error : {basicSelections.error.message}</p>;
  let basicInfoSelections = basicSelections.data.basicInfoSelections
  console.log(errors)

    return (
        <div className="bg-deep-purple-accent-700 h-full" style={{ backgroundImage: `url(${registerBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
					{ isLoading && <Loader/>}
            <section className="text-gray-600  body-font py-5 mb-10 h-full m-0 p-0 relative" />  <div className="w-full h-14 font-sans text-center 5 uppercase   shadow overflow-hidden sm:rounded-md font-sans text-3xl text-white ">
                User Informations
            </div>
            <div className="container    mx-auto">
                <div className="flex flex-col text-center w-full mb-1">
                </div>
                <div className="mt-5 mb-10 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="lg:px-5 py-8  justify-center lg:w-96 items-center bg-gray-900 px-2  rounded-xl bg-opacity-90  mx-auto  ">
                                <div className=" items-center mx-auto gap-6  ">
                                  <div className='flex flex-wrap gap-5  mx-auto justify-center items-center'> <div className=" w-36">
                                        <label htmlFor="first-name" className="text-sm font-medium text-gray-50">Skype ID</label>
                                        <input {...register('skype', { required: true, maxLength: 10 , minLength:3 })} type="text" placeholder="skype id" id="first-name" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                        {errors.skype &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>

                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Gender</label>
                                        <select {...register('gender', { required: true })} className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-sm h-full mr-3 py-1 px-2 leading-tight focus:outline-none">
                                          {basicInfoSelections.genders.map((gender)=>{
                                          return  <option value={gender}>{gender}</option>
                                           })}
                                        </select>
                                        {errors.gender &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="last-name" className="text-sm font-medium text-gray-50">Date Of Birth</label>
                                        <input {...register('bdate', { required: true })} type="text" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="yyyy-mm-dd"/>
                                        {errors.bdate &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>


                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Location</label>
                                        <select  {...register('country', { required: true,  onChange: (e) => {setCountry(e)}, })}   className="text-center appearance-none bg-transparent bg-black border-b-2 w-full text-gray-500 text-sm h-full mr-3 py-1 px-2 leading-tight focus:outline-none">\
                                          {countries.map((country)=>{
                                            return <option value={country.country}>{country.country}</option>
                                          })}
                                        </select>
                                        {errors.country &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="last-name" className="text-sm font-medium text-gray-50">
                                            Country Code</label>
                                        <input value={country_code} type="text" name="last-name" placeholder="country code" id="last-name" autoComplete="family-name" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" disabled />
                                    </div>

                                    <div className=" w-36">
                                        <label htmlFor="last-name" className="text-sm font-medium text-gray-50">
                                            Phonenumber</label>
                                        <input  {...register('phone', { required: true })} type="text"  placeholder="phonenumber" id="last-name" autoComplete="family-name" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                        {errors.phone &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Cup Shape</label>
                                        <select {...register('cup_shape', { required: true })} id="country"  autoComplete="country" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-sm h-full mr-3 py-1 px-2 leading-tight focus:outline-none">
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                        </select>
                                        {errors.cup_shape &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>

                                    <div className=" w-36">
                                    <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Breast Size</label>
                                        <select {...register('breast_size', { required: true })} id="country"  autoComplete="country" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-sm h-full mr-3 py-1 px-2 leading-tight focus:outline-none">
                                            <option value="30">30</option>
                                            <option value="32">32</option>
                                            <option value="34">34</option>
                                            <option value="36">36</option>
                                        </select>
                                        {errors.breast_size &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Dick Sizes in Inches</label>
                                        <select {...register('dick_size', { required: true })} className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-sm h-full mr-3 py-1 px-2 leading-tight focus:outline-none">
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>


                                        </select>
                                        {errors.dick_size &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Hair color</label>
                                        <select  {...register('hair_color', { required: true })} className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-sm h-full mr-3 py-1 px-2 leading-tight focus:outline-none">
                                          {basicInfoSelections.hairColorTypes.map((color)=>{
                                           return  <option value={color}>{color}</option>
                                          })}
                                        </select>
                                        {errors.hair_color &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Height</label>
                                        <input {...register('height', { required: true })} type="text" placeholder="height" id="last-name" autoComplete="family-name" className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                        {errors.height &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>
                                    <div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Sexual Prefrence</label>
                                        <select {...register('preference', { required: true })}  className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-sm h-full mr-3 py-1 px-2 leading-tight focus:outline-none">
                                            {basicInfoSelections.preferences.map((pref)=>{
                                              return <option value={pref}>{pref}</option>
                                            })}
                                        </select>
                                        {errors.preference &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>
																		<div className=" w-36">
                                        <label htmlFor="country" className="text-sm font-medium text-gray-50">
                                            Actor Type</label>
                                        <select {...register('actor_type', { required: true })}  className="text-center appearance-none bg-transparent border-b-2 w-full text-gray-500 text-sm h-full mr-3 py-1 px-2 leading-tight focus:outline-none">
                                            <option value="solo">Solo</option>
                                            <option value="couple">Couple</option>
                                            <option value="both">Both</option>

                                        </select>
                                        {errors.actor_type &&  <p className="mt-2 text-red-500 text-xs italic">This field is required</p>}
                                    </div>
                                    </div>
                                </div>
                            </div>
                             {/* <pre style={{color:"white"}}>{JSON.stringify(form.watch(), null, 2)}</pre> */}
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