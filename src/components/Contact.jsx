import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    <section className="py-12 px-5">
      <h2
        className={`text-4xl font-extrabold text-center mb-10 text-gray-300
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          transition-all duration-1000 ease-out`}
      >
        Contact Me
      </h2>

      {/* Contact Information */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-300">You can contact me through these links!</p>
        <div className="mt-5 space-y-3">
          <p className="text-gray-300">
            <strong>Email:</strong>{" "}
            <a href="mailto:yahikooo7586@email.com" className="text-cyan-400 hover:underline">
              yahikooo7586@email.com
            </a>
          </p>
          <p className="text-gray-300">
            <strong>Phone:</strong> +998 94 152 75 86
          </p>
          <p className="text-gray-300">
            <strong>Socials:</strong>{" "}
            <a href="https://t.me/bekzod1337" target="_blank" className="text-cyan-400 hover:underline">
              Telegram
            </a>{" "}
            |{" "}
            <a href="https://github.com/bekzod1337" target="_blank" className="text-cyan-400 hover:underline">
              GitHub
            </a>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className={`max-w-lg mx-auto bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          ease-out`}
      >
        <div className="mb-5">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block text-lg font-semibold text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-cyan-500 text-white rounded-md font-semibold hover:bg-cyan-400 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
