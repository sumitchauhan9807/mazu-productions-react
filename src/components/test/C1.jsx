import {useEffect} from 'react'
function C1({name,nameChange}) {
  useEffect(()=>{
    setTimeout(()=>{
      nameChange('changed from C1')
    },1000)
  },[])
  
  return (
    <div>
      <h1> {name} from  C1</h1>
    </div>
    
  )
}

export default C1