import React from 'react';
import { Navbar } from '../../components/common/Navbar';

const Header: React.FC = () => {
  return (
    <header className="text-white h-[50vh] sm:h-[100vh] bg-cover bg-center px-4 md:px-10 lg:px-40" style={{ backgroundImage: "url('/header.jpg')" }}>
      <Navbar/>
      <div className="text-[18px] text-[#12305B] mt-24">
        <p>We're here to help you</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Relax & Rest</h1>
      </div>
    </header>
  );
};

export default Header;
