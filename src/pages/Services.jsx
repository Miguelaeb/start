import React from "react";

const PricingCard = ({ plan, price, features }) => {
  return (
    <div className="py-[46px] px-[30px] text-center shadow-serviceCardShadow rounded-[5px]">
      <div className="flex flex-col  gap-[10px]">
        <h3 className="text-[15px] leading-[18.75px]">{plan}</h3>
        <div className="flex items-center justify-center gap-[9px]">
          <p className=" font-bold leading-[50px] text-[40px]">${price}</p>
          <span className="text-sm text-gray-500">/month</span>
        </div>
        <p className=" text-[#21252980] text-[15px] leading-[18.75px]">
          Lorem ipsum, dolor sit amet consectetur adipiscing elit. Suscipit nemo
          hic quos, ab, dolor aperiam.
        </p>
      </div>
      <ul className="mt-[52px] flex flex-col gap-[17px]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="w-5 h-5 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-[170px] h-[48px] text-white bg-[#212529] rounded-[5px] mt-[45px]">
        Learn More
      </button>
    </div>
  );
};

export default function Services() {
  const pricingPlans = [
    {
      plan: "Basic",
      price: "100",
      features: [
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
      ],
    },
    {
      plan: "Plus",
      price: "250",
      features: [
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
      ],
    },
    {
      plan: "Pro",
      price: "400",
      features: [
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
        "Lorem ipsum, dolor sit",
      ],
    },
  ];

  return (
    <section className="w-full lg:max-w-[1175px] lg:mx-auto px-5 xl:px-0 mt-[35px] font-WorkSans mb-[135px]">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="font-bold tracking-[5px] text-[#74C69D] uppercase leading-[20px] font-WorkSans">
          Plans
        </h2>
        <h1 className="text-2xl font-bold font-CrimsonText lg:text-[40px] lg:leading-[50px]">
          Our Services
        </h1>
        <p className=" text-[20px] leading-[25px] lg:w-[411px] lg:mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[50px] mt-[46px] lg:mt-[78px] lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}
