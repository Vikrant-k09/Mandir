// src/pages/Services.jsx
import React from 'react';

const servicesData = [
  {
    title: "Havan & Puja",
    description:
      "Experience the divine power of Havan & Puja with our expert Pandits. These rituals bring peace, prosperity, and spiritual awakening.",
    icon: "https://via.placeholder.com/150?text=Havan",
  },
  {
    title: "Divine Teachings",
    description:
      "Our Mandir offers regular sessions on sacred teachings from Vedic texts and spiritual scriptures. Embark on a journey of wisdom.",
    icon: "https://via.placeholder.com/150?text=Teachings",
  },
  {
    title: "Spiritual Counseling",
    description:
      "Our spiritual counselors provide one-on-one sessions to guide you through life's challenges and help you find inner peace.",
    icon: "https://via.placeholder.com/150?text=Counseling",
  },
  {
    title: "Yoga & Meditation Sessions",
    description:
      "Join our Yoga & Meditation sessions to connect with your spiritual self, find tranquility, and improve your mental and physical well-being.",
    icon: "https://via.placeholder.com/150?text=Yoga",
  },
  {
    title: "Festivals & Celebrations",
    description:
      "We celebrate all major Hindu festivals with great zeal and devotion. Be part of the joyous celebrations with our community.",
    icon: "https://via.placeholder.com/150?text=Festivals",
  },
];

const Services = () => {
  return (
    <div className="bg-[#FFF8E1] min-h-screen py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-[#DC143C] mb-6">
          Our Services
        </h1>
        <p className="text-lg text-[#6B4226] mb-12 leading-relaxed mx-auto max-w-3xl">
          At our Mandir, we offer a variety of services to help you connect with the divine and enhance your spiritual journey. Here are some of the services we provide:
        </p>

        {/* Services Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 w-full max-w-[400px] min-w-[280px]"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#DC143C] text-center mb-4">
                {service.title}
              </h3>
              <p className="text-md text-[#6B4226] text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
