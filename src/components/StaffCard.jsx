// src/components/StaffCard.jsx
import React from 'react';

const StaffCard = ({ staff }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <img
        src={staff.image}
        alt={staff.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold text-[#6B4226] text-center">{staff.name}</h3>
      <p className="text-md text-[#FFB71B] text-center">{staff.role}</p>
      <p className="text-sm text-[#6B4226] mt-4 text-center">{staff.description}</p>
    </div>
  );
};

export default StaffCard;
