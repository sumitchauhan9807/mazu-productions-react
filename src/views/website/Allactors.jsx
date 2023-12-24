import React, { useState } from 'react';
import HeaderBackground from 'assets/image/bg.jpg'
import luckygay3 from 'assets/image/luckygay/3.png'
import luckygay2 from 'assets/image/luckygay/2.png'
import luckygay1 from 'assets/image/luckygay/1.png'

const Allactors = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Luckygays',
      role: '',
      image: luckygay1,
      imagesList: [
        luckygay2,
        luckygay3,
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
    <div style={{backgroundImage:`url(${HeaderBackground})`,  backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 h-screen" >
      {/* Your existing team member display */}
      <div className=" gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg  flex">
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
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <button
              onClick={closeMemberPopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
            <div className="flex items-center">
              <img
                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                src={selectedMember.image}
                alt={selectedMember.name}
              />
              <div>
                <p className="text-lg font-bold">{selectedMember.name}</p>
                <p className="text-sm text-gray-800">{selectedMember.role}</p>
                {/* Display a list of images for the selected team member */}
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedMember.imagesList.map((image, idx) => (
                    <img
                      key={idx}
                      className="object-cover w-full h-24 rounded-md shadow cursor-pointer"
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
