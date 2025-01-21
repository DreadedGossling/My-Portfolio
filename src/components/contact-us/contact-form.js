import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData)
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 10000)
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setIsSuccess(false);
        }
      );

    // Clear the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="bg-stone-900 shadow-lg rounded-lg p-8 font-serif
              outline outline-1 outline-cyan-800">
      <h3 className="text-lg md:text-2xl font-bold mb-4 text-white">Message Me</h3>
      <form onSubmit={handleSubmit} className='text-black'>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 p-1 md:p-3 w-full rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mb-2 md:mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 p-1 md:p-3 w-full rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mb-2 md:mb-4"
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="border border-gray-300 p-1 md:p-3 w-full rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mb-2 md:mb-4"
        />
        <textarea
          placeholder="Message..."
          rows="3"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-gray-300 p-1 md:p-3 w-full rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none mb-2 md:mb-4"
        ></textarea>
        <div className="flex justify-start">
          <button type='submit'
            className="p-2 md:p-3 text-white bg-cyan-800 hover:bg-cyan-900">
            Send Message
          </button>
        </div>
      </form>
      {isSuccess && (
        <p className="text-green-500 text-center mt-2 md:mt-4">
          Your message has been sent successfully!
        </p>
      )}
    </div>
  )
}

export default ContactForm
