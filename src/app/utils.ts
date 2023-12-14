export async function getData() {
  let res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getCountry(name: string) {
  let res = await fetch(
    `https://restcountries.com/v3.1/name${name}?fullText=true`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  return res.json();
}
