import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import nexusLogo from '../assets/nexus.png';

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
    <section className="relative bg-[#212121] text-white px-6 md:px-20 py-20 z-10 w-full overflow-hidden">
      {/* 4 Vertical Lines */}
      <div className="absolute inset-0 flex justify-evenly z-0">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-px h-full bg-white bg-opacity-5" />
        ))}
      </div>

      {/* Large "contact" top-right */}
      <div className="absolute top-6 right-6 z-0">
        <span className="text-[#3d3d3d] text-[120px] font-bold opacity-10 tracking-wider uppercase select-none">
          contact
        </span>
      </div>

      {/* Large "contact" bottom-left */}
      <div className="absolute bottom-6 left-6 z-0">
        <span className="text-[#3d3d3d] text-[120px] font-bold opacity-10 tracking-wider uppercase select-none">
          contact
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-semibold text-center mb-14 tracking-widest z-10 relative">
        GET IN <span className="text-[#c9a36d]">TOUCH</span>
      </h2>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 relative z-10">
        {/* Contact Info */}
        <div className="flex flex-col space-y-6 text-sm w-full md:w-1/3 mb-10 md:mb-0">
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
          className="flex-1 grid grid-cols-1 gap-4 w-full md:grid-cols-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded w-full"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Message...."
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded w-full"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="bg-[#2c2c2c] text-white px-4 py-3 rounded w-full"
          />

          {/* Button */}
          <div className="col-span-3 flex justify-end mt-4 md:mt-0">
            <button
              type="submit"
              className="bg-[#c9a36d] text-[#212121] font-semibold px-10 py-3 rounded-full flex items-center space-x-2 hover:bg-[#b28b54] transition"
            >
              <span>SEND</span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 items-center text-sm text-gray-400 relative z-10">
        <div className="flex items-center justify-center md:justify-start">
          <img src={nexusLogo} alt="Nexus Logo" className="w-28 h-auto object-contain" />
        </div>
        <div className="text-center">by KALVIG</div>
        <div className="text-center md:text-right">© 2025 Nexus Group.</div>
      </div>
    </section>
  );
};

export default Contact;
