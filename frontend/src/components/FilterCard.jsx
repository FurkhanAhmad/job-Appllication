import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1lakh", "1lakh to 50lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-[280px] bg-white rounded-2xl shadow-lg border border-gray-100 p-5 hover:shadow-2xl transition-all duration-300">

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        Filter Jobs
      </h2>
      <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mb-4"></div>

      <RadioGroup className="space-y-5">
        {filterData.map((data, index) => (
          <div key={index}>

            {/* Section Title */}
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              {data.filterType}
            </h3>

            {/* Options */}
            <div className="space-y-2">
              {data.array.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-indigo-50 transition"
                >
                  <RadioGroupItem
                    value={item}
                    id={`${data.filterType}-${i}`}
                    className="border-gray-300 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500"
                  />
                  <Label
                    htmlFor={`${data.filterType}-${i}`}
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    {item}
                  </Label>
                </div>
              ))}
            </div>

          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;