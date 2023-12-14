import { CountriesList } from "@/components/CountriesList/CountriesList";
import Image from "next/image";
import { getData } from "./utils";

export default async function Home() {
  let data = await getData();
  return (
    <main>
      <div className="mx-auto  pr-4 pl-4 max-w-[1440px]">
        <CountriesList data={data} />
      </div>
    </main>
  );
}
