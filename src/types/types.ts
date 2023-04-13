import { ReactNode } from "react";

export interface ButtonProps {
  children: string;
  className: string;
  onClick: () => void;
}
export interface InputProps {
  maxLength: number;
  value: string | number;
  onChange: (e: string | number) => void;
}

export interface IconButtonTypes {
  children: ReactNode;
  className: string;
  onClick: () => void;
}
export interface CreateCardTypes {
  name: string;
}

export interface Details {
  date_created: string;
  name: string;
  total: number;
}
export interface GroupCardTypes {
  details: Details;
}

export interface Members {
  name: string;
  total: number;
}
