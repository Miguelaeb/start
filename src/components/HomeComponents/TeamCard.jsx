import React from "react";

const TeamCard = ({ image, name, title }) => {
  return (
    <div className="flex flex-col w-[267px] h-[299px] bg-white rounded-[5px] mx-auto shadow-card-shadow py-5">
      <div className=" w-[202px] mx-auto flex flex-col gap-5">
        <div className="flex flex-col items-center">
          <img src={image} alt={name} className=" w-[175px] h-[175px]" />
        </div>
        <div>
          <h2 className="text-lg font-medium">{name}</h2>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
