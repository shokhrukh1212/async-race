import { GridColDef } from "@mui/x-data-grid";
import { WinnerCarType } from "../types/interfaces";

const columns: GridColDef<WinnerCarType>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      sortable: false,
      width: 350,
    },
    {
      field: "wins",
      headerName: "Wins",
      width: 150,
    },
    {
      field: "time",
      headerName: "Best time(seconds)",
      width: 300,
    },
  ];

export default columns;
