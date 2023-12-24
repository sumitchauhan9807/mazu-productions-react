import React, { useState } from 'react';
import HeaderBackground from 'assets/image/bg.jpg'

const SupportPage = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [supportInformation, setSupportInformation] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setSupportInformation('');
    };

    const handleSupportInformationChange = (event) => {
        setSupportInformation(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const supportEmails = {
            Billing: 'billing@dialogmaxx.com',
            ActorManagement: 'actormanagement@dialogmaxx.com',
            Technic: 'technic@dialogmaxx.com',
            Legal: 'legal@dialogmaxx.com',
        };

        const selectedEmail = supportEmails[selectedOption];
        if (selectedEmail && supportInformation && name && email && subject) {
            const mailtoLink = `mailto:${selectedEmail}?cc=studio@dialogmaxx.com&subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(
                `Support Category: ${selectedOption}\nSupport Information: ${supportInformation}\nName: ${name}\nEmail: ${email}`
            )}`;
            window.location.href = mailtoLink;
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className='p-8 py-56'  style={{backgroundImage:`url(${HeaderBackground})`,  backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h1 className='text-3xl font-bold mb-4 text-center text-gray-50 uppercase' > <span className='text-yellow-600'>Dialog</span>maxX  Support </h1>
            <p className='mb-6 text-center'>Contact us for support by selecting a category and  <br />filling  out the form below: or click on send us a message</p>
          
            {/* <button className='flex justify-center mx-auto bg-yellow-600  rounded-xl shadow-xl uppercase font-sans  text-gray-800 px-5 py-3 mb-5'><a href="https://tawk.to/chat/6586e1d207843602b8050e81/1hibe48a8" className='text-gray-800 '>click here to  send message</a> </button> */}
            <button
  className='flex justify-center mx-auto bg-yellow-600 rounded-xl shadow-xl uppercase font-sans text-gray-800 px-5 py-3 mb-5'
  onClick={() => {
    window.open(
      'https://tawk.to/chat/6586e1d207843602b8050e81/1hibe48a8',
      'ChatWindow',
      'width=600,height=400' // You can adjust the width and height as needed
    );
  }}
>
click here to  send message
</button>  <p className='mb-6 text-center uppercase border-b-4 w-36 flex justify-center mx-auto'>or</p>
            <form className='max-w-xl mx-auto bg-white px-5 rounded-2xl justify-center grid grid-cols-2 gap-4 border-t-4 border-yellow-800 py-5' onSubmit={handleSubmit}>
                <div className='col-span-2'>
                   
                    <label className=' mb-2 text-c' htmlFor="supportCategory">Select Support Category:</label>
                    <select
                        className='block w-full border rounded-md px-4 py-2'
                        id="supportCategory"
                        onChange={handleOptionChange}
                        value={selectedOption}
                    >
                        <option value="" className=''>Select Category</option>
                        <option value="Billing">Billing</option>
                        <option value="ActorManagement">Actor Management</option>
                        <option value="Technic">Technic</option>
                        <option value="Legal">Legal</option>
                    </select>
                </div>

                {selectedOption && (
                    <div className='col-span-2'>
                        <label className='block mb-2' htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={handleSubjectChange}
                            placeholder="Enter subject"
                            className='w-full border rounded-md px-4 py-2 mb-4'
                            required
                        />

                        <label className='block mb-2' htmlFor="supportInfo">Support Information:</label>
                        <textarea
                            id="supportInfo"
                            value={supportInformation}
                            onChange={handleSupportInformationChange}
                            placeholder={`Enter your ${selectedOption} support information here`}
                            className='w-full border rounded-md px-4 py-2 mb-4'
                            required
                        ></textarea>

                        <label className='block mb-2' htmlFor="name">Your Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Enter your name"
                            className='w-full border rounded-md px-4 py-2 mb-4'
                            required
                        ></input>

                        <label className='block mb-2' htmlFor="email">Your Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className='w-full border rounded-md px-4 py-2 mb-4'
                            required
                        ></input>
                    </div>
                )}

                <button
                    type="submit"
                    className='col-span-2 bg-blue-500 hover:bg-blue-600 uppercase text-white font-bold py-2 rounded-xl py-3 shadow-2xl px-4 rounded focus:outline-none focus:shadow-outline'
                >
                    Submit
                </button>

            
            </form> 
        </div>
    );
};

export default SupportPage;
