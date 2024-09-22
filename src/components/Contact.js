import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact({ ContactRef }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_cef9fgq'; 
    const templateID = 'template_oud0q1d'; 
    const userID = 'dlT-dZktJn0TlevCq'; 

    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        alert('Email sent successfully');
      }, (error) => {
        console.error('Error:', error.text);
        alert('Failed to send email');
      });
  };

  return (
    <>
      <br />
      <br />
      
      <p className='text-2xl font-semibold text-center' ref={ContactRef} style={{ paddingTop: '90px' }}>Contact Me</p>
      <br />
      <div className="max-w-md mx-auto p-6 shadow-md rounded-lg bg-opacity-50 backdrop-blur-lg dark:bg-opacity-60">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Shivam Kumar"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="shivam@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
         
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your message here"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="w-full text-white p-2 rounded-lg border border-transparent focus:ring bg-pink-700 hover:bg-pink-800">Submit</button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Contact;