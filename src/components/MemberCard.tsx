import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MemberDetails, Members } from "../types/types";

const MemberCard: FC<MemberDetails> = ({ details }) => {
  const { name, total } = details;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/member");
  };
  return (
    <div
      className="bg-blue w-[250px] h-fit rounded-[20px] p-4 cursor-pointer hover:scale-[1.04] transition-all"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="w-[57px] h-[57px] bg-darkBlue rounded-[50%]"></div>
          <div>
            <p className="text-lg font-semibold text-yellow">{name}</p>
            <p className="text-sm text-darkBlue">${total}</p>
          </div>
        </div>
        <i className="ri-more-2-fill text-[20px] text-darkBlue"></i>
      </div>
    </div>
  );
};
export default MemberCard;
