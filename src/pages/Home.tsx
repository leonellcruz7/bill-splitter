import React from "react";
import { Button, IconButton } from "../components/buttons";
import Empty from "../components/empty";
import GroupCard from "../components/GroupCard";
import { useNavigate } from "react-router-dom";
import { Details } from "../types/types";

export default function Home() {
  const navigate = useNavigate();
  const data = localStorage;
  const keys = Object.keys(data);
  const members: Details[] = [];
  keys.map((i) => {
    members.push(JSON.parse(data[i]));
  });
  console.log(members);

  return (
    <div>
      <div className="flex justify-between items-center">
        {/* <Button className="red">Logout</Button> */}
        <IconButton className="" onClick={() => navigate("/create")}>
          <i className="ri-add-line"></i>
        </IconButton>
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {members.length !== 0 ? (
            members.map((item, index) => {
              return <GroupCard key={index} details={item} />;
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
}
