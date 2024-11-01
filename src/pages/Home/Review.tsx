const Review = () => {
    return (
      <div className="flex justify-between flex-col sm:flex-row mt-32">
        {/* Story Section */}
        <section className="mb-12 text-[#12305B] max-w-md">
          <h3 className="text-sm">Our Amazing Story</h3>
          <h2 className="text-4xl font-bold mt-4">10k+ Happy Customers</h2>
          <p className="mt-8 text-[#21384299] max-w-2xl mx-auto">
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolex tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>
          <a
            href="#about"
            className="mt-2 inline-block text-[16px] font-semibold underline"
          >
            More Know About Us
          </a>
        </section>
  
        {/* Testimonial Section */}
        <article className="flex flex-col justify-center mb-16 h-full max-w-md bg-[#FBF9F2] p-8 rounded-lg shadow-lg text-center relative">
          <blockquote className="text-gray-700 font-medium mb-6">
            "I'm a very anxious person but use this and feel so relaxed and sleep
            way better now with the aid of sleepstiq."
          </blockquote>
          <div className="flex items-center mt-14">
            <img
              src="/testimonial.png"
              alt="James Miller, CEO of Techlabs"
              className="w-20 h-20 rounded-full object-cover object-center"
            />
            <div className="ml-3 text-left">
              <p className="text-[#4D533C] text-[22px] font-bold">James Miller</p>
              <p className="text-[#152934] text-sm">CEO, Techlabs</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <span className="h-[10px] w-[10px] rounded-full bg-[#C4C4C4]"></span>
            <span className="h-[10px] w-[10px] rounded-full bg-[#C4C4C4]"></span>
          </div>
        </article>
      </div>
    );
  };
  
  export default Review;
  