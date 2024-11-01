import React, { useState } from 'react';

const ProductSection: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Ensure quantity cannot be less than 1
    if (value < 1) {
      setQuantity(1);
    } else {
      setQuantity(value);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center mb-16 space-y-8 lg:space-y-0 lg:space-x-8 px-4 lg:px-0 sm:-mx-[170px]">
      {/* Product Image and Features */}
      <div className="w-full lg:w-3/5 flex items-center justify-center">
        <img src="/shop.png" alt="Sleepstiq Product" className="w-full h-auto object-cover" />
      </div>

      {/* Product Description */}
      <div className="max-w-md text-[14px] p-4 lg:p-8 text-center lg:text-left">
        <h3 className="text-3xl lg:text-4xl font-bold text-[#12305B]">About Product</h3>
        <p className="text-[16px] mt-4 text-[#21384299] text-justify">
          Our Personal Diffuser is an aromatherapy device that contains a
          blend of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <ul className="space-y-2 mt-4">
          <li>😊 <i>Promotes calm and relaxation.</i></li>
          <li>💤 <i>Inhalation allows for a rapid effect.</i></li>
          <li>✅ <i>100% drug-free, plant-based ingredients.</i></li>
          <li className="px-6"><i>3rd-party lab tested.</i></li>
        </ul>
        <div className="flex justify-between mt-4 text-[16px]">
          <p>Price</p>
          <p>Unit</p>
        </div>
        <div className="flex justify-between mt-2 items-center font-semibold text-[16px]">
          <p>USD 50</p>       
          <input 
            type="number" 
            value={quantity} 
            onChange={handleQuantityChange} 
            className="w-16 p-2 border rounded" 
            min="1"
            aria-label="Quantity" // Accessibility improvement
          />
        </div>
        <button className="mt-6 px-16 py-3 bg-[#FC5959] text-white font-semibold rounded-lg hover:bg-red-600">
        Buy
      </button>
      </div>
    </div>
  );
};

export default ProductSection;
