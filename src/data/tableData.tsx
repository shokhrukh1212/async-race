import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", sortable: false, width: 90 },
    {
      field: "car",
      headerName: "Car",
      sortable: false,
      width: 200,
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
      field: "best_time",
      headerName: "Best time",
      width: 200,
    },
  ];

  const rows = [
    { id: 1, car: "Yellow BMW", name: "BMW", wins: 2, best_time: 1.4 },
    { id: 2, car: "Green BMW", name: "BMW", wins: 3, best_time: 1.5 },
    { id: 3, car: "Yellow Mercedes", name: "Mercedes", wins: 1, best_time: 2.4 },
    { id: 4, car: "Yellow Tesla", name: "Tesla", wins: 4, best_time: 4.1 },
    { id: 5, car: "Yellow BMW", name: "BMW", wins: 6, best_time: 2.3 },
    { id: 6, car: "Yellow BMW", name: "BMW", wins: 1, best_time: 4 },
    { id: 7, car: "Yellow BMW", name: "BMW", wins: 3, best_time: 3.1 },
    { id: 8, car: "Yellow BMW", name: "BMW", wins: 4, best_time: 1.2 },
    { id: 9, car: "Yellow BMW", name: "BMW", wins: 2, best_time: 0.5 },
    { id: 10, car: "Yellow BMW", name: "BMW", wins: 5, best_time: 6 },
    { id: 11, car: "Yellow BMW", name: "BMW", wins: 0, best_time: 7.3 },
  ];

export { rows, columns };
