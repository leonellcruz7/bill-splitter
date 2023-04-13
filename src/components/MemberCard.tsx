import React from "react";
import { useNavigate } from "react-router-dom";

export default function MemberCard() {
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
            <p className="text-lg font-semibold text-yellow">Leonell</p>
            <p className="text-sm text-darkBlue">$100.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
