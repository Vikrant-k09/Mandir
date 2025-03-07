// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "7982008381"; // मंदिर का व्हाट्सएप नंबर
    const predefinedText = `🙏 जय बाबा वीर बलुकी जी 🙏\n\n👤 नाम: ${formData.name}\n💬 संदेश: ${formData.message}\n\nकृपया जब समय मिले, उत्तर दें। धन्यवाद! 🙏`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(predefinedText)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#FFF8E1] min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#DC143C] mb-6">
          संपर्क करें
        </h1>
        <p className="text-center text-[#6B4226] mb-6">
          हमें आपसे सुनकर खुशी होगी! हमसे संपर्क करें।
        </p>

        <form onSubmit={handleWhatsAppSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-lg font-medium text-[#6B4226]" htmlFor="name">
              नाम
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#DDD] rounded-md mt-2"
              placeholder="अपना नाम दर्ज करें"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-[#6B4226]" htmlFor="message">
              संदेश
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#DDD] rounded-md mt-2"
              rows="4"
              placeholder="अपना मैसेज लिखें"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#25D366] text-white py-3 rounded-lg hover:bg-[#128C7E] transition duration-300"
          >
            WhatsApp पर भेजें
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
