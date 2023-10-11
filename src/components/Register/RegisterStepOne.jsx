import 'assets/css/custom/register.css'
import registerBackgroundImage from 'assets/image/registerbg.jpg';
import { useForm } from 'react-hook-form';
import { useAlert } from 'react-alert'
import { gql, useMutation } from '@apollo/client';
import {useEffect} from 'react'
import { connect } from 'react-redux'
import {USER_REGISTER} from 'queries'
import Loader from 'components/UI/Loader'
import { setUserData } from '../../redux'
import {buyCake} from '../../redux'
import { useSearchParams } from 'react-router-dom'


const ERROR_MESSAGES = {
  required:'This field is required',
  minLength: "Min length is not reached",
  maxLength: "Max length excedded"
}


function RegisterStepOne(props) {

const [searchParams, setSearchParams] = useSearchParams()
let affiliate = searchParams.get('aff')

const alertUser = useAlert()
const form = useForm({
  defaultValues: {
    sexuality: "gay",
    "offer.chat":true,
    "offerto.straight": true,
      email: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
      pseudonym: "",
  },
  // mode: "onChange"
});
const { register, formState: { errors },handleSubmit} = form
let values = form.getValues()
const [userRegister,{ data, loading, error }] = useMutation(USER_REGISTER,{
  variables: {
    addr: "",
    options: {
      af_id: "",
      email: values.email,
      username: values.username,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      age: Number(values.age),
      pseudonym: values.pseudonym,
    },
    userType: "model",
    preference: values.sexuality,
    modelAff:affiliate,
    modelData: {
      offer_chat: values.offer?.chat,
      offer_livecam: values.offer?.livecam,
      offer_couple: values.offer?.couple,
      offer_adultpics: values.offer?.adultpics,
      offerto_gay: values.offerto?.gay,
      offerto_bisexual: values.offerto?.gay,
      offerto_lesbian: values.offerto?.lesbian,
      offerto_straight: values.offerto?.straight,
      offerto_trans: values.offerto?.trans,
    },
  },
  onError(err) {
    console.log(err);
    alert(err.message)
  },
});
useEffect(()=>{
  if(data) {
    if(data.errors) {
      alert('err')
      alertUser.show(data.errors[2].message)
    }
    if(data.register?.user){
      props.setUserData(data.register.user,data.register.token)
      alertUser.show('Step one successfully completed')
    }
  }
},[data])
if (loading) return <Loader/>;



// console.log(form.getValues(),"formformform")
  
  const onSubmit = () => {
    if(values.password != values.confirm_password) {
      return alertUser.show('Confirm Password Error')
    }
      userRegister()
    };
  // console.log(errors,"formState");
  return (
    <form onSubmit={handleSubmit(onSubmit)}  >
    <div className="" style={{ backgroundImage: `url(${registerBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}} > 
    <div className="login-box lg:w-2/5 w-full px-4 py-5 mx-auto py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 " style={{backgroundColor: '',}}>
    
      {/* Radio buttons */}
    
      <div className='bg-white p-10 rounded-lg sha '>
      <div>  <center>
        <h2  className=" text-xl font-sans uppercase " style={{fontFamily: '"Arial", sans-serif', color: '#E3C900'}}>Model Registration </h2>
      </center></div>
        
        
        <div className="radiobox bg-white">
        <label>
          <input {...register("sexuality", {})} type="radio" name="sexuality" value="gay" /> Gay
        </label>
        <label>
          <input {...register("sexuality", {})} type="radio" name="sexuality" value="bisexual" /> Bisexual
        </label>
        <label>
          <input {...register("sexuality", {})} type="radio" name="sexuality" value="straight" /> Straight
        </label>
        <label>
          <input {...register("sexuality", {})} type="radio" name="sexuality" value="lesbain" /> Lesbian
        </label>
        <label>
          <input {...register("sexuality", {})} type="radio" name="sexuality" value="trans" /> Trans
        </label>
      </div>
      {/* end of raido buttons */}
      {/* checkbox */}
      <p style={{color: '#E3C900', fontSize: '15px'}}>I want to offer</p>
      <div className="radiobox">
        <label>
          <input  {...register('offer.chat', {})} type="checkbox"  /> Chat
        </label>
        <label>
          <input {...register('offer.livecam', {})} type="checkbox" /> Live Cam
        </label>
        <label>
          <input {...register('offer.adultpics', {})} type="checkbox" /> Adult Pictures
        </label>
        <label>
          <input {...register('offer.couple', {})} type="checkbox"  /> Couples
        </label>
      </div>
      {/* checkbox */}
      <p style={{color: '#E3C900', fontSize: '15px'}}>I want to offer to</p>
      <div className="radiobox">
        <label>
          <input {...register('offerto.gay', {})} type="checkbox"  /> Gay
        </label>
        <label>
          <input {...register('offerto.bisexual', {})} type="checkbox" /> Bisexual
        </label>
        <label>
          <input {...register('offerto.straight', {})} type="checkbox"  /> Straight
        </label>
        <label>
          <input {...register('offerto.lesbian', {})} type="checkbox" /> Lesbian
        </label>
        <label>
          <input {...register('offerto.trans', {})} type="checkbox"  /> Trans
        </label>
      </div>
      {/* checkbox */}
      <div className="radiobox">
        <label>
          <input {...register('confirmation', {})} style={{borderColor: '#E3C900'}} type="checkbox" /> i'm atleast 18
          years old and im the ownser of the right of my own pictures,videos and audio files. i transfer this
          right with my contract agreement to DialogMakers International Ltd.
        </label>
      </div>
      <form action="#" className="grid">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" style={{borderColor: '#E3C900'}} {...register('username', { required: true, maxLength: 15 , minLength:3 })} />
          {errors.username &&  <p className="mt-2 text-red-500 text-xs italic">{ERROR_MESSAGES[errors.username.type]}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input type="email" style={{borderColor: '#E3C900'}} {...register('email', { required: 'Email is required',pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        } })}/>
          {errors.email &&  <p className="mt-2 text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="username">First Name:</label>
          <input type="text" style={{borderColor: '#E3C900'}} {...register('firstName', { required: true, maxLength: 15 })}/>
          {errors.firstName &&  <p className="mt-2 text-red-500 text-xs italic">{ERROR_MESSAGES[errors.firstName.type]}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Last Name:</label>
          <input type="text" style={{borderColor: '#E3C900'}}{...register('lastName', { required: true, maxLength: 15 })} />
          {errors.lastName &&  <p className="mt-2 text-red-500 text-xs italic">{ERROR_MESSAGES[errors.lastName.type]}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" style={{borderColor: '#E3C900'}} {...register('password', { required: true, maxLength: 15 })} />
          {errors.password &&  <p className="mt-2 text-red-500 text-xs italic">{ERROR_MESSAGES[errors.password.type]}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password:</label>
          <input type="password" id="password" style={{borderColor: '#E3C900'}} {...register('confirm_password', { required: true, maxLength: 15 })} />
          {errors.confirm_password &&  <p className="mt-2 text-red-500 text-xs italic">{ERROR_MESSAGES[errors.confirm_password.type]}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Pseudonym:</label>
          <input type="text" style={{borderColor: '#E3C900'}} {...register('pseudonym', { required: true, maxLength: 10 })} />
          {errors.pseudonym &&  <p className="mt-2 text-red-500 text-xs italic">{ERROR_MESSAGES[errors.pseudonym.type]}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Age:</label>
          <input type="number" style={{borderColor: '#E3C900'}} {...register('age', { required: true })} />
          {errors.age &&  <p className="mt-2 text-red-500 text-xs italic">{ERROR_MESSAGES[errors.age.type]}</p>}
        </div>
        {/* <pre>{JSON.stringify(form.watch(), null, 2)}</pre> */}
      </form>
      <div className="form-group">
        <button type="submit" style={{width: '100%', backgroundColor: '#E3C900'}}>Register</button>
      </div></div>
      
    </div>
  </div>
  </form>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    numOfCakes : state.cake.numOfCakes,
    userData: state.user.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    setUserData: (userData,token) => dispatch(setUserData(userData,token))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterStepOne)