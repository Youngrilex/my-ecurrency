import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation(); // Get current location

  return (
    <nav className="container mx-auto flex gap-24 sm:gap-40 pt-7 text-[#12305B] text-xs sm:text-[18px]">
      <img src="/logo.png" alt="" className="h-8 sm:h-16" />
      <div className="flex space-x-4 md:space-x-16">
        <Link 
          to="/" 
          className={`hover:underline ${location.pathname === '/' ? 'font-bold' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`hover:underline ${location.pathname === '/about' ? 'font-bold' : ''}`}
        >
          About
        </Link>
        <Link 
          to="/shop" 
          className={`hover:underline ${location.pathname === '/shop' ? 'font-bold' : ''}`}
        >
          Shop
        </Link>
        <Link 
          to="/faqs" 
          className={`hover:underline ${location.pathname === '/faqs' ? 'font-bold' : ''}`}
        >
          FAQs
        </Link>
      </div>
    </nav>
  );
};
