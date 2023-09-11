import { connect } from 'react-redux'
import C1 from '../components/test/C1'
import C2 from '../components/test/C2'
import {useState} from 'react'
import { buyCake } from '../redux'
function Test(props) {
  console.log(props,"props")
  let [myName,setName] = useState('sumit')
  const handleChange = (e) => {
    setName(e.target.value)
  }
  const changeName = (data) => {
    setName(data)
  }
  return(
    <div style={{background:'red'}}>
      <h2>no of cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake} >buy cake</button>

      <C1 name={myName} nameChange={changeName}/>
      <C2 name={myName} nameChange={changeName}/>
      <h1>hello {myName}</h1>
      <input type="text" value={myName} onChange={handleChange}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCakes : state.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)