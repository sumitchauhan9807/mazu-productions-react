// import React, { useState, useEffect } from 'react';
// import 'assets/css/Carousels.css';
// // Import the images
// import Zed from 'assets/image/zed.png';
// import Alex from 'assets/image/alex.png';

// const Carousel = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const imagesPerSlide = 4; // Number of images per slide
//   const intervalTime = 3000; // Time in milliseconds for automatic slide change

//   // Adjust image sizes or paths as needed
// //   const Zed = 'path_to_resized_zed.png';
// //   const Alex = 'path_to_resized_alex.png';

//   const images = [
//     { id: 1, src: Alex, alt: 'Image 1' },
//     { id: 2, src: Zed, alt: 'Image 2' },
//     { id: 3, src: Zed, alt: 'Image 3' },
//     { id: 4, src: Alex, alt: 'Image 4' },
//     { id: 5, src: Zed, alt: 'Image 2' },
//     { id: 6, src: Zed, alt: 'Image 3' },
//     { id: 7, src: Alex, alt: 'Image 4' },
//     // Add more images as needed
//   ];

//   const totalSlides = Math.ceil(images.length / imagesPerSlide);

//   const moveSlide = (index) => {
//     setSlideIndex((prevIndex) => {
//       let newIndex = prevIndex + index;
//       if (newIndex < 0) {
//         newIndex = totalSlides - 1;
//       } else if (newIndex >= totalSlides) {
//         newIndex = 0;
//       }
//       return newIndex;
//     });
//   };

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       moveSlide(1); // Auto slide to the next one
//     }, intervalTime);

//     return () => {
//       clearInterval(slideInterval);
//     };
//   }, [slideIndex, totalSlides]); // Re-run effect when slideIndex or totalSlides changes

//   const renderSlides = () => {
//     const slideContent = [];
//     for (let i = 0; i < totalSlides; i++) {
//       const slideImages = images
//         .slice(i * imagesPerSlide, (i + 1) * imagesPerSlide)
//         .map((image) => (
//           <img key={image.id} src={image.src} alt={image.alt} className="carousel-image" />
//         ));

//       slideContent.push(
//         <div
//           key={`slide-${i}`}
//           className={slideIndex === i ? 'slide active' : 'slide'}
//         >
//           {slideImages}
//         </div>
//       );
//     }
//     return slideContent;
//   };

//   return (
//     <div className="carousel">
//       <div className="slides grid grid-cols-3 gap-4 ">{renderSlides()}</div>
//       <button className="prev" onClick={() => moveSlide(-1)}>
//         &#10094;
//       </button>
//       <button className="next" onClick={() => moveSlide(1)}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Carousel;

// import React, { useState, useEffect } from 'react';
// import 'assets/css/Carousels.css';

// import Zed from 'assets/image/zed.png';
// import Alex from 'assets/image/alex.png';

// import Ary from 'assets/image/arychoco.jpg'
// import Cola from 'assets/image/cola.jpg'

// import SweetCandy from 'assets/image/sweetcandy.jpg'
// import SweetCandy1 from 'assets/image/catpng.png'

// const Carousel = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const imagesPerSlide = 2; 
//   const intervalTime = 3000; 



//   const images = [
//     { id: 1, src: Alex, alt: 'Image 1' },
//     { id: 2, src: Zed, alt: 'Image 2' },
//     { id: 3, src: Ary, alt: 'Image 3' },
//     { id: 4, src: Cola, alt: 'Image 4' },
//     { id: 5, src: SweetCandy, alt: 'Image 5' },
//     { id: 6, src: Zed, alt: 'Image 6' },
//     { id: 7, src: Alex, alt: 'Image 1' },
//     { id: 8, src: Zed, alt: 'Image 2' },

//   ];

//   const totalSlides = Math.ceil(images.length / imagesPerSlide);

//   const moveSlide = (index) => {
//     setSlideIndex((prevIndex) => {
//       let newIndex = prevIndex + index;
//       if (newIndex < 0) {
//         newIndex = totalSlides - 1;
//       } else if (newIndex >= totalSlides) {
//         newIndex = 0;
//       }
//       return newIndex;
//     });
//   };

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       moveSlide(1); 
//     }, intervalTime);

