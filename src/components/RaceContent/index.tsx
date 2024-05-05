import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CarItemType } from "../../types/interfaces";
import CarItemComponent from "../CarItem";
import useFetchCars from "../../hooks/fetchCars";
import { CarContext } from "../../context/CarContext";

const RaceContent = () => {
    const { cars, currentPage, currentCars, setCars, setCurrentCars } = useContext(CarContext);

    useEffect(() => {
        const visibleCars = cars.slice((currentPage - 1) * 7, currentPage * 7);
        setCurrentCars(visibleCars);
    }, [cars, currentPage]);

    useFetchCars(setCars);

    return (
            <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    {`Garage: ${cars.length} cars, #${currentPage}`}
                </Typography>

                    { currentCars.map((item: CarItemType) => (
                        <CarItemComponent item={item} key={item.id} />
                    ))}
            </Box>
    );
};

export default RaceContent;
