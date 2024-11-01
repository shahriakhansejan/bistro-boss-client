import { Helmet } from "react-helmet-async";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials/Testimonials";
import Contract from "./Contract/Contract";

const Home = () => {
  return (
    <div>
      <Helmet>
      <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
      <About></About>
      <Menu></Menu>
      <Contract></Contract>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

Home.propTypes = {};

export default Home;
