import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CountriesDataProps {
  data: any;
  select: "population" | "name" | "area";
  filters: string[];
  setQuantity: (arg: number) => void;
  inputValue: string;
}

export const CountriesData: React.FC<CountriesDataProps> = ({
  data,
  select,
  filters,
  setQuantity,
  inputValue,
}) => {
  const [filtredData, setFiltredData] = useState(data);
  const [isFiltred, setIsFiltred] = useState(false);
  const filterBySelectData = (select: any, data: any) => {
    let tempArray = [...JSON.parse(JSON.stringify(data))];
    switch (select) {
      case "population":
        setFiltredData(
          tempArray.sort((a: any, b: any) => b.population - a.population)
        );
        break;
      case "area":
        setFiltredData(tempArray.sort((a: any, b: any) => b.area - a.area));
        break;
      case "name":
        setFiltredData(
          tempArray.sort((a: any, b: any) =>
            a.name.common.toLowerCase() > b.name.common.toLowerCase() ? 1 : -1
          )
        );
        break;
    }
  };
  const filterData = (filters: string[], newdata: any) => {
    if (!filters.length) {
      return newdata;
    } else {
      let tempArray = [...JSON.parse(JSON.stringify(newdata))];
      return tempArray.filter((country) => {
        return filters.includes(country.region.toLowerCase()) ? true : false;
      });
    }
  };
  const filterByInputValue = (value: string, data: any) => {
    if (value) {
      let tempArr = data.filter(
        (country: any) =>
          country.name.common.toLowerCase().includes(value.toLowerCase()) ||
          country.name.official.toLowerCase().includes(value.toLowerCase())
      );
      return tempArr;
    } else return data;
  };
  const handleFilter = () => {
    let tempCountryByInputValue = filterByInputValue(inputValue, data);
    let tempCountry = filterData(filters, tempCountryByInputValue);
    filterBySelectData(select, tempCountry);
    setIsFiltred(true);
  };

  useEffect(() => {
    handleFilter();
  }, [select, filters, inputValue]);
  useEffect(() => {
    setQuantity(filtredData.length);
  }, [filtredData]);

  return (
    <>
      {isFiltred &&
        filtredData.map((country: any) => {
          return (
            <Link key={country?.name?.common} href={country.name.common}>
              <div className="flex gap-1 justify-between items-center">
                <Image
                  className="min-w-[64px] bg-dark h-10 object-cover rounded-xl "
                  src={country?.flags?.svg}
                  alt={country?.name?.common}
                  width={"64"}
                  height={"64"}
                ></Image>
                <span className="block w-28 text-center">
                  {country?.name?.common}
                </span>
                <span className="block w-36 text-center">
                  {country?.population.toLocaleString("en")}
                </span>
                <span className="block w-24 text-center">
                  {country?.area.toLocaleString("en")}
                </span>
                <span className="w-20 hidden md:block text-center">
                  {country?.region}
                </span>
              </div>
            </Link>
          );
        })}
    </>
  );
};
