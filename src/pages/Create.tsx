import React, { useRef, useState } from "react";
import { Button, IconButton } from "../components/buttons";
import Input from "../components/Input";
import CreateCard from "../components/CreateCard";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <div className="flex justify-between items-center">
        <IconButton className="" onClick={() => navigate("/")}>
          <i className="ri-arrow-left-s-line"></i>{" "}
        </IconButton>
      </div>
      <div className="mt-10 text-center w-full flex justify-center flex-col items-center">
        <div className="max-w-[500px] flex flex-col gap-3">
          <div>
            <label className="label" htmlFor="">
              Group name
            </label>
            <Input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              maxLength={16}
            />
          </div>
          <CreateCard name={value} />
        </div>
      </div>
    </div>
  );
}
