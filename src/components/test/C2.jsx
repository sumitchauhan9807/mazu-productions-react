import { connect } from 'react-redux'
function C2({name,numOfCakes}) {
  return (
    <div>
      <h1> {name} from  C2</h1>
      <h2>cakes : {numOfCakes}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCakes : state.numOfCakes
  }
}

export default connect(
  mapStateToProps
)(C2)