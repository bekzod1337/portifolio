import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-gray-900 text-white py-10 px-5">
      <h2
        className={`text-3xl font-bold text-center mb-8
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          transition-all duration-1000 ease-out`}
      >
        Contact Me
      </h2>
      
      <div className="text-center mb-10">
        <p className="text-xl">You can contact me through these links!</p>
        <div className="mt-5">
          <p>Email: <a href="mailto: yahikooo7586@email.com" className="text-cyan-400">yahikooo7586@email.com</a></p>
          <p>Phone: +94 152 75 86</p>
          <p>
            Socials: 
            <a href="https://t.me/bekzod1337" target="_blank" className="text-cyan-400 ml-2">Telegram</a> | 
            <a href="https://github.com/bekzod1337" target="_blank" className="text-cyan-400 ml-2">GitHub</a>
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          transition-all duration-1000 ease-out`}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="w-full py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-400 transition duration-300">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
