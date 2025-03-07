// src/pages/About.jsx
import React from 'react';
import StaffCard from '../components/StaffCard';

const About = () => {
  const staff = [
    {
      name: "गुरु श्री टिटू भगत जी",
      role: "मुख्य संचालक / संस्थापक",
      image: "images/Guruji.jpg",
      description:
        "गुरु श्री टिटू भगत जी हमारे मंदिर के संस्थापक और मुख्य संचालक हैं, जो भक्तों को ज्ञान और आध्यात्मिक नेतृत्व प्रदान करते हैं।"
    },
    {
      name: "पुजारी आकाश ढकोलिया",
      role: "प्रधान सेवदार / पुजारी",
      image: "images/Pujari.jpg",
      description:
        "पुजारी आकाश ढकोलिया मंदिर में सभी धार्मिक अनुष्ठानों और सेवाओं का नेतृत्व करते हैं, भक्तों को आध्यात्मिक मार्गदर्शन प्रदान करते हैं।"
    },
    {
      name: "श्री नवीन कुमार",
      role: "कोषाध्यक्ष",
      image: "images/naveen.jpg",
      description:
        "श्री नवीन कुमार मंदिर के वित्तीय कार्यों का समर्पण और पारदर्शिता के साथ प्रबंधन करते हैं।"
    },
    
    {
      name: "राजीव चावला",
      role: "अध्यक्ष",
      image: "images/rajeev.jpg",
      description: "राजीव चावला मंदिर की प्रशासनिक और धार्मिक गतिविधियों का नेतृत्व करते हैं."
    }
    ,
    {
      name: "राहुल चड्ढा",
      role: "सह-कोषाध्यक्ष",
      image: "images/Rahul_Bhaiya.jpg",
      description:
        "राहुल चड्ढा मंदिर के वित्तीय संचालन में सहायता प्रदान करते हैं, जिससे जवाबदेही और पारदर्शिता बनी रहती है।"
    },
    {
      name: "समीर",
      role: "सचिव",
      image: "images/sameer.jpg",
      description:
        "समीर प्रशासन और दस्तावेज़ीकरण का सुचारू संचालन सुनिश्चित करते हैं, जिससे मंदिर की गतिविधियाँ व्यवस्थित रहती हैं।"
    }
   
    
  ];

  return (
    <div className="bg-[#FFF8E1] min-h-screen py-10">
      <div className="container mx-auto px-6 text-center">
        {/* शीर्षक अनुभाग */}
        <h1 className="text-4xl font-bold text-[#FFB71B] mb-6">हमारे बारे में</h1>
        <p className="text-lg text-[#6B4226] mb-6 leading-relaxed max-w-3xl mx-auto">
          हमारे मंदिर में आपका स्वागत है! हमारा उद्देश्य आध्यात्मिक विकास, सामुदायिक एकता और शांति के लिए एक स्थान प्रदान करना है।
          भक्ति और आत्मज्ञान की इस यात्रा में हमारे साथ जुड़ें। हमारा मंदिर प्रार्थना, ध्यान और दिव्य उत्सवों का स्थान है।
        </p>

        {/* स्टाफ अनुभाग */}
        <h2 className="text-3xl font-semibold text-[#FFB71B] mb-8">हमारी समर्पित टीम</h2>

        {/* स्टाफ कार्ड अनुभाग */}
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
