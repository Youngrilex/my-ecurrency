import React from "react";
import { Navbar } from "../../components/common/Navbar";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header
      className="relative text-white h-[50vh] sm:h-[100vh] bg-cover bg-center px-4 md:px-10 lg:px-40 z-10"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
      <Navbar />
      <div className="text-[#12305B] mt-24">
        <p className="text-lg md:text-xl">We're here to help you</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Relax & Rest</h1>
        <p className="mt-2 text-base md:text-lg">
          With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.
        </p>
        <button
          className="mt-6 px-16 py-3 bg-[#FC5959] text-white font-semibold rounded-lg hover:bg-red-600"
          onClick={() => navigate("/shop")}
        >
          Visit Shop
        </button>
      </div>
      <img
        src="/Sponsor.png"
        alt="Sponsor Logos"
        className="absolute -bottom-16 right-0 shadow-2xl z-20"
      />
    </header>
  );
};

export default Header;
