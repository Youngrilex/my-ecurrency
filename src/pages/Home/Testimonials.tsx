const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        id: 1,
        name: "John Matthews",
        text: "Love it! I have trouble falling asleep and this knocked me right out.",
        rating: 5,
      },
      {
        id: 2,
        name: "Eunice Oliver",
        text: "I work shift work. Switching from days to nights is sometimes brutal for sleep.",
        rating: 5,
      },
      {
        id: 3,
        name: "Laura Davies",
        text: "It's a really good product and helps me sleep better at night!",
        rating: 5,
      },
      {
        id: 4,
        name: "Jane Books",
        text: "Helps me relax and remember to breathe. Sleep has definitely gone down!",
        rating: 5,
      },
    ].map((testimonial) => (
      <div
        key={testimonial.id}
        className="bg-[#FBF9F2] text-[#4D533C] text-[16px] p-6 rounded-lg shadow-md"
      >
        <p className="italic mb-4">{testimonial.text}</p>
        <p className="font-bold">{testimonial.name}</p>
        <div className="flex mt-2">
          {Array(testimonial.rating)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-[#27AE60]">
                &#9733;
              </span>
            ))}
        </div>
      </div>
    ))}
  </div>
  );
};

export default Testimonials;
