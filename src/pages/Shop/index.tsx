import Testimonials from "../Home/Testimonials";
import Header from "./Header";
import ProductSection from "./ProductSection";

const Shop = () => {
  return (
    <>
      <Header />
      <div className="pb-16 px-4 md:px-10 lg:px-[170px]">
        <ProductSection />
        <Testimonials />
      </div>
    </>
  );
};

export default Shop;
