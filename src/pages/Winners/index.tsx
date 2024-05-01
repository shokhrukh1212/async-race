import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../../data/tableData";
import { Row } from "../../types/interfaces";
import handleSort from "../../utils/tableSort";

const Winners = () => {
    const [sortedRows, setSortedRows] = useState<Row[]>(rows);

  return (
    <Box sx={{ height: 400, width: "80%", m: "auto", color: "#ffffff" }}>
      <DataGrid
        rows={sortedRows}
        columns={columns}
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        onSortModelChange={(sortModel) => {
          const { field, sort = "asc" } = sortModel[0];
          handleSort(field as keyof Row, sort ?? "asc", rows, setSortedRows);
        }}
        pageSizeOptions={[5]}
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

export default Winners;
