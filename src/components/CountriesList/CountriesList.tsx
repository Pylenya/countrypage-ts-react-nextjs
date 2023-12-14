"use client";
import { InputField } from "../InputField/InputField";
import { SelectField } from "../SelectField/SelectField";
import { CountriesData } from "../CountriesData/CountriesData";
import { useState } from "react";
import { FiltersField } from "../FiltersField/FiltersField";

export const CountriesList = ({ data }: any) => {
  const [select, setSelect] = useState<"population" | "name" | "area">(
    "population"
  );
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(data.length);
  const [inputValue, setInputValue] = useState("");
  return (
    <section className="mx-auto h-full pr-3 pl-3 md:pr-8 md:pl-8 bg-dark pb-10 mb-14 -m-10 rounded-xl p-10 border-2 border-gray-dark border-solid">
      <InputField
        setInputValue={setInputValue}
        inputValue={inputValue}
        quantity={quantity}
      />
      <div className="flex flex-col gap-16 lg:flex-row ">
        <div className="flex flex-col min-w-[250px] lg:max-w-[320px] gap-10 max-w-none">
          <SelectField select={select} setSelect={setSelect} />
          <FiltersField
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        </div>
        <div className="flex flex-col gap-4 w-full min-h-[55vh] ">
          <div className="flex relative justify-between text-gray after:w-full after:h-[2px] after:absolute after:bg-gray-dark after:-bottom-2 mb-5">
            <span className="w-[64px] block text-center ">Flag</span>
            <span className="w-28 block text-center">Name</span>
            <span className="w-36 block text-center">Population</span>
            <span className="w-24 block text-center">Area(km2)</span>
            <span className="w-20 hidden md:block text-center">Region</span>
          </div>
          <CountriesData
            setQuantity={setQuantity}
            data={data}
            select={select}
            filters={activeFilters}
            inputValue={inputValue}
          />
        </div>
      </div>
    </section>
  );
};
