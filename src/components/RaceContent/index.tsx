import { useContext } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CarItemType } from "../../types/interfaces";
import CarItemComponent from "../CarItem";
import useFetchCars from "../../hooks/fetchCars";
import { CarContext } from "../../context/CarContext";

const RaceContent = () => {
    const { cars, setCars } = useContext(CarContext);

    useFetchCars(setCars);

    return (
            <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Garage: (12 cars), Page: 1
                </Typography>

                    { cars.map((item: CarItemType) => (
                        <CarItemComponent item={item} key={item.id} />
                    ))}
            </Box>
    );
};

export default RaceContent;
