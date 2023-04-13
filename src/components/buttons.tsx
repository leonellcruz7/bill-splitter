import { FC } from "react";
import { ButtonProps, IconButtonTypes } from "../types/types";

export const IconButton: FC<IconButtonTypes> = (props) => {
  const { children, className, onClick } = props;
  return (
    <button className={`button-icon ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, onClick } = props;
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
