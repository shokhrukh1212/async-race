import { Dispatch, SetStateAction } from "react";
import { Row } from "../types/interfaces";

const handleSort = (
  field: keyof Row,
  direction: "asc" | "desc",
  rows: Row[],
  setSortedRows: Dispatch<SetStateAction<Row[]>>,
) => {
    const sortedVisibleRows = rows.slice().sort((a, b) => {
        if (direction === "asc") return (a[field] as number) - (b[field] as number);
          return (b[field] as number) - (a[field] as number);
      });
      setSortedRows(sortedVisibleRows);
};

export default handleSort;
