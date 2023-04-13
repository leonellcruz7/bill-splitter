import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, IconButton } from "../components/buttons";
import MemberCard from "../components/MemberCard";
import { fetchGroups } from "../helpers/utils";
import { CreateGroup, Members } from "../types/types";

export default function BillCalculator() {
  const navigate = useNavigate();
  const groups = fetchGroups();
  const params = useParams();
  const { group_id } = params;
  const group = groups.filter((i) => i.id == group_id);

  const { name, members, total, date_created } = group[0];

  return (
    <div>
      <div className="flex justify-between items-center">
        <IconButton className="" onClick={() => navigate("/")}>
          <i className="ri-arrow-left-s-line"></i>{" "}
        </IconButton>
        <div className="flex items-center gap-2">
          <p className="text-[25px] md:text-headline2 text-yellow font-semibold">
            {name}
          </p>
          <i className="ri-more-2-fill text-[20px] md:text-[40px] cursor-pointer"></i>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <Button className="green md:w-[300px]" onClick={() => {}}>
          Calculate
        </Button>
        <div className="bg-darkBlue w-full mt-4 rounded-[40px] p-8 flex justify-center flex-wrap gap-5">
          {members.map((item, index: number) => {
            return <MemberCard key={index} details={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
