import { Quote, Star } from "lucide-react";
import Heading from "../../components/Heading/Heading";
import data from "../../constants/constants.json";
import "./testimonial.css";
import Carousel from "../../components/Carousel/Carousel";
import "../../components/Carousel/Carousel.css";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="p-5 md:p-10 flex flex-col items-center relative"
    >
      <Heading heading={data?.testimonials?.heading} />
      <div className="text-5xl font-bold mt-10 text-center">
        {data?.testimonials?.subheading}
      </div>
      <div className="w-full pt-[50px] flex justify-center">
        <Carousel>
          {data?.testimonials?.testimonials?.map((testimonial) => (
            <div className="carousel-slide" key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-quote-icon">
                  <Quote size={40} color="#3B82F6" />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={`star-${testimonial.id}-${i}`}
                        size={24}
                        fill="#FFD700"
                        color="#FFD700"
                      />
                    ))}
                  </div>
                  <p className="testimonial-feedback">
                    "{testimonial.feedback}"
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <div className="avatar-placeholder">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-position">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
