import aboutImg from "../../../assets/home/chef-service.jpg";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${aboutImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
      className="h-screen p-6 md:p-12 bg-fixed lg:p-20 xl:p-32"
    >
      <div className="text-center bg-white/85 flex flex-col justify-center h-full p-4 md:p-10 rounded">
      <h2 className="text-2xl md:text-4xl text-[#151515] font-medium cinzel mb-2">Bistro Boss</h2>
      <p className="text-[#151515] text-xs md:text-base">
        A good restaurant combines great food, a welcoming atmosphere, and
        attentive service. Quality ingredients, a diverse menu, and a clean,
        inviting environment enhance the dining experience, while friendly staff
        and fair pricing keep customers coming back.
      </p>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
