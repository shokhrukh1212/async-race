import { Dispatch, SetStateAction } from "react";
import { WinnerCarType } from "../types/interfaces";

const handleSort = (
  field: keyof WinnerCarType,
  direction: "asc" | "desc",
  rows: WinnerCarType[],
  setSortedRows: Dispatch<SetStateAction<WinnerCarType[]>>,
) => {
    const sortedVisibleRows = rows.slice().sort((a, b) => {
        if (direction === "asc") return (a[field] as number) - (b[field] as number);
          return (b[field] as number) - (a[field] as number);
      });
      setSortedRows(sortedVisibleRows);
};

export default handleSort;
