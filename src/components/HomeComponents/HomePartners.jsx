export default function HomePartners() {
  const partners = [
    { src: "/Google.svg", alt: "Google Partner" },
    { src: "/Microsoft.svg", alt: "Microsoft Partner" },
    { src: "/Airbnb.svg", alt: "Airbnb Partner" },
    { src: "/Facebook.svg", alt: "Facebook Partner" },
    { src: "/Spotify.svg", alt: "Spotify Partner" },
  ];

  return (
    <section className="mt-5 px-5 xl:px-0 lg:max-w-[1175px] lg:mx-auto flex flex-col items-center justify-center font-WorkSans">
      <div className="flex flex-col gap-4 text-center lg:w-[411px]">
        <span className="font-bold uppercase tracking-widest text-[#74C69D]">
          partners
        </span>
        <h2 className="text-2xl font-bold leading-tight font-CrimsonText lg:text-4xl lg:leading-snug">
          Lorem Ipsum Dolor
        </h2>
        <p className="text-lg leading-snug">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-14 lg:gap-16">
        {partners.map((partner, index) => (
          <img key={index} src={partner.src} alt={partner.alt} />
        ))}
      </div>

      <button className="mt-14 w-[170px] h-[48px] text-white bg-black rounded-md">
        Learn More
      </button>
    </section>
  );
}
