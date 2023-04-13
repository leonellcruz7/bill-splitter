import { Details } from "../types/types";

export const fetchGroups = () => {
  const data = localStorage;
  const keys = Object.keys(data);
  const groups: Details[] = [];
  keys.map((i) => {
    groups.push(JSON.parse(data[i]));
  });
  return groups.sort(
    (a, b) => new Date(b.date_created) - new Date(a.date_created)
  );
};
