import { Parallax } from "react-parallax";

const Cover = ({ img, title, des }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
      className="hero h-[250px] md:h-[375px] lg:h-[650px]"
    >
      <div className="hero"></div>
      <div className="hero-content px-8 md:px-12 lg:px-24 text-white cinzel text-center">
        <div className="rounded-sm bg-black/60 py-10 md:py-20 lg:py-36 px-8 md:px-24 lg:px-48">
          <h1 className="mb-2 text-3xl md:text-7xl font-bold">{title}</h1>
          <p className="text-sm md:text-lg font-semibold">{des}</p>
        </div>
      </div>
    </div>
    </Parallax>
  );
};

Cover.propTypes = {};

export default Cover;
