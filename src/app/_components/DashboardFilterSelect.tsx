"use client";

import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import "./CSS/DashboardFilterSelect.css";

interface FilterCriteria {
  type: string;
  options: string[];
}

type FiltersObjT = {
  year: string[];
  county: string[];
};

const FilterSelect = ({
  criteria = [] as FilterCriteria[],
  onFilterChange = (selected: FiltersObjT) => {},
  selectedFilters = {} as FiltersObjT,
}) => {
  const [openFilter, setOpenFilter] = useState(""); // only one filter can be open at a time

  const toggleFilter = (filterType: string) => {
    setOpenFilter(openFilter === filterType ? "" : filterType);
  };

  const handleOptionClick = (filterType: string, option: string) => {
    let newFilters = { ...selectedFilters };

    if (filterType === "year") {
      // if changing year, reset county selection
      newFilters = {
        year: [option], // only allow one year selection
        county: [], // reset county when year changes
      };
    } else {
      // for county, also only allow single selection
      newFilters[filterType as keyof FiltersObjT] = [option];
    }

    onFilterChange(newFilters);
    setOpenFilter(""); // close dropdown after selection
  };

  // close dropdown if clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => setOpenFilter("");
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const isCountyDisabled = !selectedFilters.year?.length;

  return (
    <div className="w-full ">
      <div
        className="flex justify-evenly gap-4 mb-2"
        onClick={(e) => e.stopPropagation()}
      >
        {criteria.map(({ type, options }) => (
          <div key={type} className="">
            {/* Filter Section Header */}
            <button
              onClick={() => toggleFilter(type)}
              disabled={type === "county" && isCountyDisabled}
              className={`flex items-center justify-between w-min-8 px-6 py-3 text-s rounded-md bg-white min-h-[24px]
                ${
                  type === "county" && isCountyDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-green-50"
                } ${type === "year" ? "w-20" : "min-w-36"} FilterTrigger`}
            >
              <div className="flex items-center space-x-2 ">
                <span className="capitalize text-[14px]">
                  {type == "county" ? "county & election" : type}
                </span>
                {type === "year" && selectedFilters.year?.[0] && (
                  <span className="px-2 py-1 text-xs bg-green-200 text-green-700 rounded-full">
                    {selectedFilters.year[0]}
                  </span>
                )}
                {type === "county" && selectedFilters.county?.[0] && (
                  <span className="px-2 py-1 text-xs bg-green-200 text-green-700 rounded-full">
                    {selectedFilters.county[0]}
                  </span>
                )}
              </div>
              <ChevronsUpDown className="w-4 h-4 opacity-50" />
            </button>

            {/* Dropdown Content */}
            {openFilter === type &&
              !(type === "county" && isCountyDisabled) && (
                <div className="absolute z-10 w-48 mt-1 bg-white border rounded-md shadow-lg">
                  <div className="py-1 max-h-60 overflow-auto">
                    {options.map((option) => (
                      <div
                        key={option}
                        className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                        onClick={() => handleOptionClick(type, option)}
                      >
                        <div className="flex items-center justify-center w-4 h-4 mr-2 border rounded">
                          {selectedFilters[type as keyof FiltersObjT]?.[0] ===
                            option && (
                            <Check className="w-3 h-3 text-blue-500" />
                          )}
                        </div>
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>

      <p className="mt-2 text-sm text-gray-500 flex justify-center">
        {isCountyDisabled
          ? `Please select a year to view available counties`
          : `Select the specific election data to view`}
      </p>
    </div>
  );
};

const DashboardFilterSelect = () => {
  const router = useRouter();

  const [selectedFilters, setSelectedFilters] = useState<{
    year: string[];
    county: string[];
  }>({ year: [], county: [] });

  const availableCounties = {
    "2022": ["Leon General", "Leon Primary"],
    "2024": ["Leon General", "Osceola General"],
  };

  const sampleCriteria = [
    {
      type: "year",
      options: Object.keys(availableCounties),
    },
    {
      type: "county",
      options: Object.values(
        availableCounties[
          (selectedFilters.year?.[0] as keyof typeof availableCounties) ||
            "2024"
        ]
      ),
    },
  ];

  const handleChange = (selected: FiltersObjT) => {
    setSelectedFilters(selected);
    if (selected.year.length && selected.county.length) {
      // if both year and county are selected
      const url = `/dashboard/${selected.county[0].replace(" ", "-")}-${
        selected.year[0]
      }`;

      router.push(url); // navigate to new dashboard
    }
  };

  return (
    <div className="p-4">
      <FilterSelect
        criteria={sampleCriteria}
        onFilterChange={handleChange}
        selectedFilters={selectedFilters}
      />
    </div>
  );
};

export default DashboardFilterSelect;
