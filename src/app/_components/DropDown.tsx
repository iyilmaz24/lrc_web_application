"use client";

import DropDownItem from "./DropDownItem";
import { DropDownItemType } from "../lib/types";

type DropDownProps = {
  DropDownItems: DropDownItemType[];
};

export default function DropDown({ DropDownItems }: DropDownProps) {
  return (
    <>
      <div className="divide-y divide-black min-w-full flex flex-col items-center justify-center gap-3">
        {DropDownItems.map((FAQ: DropDownItemType) => (
          <DropDownItem
            {...FAQ}
            key={FAQ.key}
            defaultState={FAQ.defaultState}
          />
        ))}
      </div>
    </>
  );
}
