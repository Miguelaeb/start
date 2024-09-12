export default function HomeFeatureTwo() {
  return (
    <section className="px-5 xl:px-0 lg:max-w-[1175px] lg:mx-auto flex flex-col-reverse gap-[30px] font-WorkSans mt-[60px] items-center lg:flex-row lg:justify-between lg:gap-0">
      <div className="flex flex-col gap-[20px] lg:w-[462px]">
        <h2 className=" font-CrimsonText text-2xl lg:text-[40px] font-bold leading-[30px] lg:leading-[50px]">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p className=" leading-[18.75px] text-[15px] text-[#21252980]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
          voluptate culpa nesciunt delectus iste?
        </p>
        <button className="w-[170px] h-[48px] text-white bg-black rounded-[5px]">
          Learn More
        </button>
      </div>
      <div className=" md:lg:w-[300px] lg:w-[600px]">
        <img
          className="w-full "
          src="/featureTwoImage.svg"
          alt="Feature Two Illustration"
        />
      </div>
    </section>
  );
}