//     return () => {
//       clearInterval(slideInterval);
//     };
//   }, [slideIndex, totalSlides]); 

//   const renderSlides = () => {
//     const slideContent = [];
//     for (let i = 0; i < totalSlides; i++) {
//       const slideImages = images
//         .slice(i * imagesPerSlide, (i + 1) * imagesPerSlide)
//         .map((image) => (
//           <div key={image.id} className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-900 ">
//             <img src={image.src} alt={image.alt} className=" h-72 " />
//             <div className="thumbnails">
//               {images
//                 .slice(i * imagesPerSlide, (i + 1) * imagesPerSlide)
//                 .map((thumbImage) => (
//                   <img
//                     key={`thumb-${thumbImage.id}`}
//                     src={thumbImage.src}
//                     alt={thumbImage.alt}
//                     className="thumbnail-image"
//                     onClick={() => setSlideIndex(i)}
//                   />
//                 ))}
//             </div>
//           </div>
//         ));

//       slideContent.push(
//         <div key={`slide-${i}`} className={slideIndex === i ? 'slide active' : 'slide'}>
//           {slideImages}
//         </div>
//       );
//     }
//     return slideContent;
//   };

//   return (
//     <div className="carousel">
//       <div className="slides grid grid-cols-3 gap-4">{renderSlides()}</div>
//       <button className="prev" onClick={() => moveSlide(-1)}>
//         &#10094;
//       </button>
//       <button className="next" onClick={() => moveSlide(1)}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Carousel;

// const Carousel = () => {
//     return (
//         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//         <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
//           <div className="flex flex-col justify-center">
//             <div className="max-w-xl mb-6">
//               <h2 className="max-w-lg mb-6 font-sans uppercase  text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-none">
//                 JOIN MAZU PROdUCTION
//                 <br className="hidden md:block" />

//                 <span className="relative px-1">
//                   <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
//                   <span className="relative inline-block text-yellow-600 text-7xl text-deep-purple-accent-400">
//                    FANCLUB
//                   </span>
//                 </span>
//               </h2>
//               <p className="text-base text-gray-300 md:text-lg">
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                 accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//                 quae. explicabo.
//               </p>
//             </div>
//             <p className="mb-4 text-sm font-bold tracking-widest uppercase">
//               UNLOCK
//             </p>
//             <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
//               <ul className="space-y-3">
//                 <li className="flex">
//                   <span className="mr-1">
//                     <svg
//                       className="w-5 h-5 mt-px text-deep-purple-accent-400"
//                       stroke="currentColor"
//                       viewBox="0 0 52 52"
//                     >
//                       <polygon
//                         strokeWidth="4"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         fill="none"
//                         points="29 13 14 29 25 29 23 39 38 23 27 23"
//                       />
//                     </svg>
//                   </span>
//                   4k Streams
//                 </li>
//                 <li className="flex">
//                   <span className="mr-1">
//                     <svg
//                       className="w-5 h-5 mt-px text-deep-purple-accent-400"
//                       stroke="currentColor"
//                       viewBox="0 0 52 52"
//                     >
//                       <polygon
//                         strokeWidth="4"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         fill="none"
//                         points="29 13 14 29 25 29 23 39 38 23 27 23"
//                       />
//                     </svg>
//                   </span>
//                 4K Videos 
//                 </li>
//                 <li className="flex">
//                   <span className="mr-1">
//                     <svg
//                       className="w-5 h-5 mt-px text-deep-purple-accent-400"
//                       stroke="currentColor"
//                       viewBox="0 0 52 52"
//                     >
//                       <polygon
//                         strokeWidth="4"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         fill="none"
//                         points="29 13 14 29 25 29 23 39 38 23 27 23"
//                       />
//                     </svg>
//                   </span>
//                   Access To all Videos
//                 </li>
//               </ul>
//               <ul className="space-y-3">
//                 <li className="flex">
//                   <span className="mr-1">
//                     <svg
//                       className="w-5 h-5 mt-px text-deep-purple-accent-400"
//                       stroke="currentColor"
//                       viewBox="0 0 52 52"
//                     >
//                       <polygon
//                         strokeWidth="4"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         fill="none"
//                         points="29 13 14 29 25 29 23 39 38 23 27 23"
//                       />
//                     </svg>
//                   </span>
//                   Flipboard curmudgeon
//                 </li>
//                 <li className="flex">
//                   <span className="mr-1">
//                     <svg
//                       className="w-5 h-5 mt-px text-deep-purple-accent-400"
//                       stroke="currentColor"
//                       viewBox="0 0 52 52"
//                     >
//                       <polygon
//                         strokeWidth="4"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         fill="none"
//                         points="29 13 14 29 25 29 23 39 38 23 27 23"
//                       />
//                     </svg>
//                   </span>
//                   Storage shed
//                 </li>
//                 <li className="flex">
//                   <span className="mr-1">
//                     <svg
//                       className="w-5 h-5 mt-px text-deep-purple-accent-400"
//                       stroke="currentColor"
//                       viewBox="0 0 52 52"
//                     >
//                       <polygon
//                         strokeWidth="4"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         fill="none"
//                         points="29 13 14 29 25 29 23 39 38 23 27 23"
//                       />
//                     </svg>
//                   </span>
//                   Satoshi Nakamoto
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div>
//             <img
//               className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
//               src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };
//   export default Carousel;



