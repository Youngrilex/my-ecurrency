import React from 'react';
import { Navbar } from '../../components/common/Navbar';
import { IoIosSearch } from 'react-icons/io';

const Header: React.FC = () => {
  return (
    <header className="bg-[#FBF9F2] text-white h-[50vh] sm:h-[100vh] bg-cover bg-center px-4 md:px-10 lg:px-40">
      <Navbar/>
      <div className="text-[18px] text-[#12305B] mt-24">
        <p>We're here to help you</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold">How can we assist?</h1>
        <div className="relative max-w-4xl mt-4">
        <input
          type="text"
          placeholder="Search FAQs here"
          className="w-full px-24 py-2 sm:h-[78px] rounded-md border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500"
        />
        <IoIosSearch className='absolute left-6 top-1/2 transform -translate-y-1/2 text-[34px]' />
      </div>
      </div>
    </header>
  );
};

export default Header;