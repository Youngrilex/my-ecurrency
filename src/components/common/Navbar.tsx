
export const Navbar = () => {
  return (
<nav className="container mx-auto flex gap-24 sm:gap-40 pt-7 text-[#12305B] text-xs sm:text-[18px]">
        <img src="/logo.png" alt="" className="h-8 sm:h-16"/>
        <div className="flex space-x-4 md:space-x-16">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/shop" className="hover:underline">Shop</a>
        <a href="/faqs" className="hover:underline">FAQs</a>
      </div>
      </nav>
  )
}
