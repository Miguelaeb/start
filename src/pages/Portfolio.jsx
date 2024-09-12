export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Landing Page Design",
      imgSrc: "/LandingPageDesign.png",
    },
    {
      title: "Web Design",
      imgSrc: "/WebDesign.png",
    },
    {
      title: "Rocket Your Business",
      imgSrc: "/RocketYourBusiness.png",
    },
    {
      title: "Shopping",
      imgSrc: "/Shopping.png",
    },
    {
      title: "Geometric Shapes",
      imgSrc: "/GeometricShapes.png",
    },
    {
      title: "Trick or Treat!",
      imgSrc: "/TrickorTreat!.png",
    },
    {
      title: "Halloween",
      imgSrc: "/Halloween.png",
    },
    {
      title: "Virtual Reality Experience",
      imgSrc: "/VirtualRealityExperience.png",
    },
  ];

  return (
    <section className="mt-[30px] w-full lg:max-w-[1175px] lg:mx-auto px-5 xl:px-0 mb-[100px]">
      <div className=" flex flex-col gap-4 mb-10 text-center lg:w-[411px] lg:mx-auto">
        <span className="font-bold text-[#74C69D] leading-[20px] tracking-[5px] uppercase font-WorkSans">
          Works
        </span>
        <h1 className="text-[24px] font-CrimsonText font-bold leading-[30px] lg:text-[40px] lg:leading-[50px]">
          Portfolio
        </h1>
        <p className=" font-WorkSans text-[20px] leading-[25px] mx-12 lg:mx-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[55px] lg:grid-cols-2">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white rounded-md shadow-md"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-[196.618px] lg:h-[334.544px]"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[70px]">
        <button className="w-[170px] h-[48px] text-white bg-black rounded-[5px]">
          Learn More
        </button>
      </div>
    </section>
  );
}
