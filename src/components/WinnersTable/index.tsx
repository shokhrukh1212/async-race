import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import columns from "../../data/tableData";
import { TableDataProps, WinnerCarType } from "../../types/interfaces";
import handleSort from "../../utils/tableSort";

const WinnersTable: React.FC<TableDataProps> = ({ rows }) => {
    const [sortedRows, setSortedRows] = useState<WinnerCarType[]>([]);
    useEffect(() => { setSortedRows(rows); }, [rows]);

    if (rows.length === 0) return <h1 style={{ marginTop: "100px", paddingLeft: "100px" }}>No Winners found!</h1>;

  return (
    <Box sx={{ height: 400, width: "80%", m: "auto", mt: 5, color: "#ffffff" }}>
      <DataGrid
        rows={sortedRows}
        columns={columns}
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
        onSortModelChange={(sortModel) => {
          const { field, sort = "asc" } = sortModel[0];
          handleSort(field as keyof WinnerCarType, sort ?? "asc", rows, setSortedRows);
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        disableColumnMenu
        sortingOrder={["asc", "desc"]}
        sx={{
            backgroundColor: "#8DA399",
            "& .MuiDataGrid-cell": {
              fontSize: "1.2rem",
            },
            "& .MuiDataGrid-columnHeaders": {
                color: "#000",
                fontSize: "1.2rem",
            },
          }}
      />
    </Box>
  );
};
export default WinnersTable;
