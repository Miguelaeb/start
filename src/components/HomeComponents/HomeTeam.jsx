import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Peg Legge",
    title: "CEO",
    image: "/PegLegge.svg",
  },
  {
    name: "Richard Guerra",
    title: "CTO",
    image: "/RichardGuerra.svg",
  },
  {
    name: "Alexandra Stolz",
    title: "Designer",
    image: "/AlexandraStolz.svg",
  },
  {
    name: "Janet Bray",
    title: "Developer",
    image: "/JanetBray.svg",
  },
];

export default function HomeTeam() {
  return (
    <section className=" px-5 xl:px-0 lg:max-w-[1175px] lg:mx-auto mt-[102.27px] flex flex-col items-center gap-10">
      <div className="flex flex-col gap-4 w-[335px] text-center">
        <span className="font-bold uppercase font-WorkSans leading-[20px] tracking-[5px] text-[#74C69D]">
          team
        </span>
        <h2 className=" font-CrimsonText text-2xl font-bold leading-[30px]">
          Our Talents
        </h2>
        <p className=" font-WorkSans text-[20px] leading-[25px]">
          Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,
        </p>
      </div>

      <div className="py-12">
        <div className="grid grid-cols-1 gap-[35px] md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </div>

      <div>
        <button className="w-[170px] h-[48px] text-white bg-black rounded-[5px]">
          Learn More
        </button>
      </div>
    </section>
  );
}
