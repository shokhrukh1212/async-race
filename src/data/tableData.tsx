import { GridColDef } from "@mui/x-data-grid";
import CarIcon from "../components/CarIcon";
import { WinnerCarType } from "../types/interfaces";

const columns: GridColDef<WinnerCarType>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "color",
      headerName: "Car",
      sortable: false,
      width: 200,
      renderCell: (params) => (params.value && <CarIcon key={params.id} color={params.value} />),
    },
    {
      field: "name",
      headerName: "Name",
      sortable: false,
      width: 250,
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
