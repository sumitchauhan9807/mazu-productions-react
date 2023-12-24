import MovieCarousel from './moviecarouel'
import CategorySelect from './UI/CategorySelect'
import {useState} from 'react'
function PorntoolMovies() {

    let [activeCategory,changeActiveCategory] = useState('Gay')

    const setActiveCat = (cat) => {
      changeActiveCategory(cat)
    }
  return (
    <section
      id="mazu-models"
      className="ucm-area ucm-bg2"
      data-background="https://themebeyond.com/html/movflx/img/bg/ucm_bg02.jpg"
      style={{
        backgroundImage:
          'url("https://themebeyond.com/html/movflx/img/bg/ucm_bg02.jpg")',
      }}
    >
    <div className="container">
      <div className="row align-items-end mb-55">
        <div className="col-lg-6">
          <div className="section-title title-style-three text-center text-lg-left">
            <span className="sub-title">ONLINE STREAMING <span  className='text-yellow-500'>{activeCategory}</span></span>
            <h2 className="title">Porntool Movies</h2>
          </div>
        </div>
        <div className="col-lg-6 lg:block hidden">
          <div className="ucm-nav-wrap">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <a href="" onClick={(e)=> {e.preventDefault() ; setActiveCat('Gay')}} ><CategorySelect name={'Gay'} active={activeCategory == 'Gay'}/></a>
              <a href="" onClick={(e)=> {e.preventDefault();setActiveCat('Straight')}} ><CategorySelect name={'Straight'} active={activeCategory == 'Straight'} /></a>
              <a href="" onClick={(e)=> {e.preventDefault(); setActiveCat('Couple')}} ><CategorySelect name={'Couple'} active={activeCategory == 'Couple'} /></a>
              <a href="" onClick={(e)=> {e.preventDefault() ; setActiveCat('Trans')}} ><CategorySelect name={'Trans'} active={activeCategory == 'Trans'} /></a>
              <a href="" onClick={(e)=> {e.preventDefault(); setActiveCat('Black')}} ><CategorySelect name={'Black'} active={activeCategory == 'Black'} /></a>
              <a href="" onClick={(e)=> {e.preventDefault(); setActiveCat('Asia')}} ><CategorySelect name={'Asia'} active={activeCategory == 'Asia'} /></a>
              
            </ul> 
          </div>
        </div>
        {/* mobile */}
        <div className="col-lg-6 lg:hidden">
          <div className="">
            <ul className="flex flex-wrap gap-2 mx-auto justify-center" id="myTab" role="tablist">
              <a href="" onClick={()=> setActiveCat('Gay')} className='bg-white rounded-xl shadow-2xl' ><CategorySelect name={'Gay'} active={activeCategory == 'Gay'}/></a>
              <a href="" onClick={()=> setActiveCat('Straight')} className='bg-white rounded-xl shadow-2xl'  ><CategorySelect name={'Straight'} active={activeCategory == 'Straight'} /></a>
              <a href="" onClick={()=> setActiveCat('Couple')} className='bg-white rounded-xl shadow-2xl'  ><CategorySelect name={'Couple'} active={activeCategory == 'Couple'} /></a>
              <a href="" onClick={()=> setActiveCat('Trans')}  className='bg-white rounded-xl shadow-2xl' ><CategorySelect name={'Trans'} active={activeCategory == 'Trans'} /></a>
              <a href="" onClick={()=> setActiveCat('Black')} className='bg-white rounded-xl shadow-2xl'  ><CategorySelect name={'Black'} active={activeCategory == 'Black'} /></a>
              <a href="" onClick={()=> setActiveCat('Asia')} className='bg-white rounded-xl shadow-2xl'  ><CategorySelect name={'Asia'} active={activeCategory == 'Asia'} /></a>
            </ul> 
          </div>
        </div>
        {/* mobile */}
      </div>
      <MovieCarousel
        category={activeCategory}
        key={activeCategory}
      />
      </div>
  </section>
  )
}

export default PorntoolMovies