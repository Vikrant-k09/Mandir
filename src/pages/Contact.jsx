// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // In a real application, you'd handle form submission here (e.g., API call).
  };

  return (
    <div className="bg-[#FFF8E1] min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#DC143C] mb-6">Contact Us</h1>
        <p className="text-center text-[#6B4226] mb-6">
          We would love to hear from you! Please fill out the form below to get in touch.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-lg font-medium text-[#6B4226]" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#DDD] rounded-md mt-2"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-[#6B4226]" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#DDD] rounded-md mt-2"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-[#6B4226]" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#DDD] rounded-md mt-2"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFB71B] text-white py-3 rounded-lg hover:bg-[#DC143C] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );  
};

export default Contact;
