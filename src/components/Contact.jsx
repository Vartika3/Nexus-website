// Contact.js
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    email: '',
    company: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  return (
    <section className="bg-[#0e0e0e] text-white px-6 md:px-20 py-20 relative z-10">
      {/* Title */}
      <h2 className="text-4xl font-semibold text-center mb-16 tracking-widest">
        GET IN <span className="text-[#c9a36d]">TOUCH</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex flex-col space-y-6 text-sm md:w-1/3">
          <div className="flex items-center space-x-3">
            <Phone size={16} />
            <span>+91 12345 67890</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone size={16} />
            <span>+91 12345 67890</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={16} />
            <span>info@nexusgroup.in</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin size={16} />
            <span>Lorem Ipsum</span>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* First row */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded col-span-1"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded col-span-1"
            required
          />
          <textarea
            name="message"
            placeholder="Message...."
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded col-span-1 md:row-span-2"
            required
          />

          {/* Second row */}
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded col-span-1"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded col-span-1"
          />

          {/* Send Button */}
          <div className="col-span-3 flex justify-end">
            <button
              type="submit"
              className="bg-[#c9a36d] text-black font-semibold px-10 py-3 rounded-full flex items-center space-x-2 hover:bg-[#b28b54] transition"
            >
              <span>SEND</span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </form>
      </div>

      {/* Footer Layout */}
      <div className="mt-20 grid grid-cols-3 items-end text-sm text-gray-400">
        <div className="flex items-end">
          <div>
            <div className="text-6xl font-bold text-[#c9a36d] leading-none">N</div>
            <div className="tracking-widest text-xs ml-1">NEXUS</div>
          </div>
        </div>
        <div className="text-center">by KALVIG</div>
        <div className="text-right">© 2025 Nexus Group.</div>
      </div>
    </section>
  );
};

export default Contact;