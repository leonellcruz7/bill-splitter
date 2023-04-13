import React from "react";
import { IconButton } from "../components/buttons";
import { useNavigate } from "react-router-dom";

export default function Member() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <IconButton className="" onClick={() => navigate("/")}>
          <i className="ri-arrow-left-s-line"></i>{" "}
        </IconButton>
        <div className="flex gap-5">
          <div className="text-end">
            <p className="text-headline4 font-semibold text-yellow">Leonell</p>
            <p className="text-lg">$100.00</p>
          </div>
          <div className="w-[80px] h-[80px] rounded-[50%] bg-darkBlue"></div>
        </div>
      </div>
      <div className="bg-darkBlue mt-10 max-w-[800px] mx-auto rounded-[40px] p-8">
        <table className="">
          <thead>
            <tr>
              <th>What?</th>
              <th>How much?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Food</td>
              <td>$100.00</td>
              <td className="">
                <i className="ri-edit-box-line bg-green p-2 text-[20px] rounded-[5px] mx-1 cursor-pointer text-darkBlue"></i>
                <i className="ri-delete-bin-6-line bg-red text-darkBlue p-2 text-[20px] rounded-[5px] mx-1 cursor-pointer"></i>
              </td>
            </tr>
            <br />{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
}
