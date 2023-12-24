import React, { useState } from 'react';
import HeaderBackground from 'assets/image/bg.jpg'
import luckygay3 from 'assets/image/Dialogmaxx/luckygay/3.png'
import luckygay2 from 'assets/image/Dialogmaxx/luckygay/2.png'
import luckygay1 from 'assets/image/Dialogmaxx/luckygay/1.png'
import Lollicock3 from 'assets/image/Dialogmaxx/Lollicock/3.png'
import Lollicock2 from 'assets/image/Dialogmaxx/Lollicock/2.png'
import Lollicock1 from 'assets/image/Dialogmaxx/Lollicock/1.png'
import Dondaddy3 from 'assets/image/Dialogmaxx/Dondaddy/3.png'
import Dondaddy2 from 'assets/image/Dialogmaxx/Dondaddy/2.png'
import Dondaddy1 from 'assets/image/Dialogmaxx/Dondaddy/1.png'
import BJAlex3 from 'assets/image/Dialogmaxx/BJAlex/3.png'
import BJAlex2 from 'assets/image/Dialogmaxx/BJAlex/2.png'
import BJAlex1 from 'assets/image/Dialogmaxx/BJAlex/1.png'
import Raven3 from 'assets/image/Dialogmaxx/Raven/3.png'
import Raven2 from 'assets/image/Dialogmaxx/Raven/2.png'
import Raven1 from 'assets/image/Dialogmaxx/Raven/1.png'
import ZeD3 from 'assets/image/Dialogmaxx/ZeD/3.png'
import ZeD2 from 'assets/image/Dialogmaxx/ZeD/2.png'
import ZeD1 from 'assets/image/Dialogmaxx/ZeD/1.png'
import Kraken3 from 'assets/image/Dialogmaxx/Kraken/3.png'
import Kraken2 from 'assets/image/Dialogmaxx/Kraken/2.png'
import Kraken1 from 'assets/image/Dialogmaxx/Kraken/1.png'
import ZeD4 from 'assets/image/Dialogmaxx/ZeD/4.png'

const Allactors = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Luckygays',
      role: 'These both philippino gay twinks knows exactly how to make each other hot. Jes Amar, one of the hotest gay twinks in his country love to use his dick to fuck Chad <br> Torrez tight ass! Enjoy now hot sex with this asian twink couple.',
      image: luckygay1,
      imagesList: [
        luckygay2,
        luckygay3,
        // Add more image URLs for this member
      ],
      // Add more information about the team member here
    },
    {
      name: 'Luckygays',
      role: '23 years old bottom gay twink from the Philippines. ',
      image: Lollicock1,
      imagesList: [
        Lollicock2,
        Lollicock3,
        // Add more image URLs for this member
      ],
      // Add more information about the team member here
    },
    {
      name: 'DonDaddy',
      role: 'Dondaddy is a 25 years young african macho fucker. He likes to use his mega massive cock in all directions! ',
      image: Dondaddy1,
      imagesList: [
        Dondaddy2,
        Dondaddy3,
        // Add more image URLs for this member
      ],
      // Add more information about the team member here
    },
    {
      name: 'BJAlex',
      role: 'This sexy asia teen boy is recieving big loads in his nice, tight ass! Watch him now in a lot feature movies! ',
      image: BJAlex1,
      imagesList: [
        BJAlex2,
        BJAlex3,
        // Add more image URLs for this member
      ],
      // Add more information about the team member here
    },
    {
      name: 'Cute Raven',
      role: 'Raven is a 25 years old philippino bottom boy, ready to get used by heavy fuckers!  ',
      image: Raven1,
      imagesList: [
        Raven2,
        Raven3,
        // Add more image URLs for this member
      ],
      // Add more information about the team member here
    },
    {
      name: 'Zed',
      role: 'Ze[D], the ultimate twink fucker! He is the most booked actor in DialogMAxX and the right one for your next production!  ',
      image: ZeD1,
      imagesList: [
        ZeD2,
        ZeD3,
        ZeD4,
        // ZeD3,
        // Add more image URLs for this member
      ],
      // Add more information about the team member here
    },
    {
      name: 'Kraken',
      role: 'The Kraken is the new, the Kraken is super special. with his exibitionistic nature, this asian twink picks up where other actors leave off. Enjoy authentic public sex videos in public toilets, cemeteries, clubs , hotels, restaurants etc. ',
      image: Kraken1,
      imagesList: [
        Kraken2,
        Kraken3,
        // ZeD4,
        // ZeD3,
        // Add more image URLs for this member
      ],
      // Add more information about the team member here
    },
    // Add more team members similarly

  ];

  const openMemberPopup = (member) => {
    setSelectedMember(member);
  };

  const closeMemberPopup = () => {
    setSelectedMember(null);
  };

  return (
    <div style={{ backgroundImage: `url(${HeaderBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight py-5 text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">

            <span className="relative text-gray-50 uppercase"></span>
          </span>{' '}
          .
        </h2>

      </div> */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20 h-screen" >
        {/* Your existing team member display */}
        <div className=" gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg  flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div className="flex flex-wrap" key={index}>
              <div className='flex justify-center mx-auto border-2 rounded-xl px-4 py-2 mt-3' onClick={() => openMemberPopup(member)}>
                {/* Display team member information */}
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow cursor-pointer"
                  src={member.image}
                  alt={member.name}
                />
                <div className="flex flex-col justify-center items-center mx-auto">
                  <p className="text-lg font-bold">{member.name}</p>
                  {/* <p className="text-sm text-gray-800">{member.role}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Render the pop-up if a member is selected */}
        {selectedMember && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-50 ">
            <div className="bg-white p-8 rounded-lg">
              <button
                onClick={closeMemberPopup}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <div className="flex items-center w-96">

                <div className=''> <img
                  className="object-cover w-56 h-72 flex justify-center mx-auto mr-4 flex flex-wrap rounded-lg shadow"
                  src={selectedMember.image}
                  alt={selectedMember.name}
                />
                  <p className="text-lg font-bold text-center">{selectedMember.name}</p>
                  <p className="text-sm text-gray-800 " >{selectedMember.role}</p>
                  {/* Display a list of images for the selected team member */}
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedMember.imagesList.map((image, idx) => (
                      <img
                        key={idx}
                        className="object-cover w-full h-56 rounded-md shadow cursor-pointer"
                        src={image}
                        alt={`Image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Close button within the pop-up */}
              <button
                onClick={closeMemberPopup}
                className="block w-full mt-8 py-2 text-sm font-semibold text-center text-white bg-gray-800 rounded-md hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div></div>
  );
};

export default Allactors;
