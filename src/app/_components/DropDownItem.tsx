import { ChevronDownIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { DropDownItemType } from "../lib/types";

export default function DropDownItem({
  question,
  answer,
  key,
  defaultState,
}: DropDownItemType) {
  const [isOpen, setIsOpen] = useState(defaultState);

  return (
    <>
      <div
        key={key}
        className="bg-white p-3 gap-2 font-semibold text-lg text-black w-[80%] min-w-96 flex flex-col items-center justify-between"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <div className="flex items-center justify-between w-full">
          {question}
          <span className="flex items-center justify-center rounded-full min-w-8 min-h-8 mx-4 border border-green-800">
            {isOpen ? <Cross2Icon /> : <ChevronDownIcon />}
          </span>
        </div>
        {isOpen && (
          <div className="p-4 max-h-64 overflow-y-auto font-light text-sm">
            {answer}
          </div>
        )}
      </div>
    </>
  );
}
