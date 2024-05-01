import { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { CarContext } from "../../context/CarContext";

const PaginationComponent = () => {
  const [numOfPages, setNumOfPages] = useState<number>(0);
  const { currentPage, setCurrentPage, cars } = useContext(CarContext);

  useEffect(() => {
    const nums = Math.ceil(cars.length / 7);
    setNumOfPages(nums);
  }, [cars]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Stack spacing={2} sx={{ display: "flex" }}>
      <Typography variant="h4" sx={{ alignSelf: "center" }}>
        Page:
        {` ${currentPage}`}
      </Typography>
      <Pagination sx={{ alignSelf: "center" }} count={numOfPages} page={currentPage} size="large" onChange={handleChange} />
    </Stack>
  );
};

export default PaginationComponent;
