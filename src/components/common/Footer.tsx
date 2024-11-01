import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#052045] flex flex-col items-center text-white py-10 opacity-90">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/footer.png')", opacity: 0.05, zIndex: -1 }}
      />
      <img src="logo-w.png" alt="Company Logo" />
      <div className="container mt-6 mx-auto px-4 md:flex md:justify-between">
        {/* Company Section */}
        <nav className="mb-6 md:mb-0">
          <h3 className="text-[16px] font-semibold">COMPANY</h3>
          <ul className="mt-4 space-y-2 text-[#ABABAB]">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/" className="hover:underline">Blog</a></li>
            <li><a href="/" className="hover:underline">Contact</a></li>
            <li><a href="/" className="hover:underline">Jobs</a></li>
          </ul>
        </nav>

        {/* Contact Section */}
        <div className="mb-6 text-[16px] md:mb-0">
          <h3 className="font-semibold">CONTACT</h3>
          <ul className="mt-4 space-y-2 text-[#ABABAB]">
            <li>
              Phone:{" "}
              <a href="tel:+2347085073128" className="hover:underline text-white font-semibold">
                +234 708 507 3128
              </a>
            </li>
            <li>
              Address:{" "}
              <span className="text-white font-semibold">
                16, Oginnipe Close, Upston Close
              </span>
            </li>
          </ul>
        </div>

        {/* Consumer Advisory Section */}
        <div className="mb-6 text-[16px] md:mb-0 max-w-md">
          <h3 className="font-semibold">CONSUMER ADVISORY</h3>
          <p className="mt-4 text-justify">
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.
          </p>
          <p className="mt-4">
            By using our website or product, you agree to follow our <span className="underline">terms of service</span>.
          </p>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h3 className="text-[16px] font-semibold">GET IN TOUCH</h3>
          <p className="mt-4 text-[#ABABAB]">Feel free to get in touch with us via email</p>
          <a
            href="mailto:hello@sleepstiq.com"
            className="block mt-2 text-white text-2xl font-bold hover:underline"
          >
            hello@sleepstiq.com
          </a>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="w-8 h-8 text-[#12305B] bg-[#8FE2FF] rounded-full p-2" />
            <FaTwitter className="w-8 h-8 text-[#12305B] bg-[#8FE2FF] rounded-full p-2" />
            <FaGooglePlusG className="w-8 h-8 text-[#12305B] bg-[#8FE2FF] rounded-full p-2" />
            <FaLinkedinIn className="w-8 h-8 text-[#12305B] bg-[#8FE2FF] rounded-full p-2" />
          </div>
          <p className="mt-6 text-sm text-[#ABABAB]">© 2020 Sleepstiq, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
