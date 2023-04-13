import React, { FC } from "react";
import { InputProps } from "../types/types";

const Input: FC<InputProps> = (props) => {
  const { maxLength, value, onChange } = props;
  return (
    <input
      value={value}
      onChange={onChange}
      className={`input`}
      type="text"
      maxLength={maxLength}
    />
  );
};

export default Input;
