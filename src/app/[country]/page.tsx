"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getCountry } from "../utils";
import Image from "next/image";

export default function CountryPage() {
  const pathname = usePathname();
  const [countryData, setCountryData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountry(pathname!);
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching country data.");
      }
    }
    fetchData();
  }, [pathname]);
  interface CURR {
    name: string;
    symbol: string;
  }
  console.log(countryData);
  return (
    countryData && (
      <div className="mx-auto pr-4 pl-4 max-w-[1440px]">
        <div className="mx-auto h-full pr-3 pl-3 md:pr-8 md:pl-8 bg-dark pb-10 mb-14 -m-10 rounded-xl p-10 border-2 border-gray-dark border-solid">
          {countryData.map((country: any) => {
            return (
              <div key={country.name.common} className="flex flex-col  w-full">
                <Image
                  className="object-cover rounded-xl self-center mb-5 -m-20"
                  src={country?.flags?.svg}
                  alt={country?.name?.common}
                  width={250}
                  height={250}
                ></Image>
                <span className="text-center text-4xl">
                  {country.name.common}
                </span>
                <span className="text-center mb-10">
                  {country.name.official}
                </span>
                <div className="flex gap-6 justify-center mb-10 flex-col md:flex-row">
                  <div className="flex justify-between bg-gray-dark p-3 rounded-xl min-w-[280px] text-center">
                    <span>Population </span>
                    <span className="w-[1px] block h-[100%] bg-gray-light"></span>
                    <span>{country.population.toLocaleString("en")}</span>{" "}
                  </div>
                  <div className="flex justify-between bg-gray-dark p-3 rounded-xl min-w-[280px] text-center">
                    <span>Area (km2) </span>
                    <span className="w-[1px] block h-[100%] bg-gray-light"></span>
                    <span> {country?.area.toLocaleString("en")}</span>
                  </div>
                </div>
                <div className="flex  justify-between border-solid border-[1px] min-h-[100px] gap-3 pt-4 pb-4 items-center pl-4 pr-4 border-gray-dark">
                  <span className="text-gray">Capital</span>
                  <span>{country.capital ? country.capital[0] : "-"}</span>
                </div>
                <div className="flex  justify-between border-solid border-[1px] min-h-[100px] gap-3 pt-4 pb-4 items-center pl-4 pr-4 border-gray-dark">
                  <span className="text-gray">Subregion</span>
                  <span>{country.subregion}</span>
                </div>

                <div className="flex  justify-between border-solid border-[1px] min-h-[100px] gap-3 pt-4 pb-4 items-center pl-4 pr-4 border-gray-dark">
                  <span className="text-gray">Language</span>
                  <p className="flex flex-wrap gap-1 justify-end ">
                    {country.languages &&
                      Object.values(country.languages).map((lang) => {
                        return typeof lang === "string" ? (
                          <span key={lang}>{lang}</span>
                        ) : (
                          ""
                        );
                      })}
                  </p>
                </div>

                <div className="flex  justify-between border-solid border-[1px] min-h-[100px] gap-3 pt-4 pb-4 items-center pl-4 pr-4 border-gray-dark">
                  <span className="text-gray">Currencies</span>
                  <span>
                    <p>
                      {Object.values<CURR>(country.currencies).map((curr) => {
                        return <span key={curr.name}>{curr.name}</span>;
                      })}
                    </p>
                  </span>
                </div>
                <div className="flex  justify-between border-solid border-[1px] min-h-[100px] gap-3 pt-4 pb-4 items-center pl-4 pr-4 border-gray-dark">
                  <span className="text-gray">Continents</span>
                  <span>
                    {country.continents.map((con: string) => (
                      <span key={con}>{con}</span>
                    ))}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
