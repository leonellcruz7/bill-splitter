import React, { FC, useState } from "react";
import { Button, IconButton } from "./buttons";
import { useNavigate } from "react-router-dom";
import { CreateCardTypes, Members } from "../types/types";
import { fetchGroups } from "../helpers/utils";

const CreateCard: FC<CreateCardTypes> = (props) => {
  const { name } = props;
  const groups = fetchGroups();
  const navigate = useNavigate();
  const [value, setValue] = useState(2);
  const handleSubtract = () => {
    if (value > 2) setValue((prev) => prev - 1);
  };
  const handleAdd = () => {
    setValue((prev) => prev + 1);
  };

  const handleCreate = () => {
    const members: Members[] = [];
    for (let i = 1; i <= value; i++) {
      members.push({
        name: `Name ${i}`,
        total: 0,
      });
    }
    const total = members.reduce((a, b) => a + b.total, 0);

    const test = {
      id: groups.length + 1,
      name: name,
      members: members,
      total: total,
      date_created: new Date().toDateString(),
    };
    localStorage.setItem(name, JSON.stringify(test));
    navigate("/bill-calculator");
  };
  return (
    <div className="bg-yellow h-[220px] rounded-[40px] p-4 flex flex-col items-center justify-center">
      <p className="text-darkBlue text-sm font-medium">Number of people</p>
      <div className="flex items-center justify-center">
        <IconButton className="no-bg" onClick={handleSubtract}>
          <i className="ri-subtract-line"></i>
        </IconButton>
        <p className="text-[80px] font-semibold text-darkBlue">{value}</p>
        <IconButton className="no-bg" onClick={handleAdd}>
          <i className="ri-add-line"></i>
        </IconButton>
      </div>
      <Button className="darkBlue" onClick={handleCreate}>
        Create
      </Button>
    </div>
  );
};

export default CreateCard;
