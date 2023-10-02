import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ visible: false, message: '' });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_4eu9ums',
        'template_g8uad8n',
        form.current,
        'Pd9-1wgJNd5aBGsuF'
      );
      console.log(result.text);

      // Show a success message
      setAlert({ visible: true, message: 'Email sent successfully!' });

      // Clear form fields
      form.current.reset();
    } catch (error) {
      console.error(error.text);

      // Show an error message
      setAlert({ visible: true, message: 'Failed to send email. Please try again.' });
    }
  };

  const dismissAlert = () => {
    setAlert({ visible: false, message: '' });
  };

  return (
    <div className='mt-10 bg-arsenic-primary w-96 justify-center p-6 rounded-3xl '>
      {alert.visible && (
        <div className={` bg-white bg-${alert.message.includes('success') ? 'green' : 'red'}-100 border border-${alert.message.includes('success') ? 'green' : 'red'}-400 text-${alert.message.includes('success') ? 'green' : 'red'}-700 px-4 py-3 rounded-xl relative mb-4`}>
          <strong className="font-bold">{alert.message}</strong>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
            onClick={dismissAlert}
          >
            <svg
              className={`fill-current h-6 w-6 text-${alert.message.includes('success') ? 'green' : 'red'}-500`}
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                // d="M14.348 5.652a.5.5 0 01.708 0l4 4a.5.5 0 11-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 11.708.708l-4 4z"
              />
              <path
                fillRule="evenodd"
                d="M5.293 1.293a1 1 0 011.414 0L10 4.586l3.293-3.293a1 1 0 111.414 1.414L11.414 6l3.293 3.293a1 1 0 11-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 6 5.293 2.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      )}
        <h1 className='text-copper text-3xl font-bold p-4 mb-4'>Send me an email!</h1>
      <form ref={form} onSubmit={sendEmail} className="w-full rounded-xl p-4 border border-copper mx-auto">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="user_name">
            Your Name
          </label>
          <input
            className="appearance-none border  text-white bg-transparent  transition-all duration-500 hover:scale-95  rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:border-copper"
            id="user_name"
            type="text"
            name="user_name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="user_email">
            Your Email
          </label>
          <input
            className="appearance-none border text-white bg-transparent  transition-all duration-500 hover:scale-95  rounded-xl w-full py-2 px-3  leading-tight focus:outline-none focus:border-copper"
            id="user_email"
            type="email"
            name="user_email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
           Message
          </label>
          <textarea
            className="appearance-none border  text-white bg-transparent  transition-all duration-500 hover:scale-95  rounded-xl w-full py-2 px-3  leading-tight focus:outline-none focus:border-copper"
            id="message"
            name="message"
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            className=" justify-center flex ml-4 bg-white transition-all duration-500 hover:scale-95 w-40  mt-4 hover:bg-copper py-2  text-gray-900  hover:text-white rounded-xl border cursor-pointer"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};
