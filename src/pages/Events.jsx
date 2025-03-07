import React, { useState, useEffect } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  // Fetch events from JSON file
  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="bg-[#FFF8E1] min-h-screen py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#DC143C] mb-10">
          आगामी आयोजन
        </h1>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2 mt-6"
              >
                {/* Event Title */}
                <h2 className="text-2xl font-bold text-[#6B4226] mb-2">{event.title}</h2>

                {/* Event Date */}
                <p className="text-lg text-[#228B22] font-semibold mb-4">
                  📅 {new Date(event.date).toLocaleDateString("hi-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                {/* Event Description */}
                <p className="text-md text-[#6B4226] mb-4">{event.description}</p>

                {/* Invitation Message */}
                <p className="text-md font-semibold text-[#DC143C]">
                  आप सादर आमंत्रित हैं।
                </p>
              </div>
            ))
          ) : (
            <p className="text-lg text-[#6B4226]">कोई आयोजन सूचीबद्ध नहीं है।</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
