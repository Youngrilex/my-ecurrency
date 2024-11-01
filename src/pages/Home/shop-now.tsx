import { useNavigate } from "react-router-dom";

const ShopNow = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[1px] mt-16 bg-[#21384218]" />
      <div className="flex flex-col lg:flex-row items-center mb-16 space-y-8 lg:space-y-0 lg:space-x-8 sm:-mx-[170px]">
        {/* Product Image and Features */}
        <div className="relative w-3/5 flex items-center justify-center">
          <img
            src="/shop.png"
            alt="Sleepstiq Personal Diffuser showcasing calming features"
            className="w-full"
          />
          <div className="absolute hidden sm:block bottom-24 right-24 bg-white p-4 rounded-lg shadow-md mt-4 w-[400px] text-[16px] text-[#4D533C]">
            <ul className="space-y-2">
              <li>😊 <i>Promotes calm and relaxation.</i></li>
              <li>💤 <i>Inhalation allows for a rapid effect.</i></li>
              <li>✅ <i>100% drug-free, plant-based ingredients.</i></li>
              <li className="px-6"><i>3rd-party lab tested.</i></li>
            </ul>
          </div>
        </div>

        {/* Product Description */}
        <div className="max-w-md text-[14px] p-8 text-center lg:text-left">
          <h3 className="text-4xl font-bold text-[#12305B]">Shop Now</h3>
          <p className="text-[16px] mt-8 text-[#21384299] text-justify">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <button
            className="mt-6 px-16 py-3 bg-[#FC5959] text-white font-semibold rounded-lg hover:bg-red-600"
            onClick={() => navigate('/shop')}
          >
            Visit Shop
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopNow;