import React, { useState, useEffect } from 'react';
import Alex from 'assets/image/alex.png';
import Ary from 'assets/image/arychoco.jpg';
import Cola from 'assets/image/cola.jpg';
import Zed from 'assets/image/zed.png';
import SweetCandy from 'assets/image/sweetcandy.jpg';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalTime = 3000; // Time in milliseconds for automatic slide change

  const images = [
    Alex,
    Ary,
    Cola,
    Zed,
    SweetCandy,
    // Add more image paths as needed
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      // Increment the image index to move to the next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => {
      clearInterval(slideInterval);
    };
  }, [images.length]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-56">
     
     <div className='lg:block hidden'> <div className="grid gap-5 row-gap-10 lg:grid-cols-2  ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans uppercase  text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-none">
                JOIN MAZU PROdUCTIONS
                <br className="hidden md:block" />

                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-yellow-600 text-7xl text-deep-purple-accent-400">
                    FANCLUB
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
              UNLOCK
            </p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  4k Streams
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  4K Videos
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Access To all Videos
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Full Video
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Quality you deserve — full HD and 4K
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Find your fetish
                </li>
              </ul>
            </div>



          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-96 rounded shadow-lg sm:h-96"
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          /><div className=' py-5'>  <a href="/fanclub">  <button

            type="button"
            className="inline-flex items-center text-xl animate-pulse justify-center w-full h-12 px-6 font-medium tracking-wide to-pink-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-125 transition duration-500 cursor-pointer"
          >
            BECOME A FAN
          </button></a></div>
        </div>
      </div></div>
      {/* mobile */}
<div className='lg:hidden'>
      <div className=" row-gap-10  lg:hidden ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans uppercase  text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-none">
                JOIN MAZU PROdUCTIONS
                <br className="hidden md:block" />

                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-yellow-600 text-7xl text-deep-purple-accent-400">
                    FANCLUB
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
              UNLOCK
            </p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  4k Streams
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  4K Videos
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Access To all Videos
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Full Video
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Quality you deserve — full HD and 4K
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Find your fetish
                </li>
              </ul>
            </div>



          </div>
        </div>
        <div className='mt-5'>
          <img
            className="object-fit w-full h-96 rounded shadow-lg sm:h-96"
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          /><div className=' py-5'>  <a href="/fanclub">  <button

            type="button"
            className="inline-flex items-center text-xl animate-pulse justify-center w-full h-12 px-6 font-medium tracking-wide to-pink-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:scale-125 transition duration-500 cursor-pointer"
          >
            BECOME A FAN
          </button></a></div>
        </div>
      </div></div>

      {/* mobile */}
    </div>
  );
};

export default Carousel;
