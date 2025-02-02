// src/pages/Events.jsx
import React from 'react';

const events = [
  {
    title: "Diwali Celebration",
    date: "2025-11-12",
    description: "Join us in the grand Diwali celebration with prayers, rituals, and festivities.",
  },
  {
    title: "Navratri Puja",
    date: "2025-10-12",
    description: "Celebrate the nine nights of devotion with fasting, prayers, and music.",
  },
  {
    title: "Makar Sankranti Festival",
    date: "2025-01-14",
    description: "Celebrate the harvest festival with kite flying, prayers, and community gatherings.",
  },
];

const Events = () => {
  return (
    <div className="bg-[#FFF8E1] min-h-screen py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#DC143C] mb-10">
          Upcoming Events
        </h1>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2 mt-6"
            >
              {/* Event Title */}
              <h2 className="text-2xl font-bold text-[#6B4226] mb-2">{event.title}</h2>

              {/* Event Date */}
              <p className="text-lg text-[#228B22] font-semibold mb-4">
                📅 {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              {/* Event Description */}
              <p className="text-md text-[#6B4226] mb-4">{event.description}</p>

              {/* Register Button */}
              <div className="text-center">
                <a
                  href={`/register/${event.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-[#DC143C] text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-[#B22222] transition duration-300"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
