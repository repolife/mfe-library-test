import React, { FC } from "react";

export interface IPerson {
  name: string;
  age: number;
  sex: ["male" | "female"];
}

export const Person: FC<IPerson> = ({ name, age, sex }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Person;
