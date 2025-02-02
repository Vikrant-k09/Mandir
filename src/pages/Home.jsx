// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#FFF8E1] min-h-screen py-10">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-[#DC143C] mb-6">
          Jai Baba Veer Baluki Ji 
        </h1>
        <p className="text-lg md:text-xl text-center text-[#6B4226] mb-8 leading-relaxed max-w-2xl mx-auto">
          Immerse yourself in the spiritual essence of our Mandir. We offer a space to meditate, pray, and
          find peace. Join us for our events and services, and experience a journey towards divine enlightenment.
        </p>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mb-10">
          <a
            href="/events"
            className="bg-[#DC143C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#B22222] transition duration-300"
          >
            Explore Upcoming Events
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="./images/Home_Page.jpg"
            alt="Mandir"
            className="rounded-lg shadow-lg w-full max-w-4xl"
          />
        </div>

        {/* Additional Content Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#DC143C] mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-[#6B4226] mb-6 leading-relaxed max-w-2xl mx-auto">
            Our mission is to provide a sanctuary for spiritual growth, community connection, and cultural
            preservation. We welcome everyone to join us in this journey of faith and harmony.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;