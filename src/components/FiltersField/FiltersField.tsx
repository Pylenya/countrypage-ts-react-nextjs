import React, { Dispatch, SetStateAction, useState } from "react";
import { BUTTONS } from "@/app/constants";

interface FiltersFieldProps {
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
}
export const FiltersField: React.FC<FiltersFieldProps> = ({
  activeFilters,
  setActiveFilters,
}) => {
  const handleClick = (value: string) => {
    if (!activeFilters.includes(value)) {
      setFilter(value);
    } else removeFilter(value);
  };
  const setFilter = (value: string) => {
    setActiveFilters([...activeFilters, value]);
  };
  const removeFilter = (value: string) => {
    let tempArr = activeFilters.filter((filter) => value !== filter);
    setActiveFilters(tempArr);
  };
  return (
    <div>
      <span className="block mb-4 text-gray">Region</span>
      <div className="flex flex-wrap gap-4">
        {BUTTONS.map((btn) => {
          return (
            <button
              key={btn.value}
              className={
                activeFilters.includes(btn.value) ? "btn btn--active" : "btn"
              }
              onClick={() => handleClick(btn.value)}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
