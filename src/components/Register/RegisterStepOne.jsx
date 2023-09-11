import 'assets/css/custom/register.css'
import registerBackgroundImage from 'assets/image/registerbg.jpg';

function RegisterStepOne() {
  return (
    <div className="" style={{ backgroundImage: `url(${registerBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}} > 
    <div className="login-box lg:w-2/5 w-full px-4 py-5 mx-auto py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 " style={{backgroundColor: '',}}>
    
      {/* Radio buttons */}
    
      <div className='bg-white p-10 rounded-lg sha '>
      <div>  <center>
        <h2  className=" text-xl font-sans uppercase " style={{fontFamily: '"Arial", sans-serif', color: '#E3C900'}}>Model Registration </h2>
      </center></div>
        
        
        <div className="radiobox bg-white">
        <label>
          <input type="radio" name="option" defaultValue="option1" /> Gay
        </label>
        <label>
          <input type="radio" name="option" defaultValue="option2" /> Bisexual
        </label>
        <label>
          <input type="radio" name="option" defaultValue="option2" /> Straight
        </label>
        <label>
          <input type="radio" name="option" defaultValue="option3" /> Lesbian
        </label>
        <label>
          <input type="radio" name="option" defaultValue="option4" /> Trans
        </label>
      </div>
      {/* end of raido buttons */}
      {/* checkbox */}
      <p style={{color: '#E3C900', fontSize: '15px'}}>I want to offer</p>
      <div className="radiobox">
        <label>
          <input type="checkbox" name="option" defaultValue="option1" /> Chat
        </label>
        <label>
          <input type="checkbox" name="option" defaultValue="option2" /> Live Cam
        </label>
        <label>
          <input type="checkbox" name="option" defaultValue="option3" /> Adult Pictures
        </label>
        <label>
          <input type="checkbox" name="option" defaultValue="option4" /> Couples
        </label>
      </div>
      {/* checkbox */}
      <p style={{color: '#E3C900', fontSize: '15px'}}>I want to offer to</p>
      <div className="radiobox">
        <label>
          <input type="checkbox" name="option" defaultValue="option1" /> Gay
        </label>
        <label>
          <input type="checkbox" name="option" defaultValue="option2" /> Bisexual
        </label>
        <label>
          <input type="checkbox" name="option" defaultValue="option3" /> Straight
        </label>
        <label>
          <input type="checkbox" name="option" defaultValue="option4" /> Lesbian
        </label>
        <label>
          <input type="checkbox" name="option" defaultValue="option4" /> Trans
        </label>
      </div>
      {/* checkbox */}
      <div className="radiobox">
        <label>
          <input style={{borderColor: '#E3C900'}} type="checkbox" name="option" defaultValue="option5" /> i'm atleast 18
          years old and im the ownser of the right of my own pictures,videos and audio files. i transfer this
          right with my contract agreement to DialogMakers International Ltd.
        </label>
      </div>
      <form action="#" className="grid">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" style={{borderColor: '#E3C900'}} name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input type="text" style={{borderColor: '#E3C900'}} name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">First Name:</label>
          <input type="text" style={{borderColor: '#E3C900'}} name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Last Name:</label>
          <input type="text" style={{borderColor: '#E3C900'}} name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" style={{borderColor: '#E3C900'}} id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" style={{borderColor: '#E3C900'}} name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Pseudonym:</label>
          <input type="text" style={{borderColor: '#E3C900'}} name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Age:</label>
          <input type="text" style={{borderColor: '#E3C900'}} name="username" />
        </div>
      </form>
      <div className="form-group">
        <button type="submit" style={{width: '100%', backgroundColor: '#E3C900'}}>Register</button>
      </div></div>
      
    </div>
  </div>
  )
}

export default RegisterStepOne