import Title from "../../Shared/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-psi-ruddy.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-12">
      <Title title="TESTIMONIALS" subTitle="What Our Client Say"></Title>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-2"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-10 md:mx-16 flex flex-col justify-center items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className="my-5 md:my-10 text-5xl md:text-8xl"></FaQuoteLeft>
              <p className="dark2 text-sm md:text-base text-center">
                {review.details}
              </p>
              <h2 className="font-medium text-xl md:text-3xl text-orange-500 uppercase mt-2">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
