export default function HomeHero() {
  return (
    <section className="bg-[#74C69D] font-WorkSans text-white pb-[40.40px]">
      <div className="px-5 xl:px-0 lg:max-w-[1175px] lg:mx-auto flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[120px] items-center justify-center">
        <div className="flex flex-col gap-[25px] lg:w-[416px] text-center lg:text-left items-center lg:items-start">
          <div className="flex flex-col gap-[15px]">
            <span className="font-bold tracking-[5px] leading-[20px] lg:text-base">
              WELCOME
            </span>
            <h1 className="font-CrimsonText font-bold text-[28px] leading-[35px] lg:text-[40px] lg:leading-[50px]">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-[15px] leading-[18.75px] text-[#FFFFFFBF]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
          </div>
          <button className="text-black text-xl leading-[25px] w-[170px] h-[48px] bg-white rounded-[5px]">
            Explore
          </button>
        </div>
        <div>
          <img
            className="lg:w-full"
            src="/heroImage.svg"
            alt="Illustration of a hero image"
          />
        </div>
      </div>
    </section>
  );
}
