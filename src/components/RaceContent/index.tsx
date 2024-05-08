import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CarItemType } from "../../types/interfaces";
import CarItemComponent from "../CarItem";
import { CarContext, initialState } from "../../context/CarContext";

const RaceContent = () => {
    const { cars, currentPage, currentCars, setChosenCar } = useContext(CarContext);

    useEffect(() => { setChosenCar(initialState); }, []);

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
