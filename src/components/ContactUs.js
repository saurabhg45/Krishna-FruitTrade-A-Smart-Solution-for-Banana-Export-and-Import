import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react"; // Importing icons from lucide-react

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    countryCode: "91",
    mobile: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white">
    <section className="mt-36">
      {/* Breadcrumb Section */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-9">
          <h2 className="text-4xl font-semibold text-gray-800">Contact Us</h2>
          <ul className="flex justify-center space-x-2 text-gray-600">
            <li>
              <a href="/home" title="home" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Contact Area */}
      <section className="contact-area ptb-100 mrl-80">
        <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center ">
            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="contact-title">
                <h4 className="text-xl font-semibold text-gray-700">Registered Address:</h4>
              </div><br />
              <div className="contact-info">
                <div className="single-contact-info flex items-center space-x-4">
                  <MapPin className="text-green-600 w-6 h-6" /> {/* MapPin Icon */}
                  <div className="contact-info-text">
                    <p className="text-gray-600">
                      708/709, Ap. Brahmanpuri, <br />
                      Ta. Shahada, Dist. Nandurbar, <br />
                      Maharashtra, 425409 India
                    </p>
                  </div>
                </div>
                <br />
                <div className="single-contact-info flex items-center space-x-4">
                  <Mail className="text-green-600 w-6 h-6" /> {/* Mail Icon */}
                  <div className="contact-info-text">
                    <p className="text-gray-600">kfpmap@gmail.com</p>
                  </div>
                </div>
                <br />
                <div className="single-contact-info flex items-center space-x-4">
                  <Phone className="text-green-600 w-6 h-6" /> {/* Phone Icon */}
                  <div className="contact-info-text">
                    <p className="text-gray-600">9850001376 / 9168841376</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-map-wrapper">
              <div className="contact-message">
                <div className="contact-title">
                  <h4 className="text-xl font-semibold text-gray-700">Connect With Us</h4><br />
                </div>
                <form onSubmit={handleSubmit} className="kwes-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="contact-input-style mb-6">
                      <label className="block text-sm font-medium text-gray-600">Full Name <span className="text-red-500">*</span></label>
                      <input
                        id="fullname"
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    <div className="contact-input-style mb-6">
                      <label className="block text-sm font-medium text-gray-600">Email <span className="text-red-500">*</span></label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    <div className="contact-input-style mb-6">
                      <label className="block text-sm font-medium text-gray-600">Country Code <span className="text-red-500">*</span></label>
                      <select
                        name="countryCode"
                        id="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      >
                        <option value="91">India (+91)</option>
                        <optgroup label="Other countries">
                          <option value="213">Algeria (+213)</option>
                          <option value="376">Andorra (+376)</option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="contact-input-style mb-6">
                      <label className="block text-sm font-medium text-gray-600">Mobile Number <span className="text-red-500">*</span></label>
                      <input
                        id="mobile"
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    <div className="contact-input-style mb-6">
                      <label className="block text-sm font-medium text-gray-600">Company Name <span className="text-red-500">*</span></label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    <div className="contact-textarea-style mb-6">
                      <label className="block text-sm font-medium text-gray-600">Message <span className="text-red-500">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <button
                        id="submit"
                        className="kwes-enquire-contact-us bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
                        type="submit"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </div>
                </form>
                <p id="toast"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <br />
    </div>
  );
}
