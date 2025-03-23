import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Home = () => {
  return (
    <div className="bg-[#FFF8E1] min-h-screen py-10">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-[#DC143C] mb-6">
          जय बाबा वीर बुलाकी जी 🚩
        </h1>
        <p className="text-lg md:text-xl text-center text-[#6B4226] mb-8 leading-relaxed max-w-3xl mx-auto">
          <strong>श्री बाबा वीर बुलाकी जी</strong> के पावन धाम में आपका स्वागत
          है। यहाँ <strong>भक्ति, साधना</strong> और{" "}
          <strong>तांत्रिक सिद्धि</strong> के माध्यम से आध्यात्मिक ज्ञान और
          ईश्वरीय कृपा प्राप्त होती है। हमारे मंदिर में{" "}
          <strong>हवन, पूजा-पाठ, साधना एवं विशेष तांत्रिक अनुष्ठान</strong> का
          आयोजन किया जाता है।
        </p>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mb-10">
          <Link
            to="/events"
            className="bg-[#DC143C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#B22222] transition duration-300"
          >
            आगामी आयोजन देखें
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="./images/Home_Page.jpg"
            alt="Veer Bulaki Mandir"
            className="rounded-lg shadow-lg w-full max-w-4xl"
          />
        </div>

        {/* Additional Content Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#DC143C] mb-6">
            हमारी आध्यात्मिक यात्रा ✨
          </h2>
          <p className="text-lg md:text-xl text-[#6B4226] mb-6 leading-relaxed max-w-2xl mx-auto">
            हम <strong>तंत्र साधना, भक्ति और संस्कृति</strong> के माध्यम से
            आध्यात्मिक जागरूकता और आत्मज्ञान का प्रसार करते हैं। यहाँ आने वाले
            श्रद्धालु <strong>मनोकामना पूर्ति, शांति और दिव्य ऊर्जा</strong>{" "}
            प्राप्त कर सकते हैं।
          </p>
          <p className="text-lg md:text-xl text-[#6B4226] font-semibold">
            हमारा मार्ग सत्य, श्रद्धा और सेवा पर आधारित है। <br />
            <span className="text-[#DC143C]">
              हम अंधविश्वास और पाखंडवाद को नहीं बढ़ावा देते।
            </span>
          </p>
        </div>

        {/* Section on Teachings */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#DC143C] mb-6">
            बाबा वीर बुलाकी जी की शिक्षाएँ 📖
          </h2>
          <p className="text-lg md:text-xl text-[#6B4226] mb-6 leading-relaxed max-w-3xl mx-auto">
            बाबा वीर बुलाकी जी हमें{" "}
            <strong>भक्ति, अनुशासन, तांत्रिक विद्या</strong> एवं{" "}
            <strong>आत्मशुद्धि</strong> का संदेश देते हैं। उनकी शिक्षाएँ हमें
            जीवन के कठिन मार्गों पर <strong>साहस और मार्गदर्शन</strong> प्रदान
            करती हैं। हमारे मंदिर में नियमित रूप से{" "}
            <strong>सत्संग, अनुष्ठान एवं विशेष पूजा-पाठ</strong> का आयोजन किया
            जाता है।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
