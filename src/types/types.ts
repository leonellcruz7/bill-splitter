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
interface Member {
  name: string;
  total: number;
}
export interface CreateGroup {
  id: string;
  name: string;
  members: Member[];
  total: number;
  date_created: Date;
}

export interface Details {
  date_created: Date;
  name: string;
  members: Members[];
  total: number;
  id: string;
}
export interface GroupCardTypes {
  details: Details;
}

export interface Members {
  name: string;
  total: number;
}

export interface MemberDetails {
  details: Members;
}
