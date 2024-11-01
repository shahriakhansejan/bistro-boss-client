import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import Title from "../../Shared/Title/Title";

const Slider = () => {
  return (
    <section className="my-20">
      <Title subTitle='From 11:00am to 10:00pm' title='ORDER ONLINE'></Title>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper cinzel mt-6"
        breakpoints={{
          // For small screens (like phones)
          320: {
            slidesPerView: 2,  // 1 slide per view
            spaceBetween: 10,  // Less space between slides
          },
          // For medium screens (like tablets)
          640: {
            slidesPerView: 3,  // 2 slides per view
            spaceBetween: 20,  // More space between slides
          },
          // For large screens (like desktops)
          1024: {
            slidesPerView: 4,  // 3 slides per view
            spaceBetween: 30,  // Default space
          },
          // Default behavior for extra-large screens
          1280: {
            slidesPerView: 5,  // 4 slides per view
            spaceBetween: 30,  // Default space
          },
        }}
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-xl md:text-3xl font-semibold -mt-16 text-white text-center">SALADS</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-xl md:text-3xl font-semibold -mt-16 text-white text-center">PIZZAS</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-xl md:text-3xl font-semibold -mt-16 text-white text-center">SOUPS</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-xl md:text-3xl font-semibold -mt-16 text-white text-center">DESSERTS</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-xl md:text-3xl font-semibold -mt-16 text-white text-center">SALADS</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

Slider.propTypes = {};

export default Slider;
