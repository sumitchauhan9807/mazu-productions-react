import { useQuery } from '@apollo/client';
import {GET_MODEL_BY_CATEGORY} from '../../queries.js'
import ModelCard from './ModelCard'

function PorntoolModels({prefrence}) {
  const { loading, error, data } = useQuery(GET_MODEL_BY_CATEGORY, {
    variables: { preference:prefrence },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  let models = data.getModelByCategory
 return (
  models.length ? models.map((model)=>{
    return <ModelCard model={model} key={model.id}/>
  }) : `No Models Found in ${prefrence}`
 )
}

export default PorntoolModels