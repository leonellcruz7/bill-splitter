import React from "react";
import { Button, IconButton } from "../components/buttons";
import Empty from "../components/empty";
import GroupCard from "../components/GroupCard";
import { useNavigate } from "react-router-dom";
import { Details } from "../types/types";
import { fetchGroups } from "../helpers/utils";

export default function Home() {
  const navigate = useNavigate();
  const groups = fetchGroups();
  console.log(groups);

  return (
    <div>
      <div className="flex justify-between items-center">
        {/* <Button className="red">Logout</Button> */}
        <IconButton className="" onClick={() => navigate("/create")}>
          <i className="ri-add-line"></i>
        </IconButton>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {groups.length !== 0 ? (
            groups.map((item, index) => {
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
