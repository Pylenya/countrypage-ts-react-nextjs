"use client";
import React, { useState } from "react";
import Select, { SingleValue } from "react-select";

interface ISelectField {
  select: "population" | "name" | "area";
  setSelect: (arg: "population" | "name" | "area") => void;
}

export const SelectField: React.FC<ISelectField> = ({ select, setSelect }) => {
  interface iOption {
    value: "population" | "name" | "area";
    label: string;
  }
  const options: iOption[] = [
    { value: "name", label: "Name" },
    { value: "population", label: "Population" },
    { value: "area", label: "Area" },
  ];
  const getValue = () => {
    return select ? options.find((t) => t.value === select) : "";
  };
  const onChange = (newValue: SingleValue<iOption>) => {
    newValue ? setSelect(newValue.value) : "";
  };
  return (
    <div>
      <span className="text-gray mb-1 block">Sort in descending order by</span>
      <Select
        className="text-dark"
        value={getValue()}
        onChange={(selectedOption) => onChange(selectedOption as iOption)}
        instanceId="long-value-select"
        id="long-value-select"
        options={options}
      />
    </div>
  );
};
