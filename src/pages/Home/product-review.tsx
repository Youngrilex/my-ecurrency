const testimonials = [
  {
    id: 1,
    name: "Rachel Dill",
    text: "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    rating: 5,
    image: "/pen.png",
  },
  {
    id: 2,
    name: "Javier Mendez",
    text: "It really helps me fall right to sleep compared to melatonin pills.",
    rating: 5,
    image: "/pen-1.png",
  },
  {
    id: 3,
    name: "Naomi Nwazurike",
    text: "It's a really good product and helps me sleep better at night!",
    rating: 5,
    image: "/pen-1.png",
  },
  {
    id: 4,
    name: "Nate Jacobs",
    text: "I have been falling asleep faster and sleeping thru the night.",
    rating: 5,
    image: "/pen.png",
  },
];

const ProductReview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.id}
          className="text-[#4D533C] text-[16px] rounded-lg shadow-2xl overflow-hidden"
        >
          <img
            src={testimonial.image}
            alt={`Image of ${testimonial.name}`}
            className="w-full h-[210px] object-cover mb-4"
          />
          <p className="italic mb-4 px-6">{testimonial.text}</p>
          <p className="font-bold px-6">{testimonial.name}</p>
          <div className="flex mt-2 px-6 pb-4">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <span key={i} className="text-[#27AE60]">
                &#9733;
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductReview;
