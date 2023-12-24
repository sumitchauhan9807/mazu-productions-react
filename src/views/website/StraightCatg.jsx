import React, { useState } from 'react';
import MovieCarousel from '../../components/porntool-movies/Categ'; // Replace 'MovieCarousel' with your actual component
import CategorySelect from '../../components/porntool-movies/UI/CategorySelect';

function StraightlMovies() {
  const [activeCategory, setActiveCategory] = useState('Straight');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

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
              <span className="sub-title">
                ONLINE STREAMING{' '}
                <span className="text-yellow-500">{activeCategory}</span>
              </span>
              <h2 className="title">Porntool Movies</h2>
            </div>
          </div>
          <div className="lg:col-lg-6 lg:block hidden">
            <div className="ucm-nav-wrap">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <CategorySelect
                  name={'Straight'}
                  active={activeCategory === 'Straight'}
                  onClick={() => handleCategoryChange('Straight')}
                />
                {/* Add other categories similarly */}
              </ul>
            </div>
          </div>
          {/* mobile */}
          <div className="col-lg-6 lg:hidden">
            <div className="">
              <ul className="flex flex-wrap gap-2 mx-auto justify-center" id="myTab" role="tablist">
                <CategorySelect
                  name={'Straight'}
                  active={activeCategory === 'Straight'}
                  onClick={() => handleCategoryChange('Straight')}
                  className="bg-white rounded-xl shadow-2xl"
                />
                {/* Add other categories similarly */}
              </ul>
            </div>
          </div>
          {/* mobile */}
        </div>
        {/* Conditionally render MovieCarousel based on activeCategory */}
        {activeCategory === 'Straight' && (
          <MovieCarousel category={activeCategory} key={activeCategory} />
        )}
      </div>
    </section>
  );
}

export default StraightlMovies;
