import React from "react";
interface InputFieldProps {
  quantity: number;
  inputValue: string;
  setInputValue: (arg: string) => void;
}
export const InputField: React.FC<InputFieldProps> = ({
  quantity,
  inputValue,
  setInputValue,
}) => {
  return (
    <div className="flex justify-between mb-10 items-center ">
      <span className="text-gray">Founed {quantity} countries</span>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="p-4 max-w-[320px] w-full rounded-xl bg-gray-dark"
        placeholder="Search for a country by name"
      />
    </div>
  );
};
