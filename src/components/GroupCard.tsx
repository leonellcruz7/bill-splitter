import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { GroupCardTypes } from "../types/types";

const GroupCard: FC<GroupCardTypes> = (props) => {
  const { details } = props;
  const { date_created, name, total, id } = details;
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/${id}`);
  };
  return (
    <div
      className="min-w-[130px] h-[120px] bg-darkBlue rounded-[40px] text-center flex flex-col items-center justify-center cursor-pointer hover:scale-[1.08] transition-all p-4"
      onClick={handleClick.bind(null, id)}
    >
      <p className="text-xs text-lightYellow">
        {new Date(date_created).toDateString()}
      </p>
      <p className="text-lg font-semibold text-yellow">{name}</p>
      <p className="text-md font-medium text-green">${total}</p>
    </div>
  );
};

export default GroupCard;
