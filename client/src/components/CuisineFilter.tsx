import { cuisineList } from "@/config/Resturant-config";
import { Label } from "./ui/label";
import { ChangeEvent } from "react";
import {  Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  onChange: (selectedCuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const handleCheckbox = () => {};
export default function CuisineFilter({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClick,
}: Props) {
  const handleCuisineChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;

    const newCuisineList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine != clickedCuisine);
    onChange(newCuisineList);
  };
  const handleCuisineReset = () => onChange([]);
  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By Cuisine</div>
        <div
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
          onClick={handleCuisineReset}
        >
          Reset Filters
        </div>
      </div>
      <div className="flex flex-col space-y-2">
      {cuisineList
        .slice(0, isExpanded ? cuisineList.length : 7)
        .map((cuisine) => {
          const isSelected = selectedCuisines.includes(cuisine);
          return (
            <div className=" flex gap-2" onClick={handleCheckbox}>
              <input
                id={`cuisine_${cuisine}`}
                type="checkbox"
                value={cuisine}
                className="hidden"
                checked={isSelected}
                onChange={handleCuisineChange}
              />
              <Label
                htmlFor={`cuisine_${cuisine}`}
                className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                  isSelected
                    ? "border border-green-600 text-green-600"
                    : "border border-slate-300"
                }`}
              >
                {isSelected && <Check size={20} strokeWidth={3} />}
                {cuisine}
              </Label>
            </div>
        )
        })}
        </div>
        <Button
          onClick={onExpandedClick}
          variant="link"
          className="mt-4 flex-1"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              View More <ChevronDown />
            </span>
          )}
        </Button>
    </>
  );
}
