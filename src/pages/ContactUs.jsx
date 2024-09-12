export default function ContactUs() {
  return (
    <section className=" flex flex-col justify-center px-4 my-[36px] xl:px-0 font-WorkSans w-full lg:max-w-[1175px] lg:mx-auto">
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center font-CrimsonText leading-[30px]">
            Contact Us
          </h2>
          <p className="text-center text-[20px] leading-[25px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className=" mt-[45px] lg:flex gap-[30px] lg:flex-row-reverse">
          <div className="w-full">
            <img className="w-full h-full" src="/map.png" alt="Map" />
          </div>

          <div className="w-full mt-[21px] lg:mt-0">
            <form className=" flex flex-col gap-[21px]">
              <div className="flex flex-col gap-4 ">
                <label className=" text-[20px] leading-[25px]" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-black rounded-md bg-[#EEEEEE]"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <label className=" text-[20px] leading-[25px]" htmlFor="">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-black rounded-md bg-[#EEEEEE]"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <label className=" text-[20px] leading-[25px]" htmlFor="">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full p-2 border border-black rounded-md bg-[#EEEEEE]"
                />
              </div>
            </form>
            <button
              type="submit"
              className="w-full h-[48px] bg-[#212529] text-white mt-[30px] rounded-[5px] text-[20px] leading-[25px]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
