// src/pages/About.jsx
import React from 'react';
import StaffCard from '../components/StaffCard';

const About = () => {
  const staff = [
    {
      name: "Pandit Rajesh Sharma",
      role: "Head Pujari",
      image: "https://via.placeholder.com/150",
      description:
        "Pandit Rajesh Sharma has been performing prayers and rituals at the Mandir for over 25 years. His devotion and knowledge of scriptures are unmatched.",
    },
    {
      name: "Sushma Devi",
      role: "Manager",
      image: "https://via.placeholder.com/150",
      description:
        "Sushma Devi ensures that the Mandir operations run smoothly, managing the events, community outreach, and daily rituals.",
    },
    {
      name: "Amit Kumar",
      role: "Assistant Pujari",
      image: "https://via.placeholder.com/150",
      description:
        "Amit Kumar assists with the daily prayers and helps organize events. He is always ready to guide devotees with spiritual advice.",
    },
    {
      name: "Meera Rani",
      role: "Volunteer Coordinator",
      image: "https://via.placeholder.com/150",
      description:
        "Meera Rani oversees the volunteer program, ensuring that everyone is engaged and contributing to the Mandir's activities.",
    },
  ];

  return (
    <div className="bg-[#FFF8E1] min-h-screen py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-[#FFB71B] mb-6">About Us</h1>
        <p className="text-lg text-[#6B4226] mb-6 leading-relaxed max-w-3xl mx-auto">
          Welcome to our Mandir! We aim to provide a space for spiritual growth, community bonding, and peace.
          Join us in our journey of devotion and enlightenment. Our Mandir serves as a place for prayer, 
          meditation, and celebration of the divine.
        </p>

        {/* Staff Section */}
        <h2 className="text-3xl font-semibold text-[#FFB71B] mb-8">Our Dedicated Staff</h2>

        {/* Staff Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {staff.map((member, index) => (
            <StaffCard key={index} staff={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
