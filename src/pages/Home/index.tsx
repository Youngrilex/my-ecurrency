import Testimonials from "./Testimonials";
import { VisitShop } from "./Visit-shop";
import ProductReview from "./product-review";
import Review from "./Review";
import ShopNow from "./shop-now";
import Mission from "./Mission";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-4 md:px-10 lg:px-[170px]">
        <Review />
        <Testimonials />
        <ShopNow />
        <Mission />
        <VisitShop />
        <ProductReview />
      </main>
    </>
  );
};

export default Home;
