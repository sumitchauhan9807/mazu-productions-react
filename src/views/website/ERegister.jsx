import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Getstrartedbg from 'assets/image/bg.jpg';

const ERegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    skype: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    radioOption: '',
  });

  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSendEmail = () => {
    if (!recaptchaValue) {
      // Perform validation for reCAPTCHA
      alert("Please complete the reCAPTCHA!");
      return;
    }

    const { firstName, lastName, email, skype, checkbox1, checkbox2, radioOption } = formData;
    const mailtoLink = `mailto:support@dialogmaxx.com?subject=New Contact Form Submission&body=First Name: ${firstName}%0ALast Name: ${lastName}%0AEmail: ${email}%0ASkype: ${skype}%0ACheckbox 1: ${checkbox1 ? 'Yes' : 'No'}%0ACheckbox 2: ${checkbox2 ? 'Yes' : 'No'}%0ARadio Option: ${radioOption}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (

    <div className='py-10 px-3 '  style={{ backgroundImage: `url(${Getstrartedbg}) `, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-xl shadow-lg border-b-2 bg-opacity-100  px-3">
      <form>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-900">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-900">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-900">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-900">Skype:</label>
          <input
            type="text"
            name="skype"
            value={formData.skype}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
            required
          />
        </div><label className="block text-sm font-bold text-gray-900">you want to:</label>
        <div className="mb-4 flex flex-wrap gap-5">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="checkbox1"
              checked={formData.checkbox1}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <span className="text-sm font-bold text-gray-900">Sell/Produce Medias </span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="checkbox2"
              checked={formData.checkbox2}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <span className="text-sm font-bold text-gray-900">Do Live Cam</span>
          </label>
          {/* <label className="flex items-center">
            <input
              type="checkbox"
              name="checkbox2"
              checked={formData.checkbox3}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <span className="text-sm font-bold text-gray-900">Checkbox 3</span>
          </label> */}
        </div>
        <div className="mb-4 " >
          {/* <label className="block text-sm font-bold text-gray-900">Radio Options:</label> */}
          <div className='flex flex-wrap gap-2'>
          <label className="block text-sm font-bold text-gray-900">Are you:</label>
          <div className=' flex flex-wrap gap-2'>
            <label className="flex items-center">
              <input
                type="radio"
                name="radioOption"
                value="option1"
                checked={formData.radioOption === 'option1'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <span className="text-sm font-bold text-gray-900">Gay</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="radioOption"
                value="option2"
                checked={formData.radioOption === 'option2'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <span className="text-sm font-bold text-gray-900">  Bisexual</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="radioOption"
                value="option3"
                checked={formData.radioOption === 'option3'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <span className="text-sm font-bold text-gray-900">Straight</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="radioOption"
                value="option4"
                checked={formData.radioOption === 'option4'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <span className="text-sm font-bold text-gray-900">Trans</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="radioOption"
                value="option5"
                checked={formData.radioOption === 'option5'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <span className="text-sm font-bold text-gray-900">Lesbian</span>
            </label></div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-900">reCAPTCHA:</label>
          <ReCAPTCHA
            sitekey="6Le9O2IpAAAAAMKZbIW4RE41HL-2HhHvs5LQ0BbW"
            onChange={handleRecaptchaChange}
          />
        </div>
        <button
          type="button"
          onClick={handleSendEmail}
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </form>
    </div></div>
  );
};

export default ERegister;
