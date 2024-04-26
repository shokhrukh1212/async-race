import { useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Car from "../CarIcon";
import { CarItemProps } from "../../types/interfaces";
import { CarContext } from "../../context/CarContext";
import fetchApi from "../../utils/api";

const CarItem: React.FC<CarItemProps> = ({ item }) => {
    const { cars, setCars, setChosenCar } = useContext(CarContext);

    const handleDeleteCar = async () => {
        try {
            const res = await fetchApi("DELETE", `garage/${item.id}`);
            if (res) {
                const newCars = cars.filter((car) => car.id !== item.id);
                setCars(newCars);
                setChosenCar({ id: 0, name: "", color: "" });
            }

            return null;
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            return null;
        }
    };

    return (
        <Box sx={{ position: "relative", borderBottom: "2px dashed #000", paddingBottom: 1, marginBottom: 2 }}>
            <Box sx={{ display: "flex", mb: 1 }}>
                <Button variant="outlined" size="small" sx={{ mr: 1 }} onClick={() => setChosenCar(item)}>Select</Button>
                <Button variant="outlined" size="small" onClick={handleDeleteCar}>Remove</Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", padding: 0 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Button variant="outlined" size="small" sx={{ mb: 1 }}>A</Button>
                    <Button variant="outlined" size="small">B</Button>
                </Box>
                <Car color={item.color} />
            </Box>

            <Typography variant="h5" sx={{ position: "absolute", top: "30px", left: "200px", opacity: "0.6" }}>{item.name}</Typography>
        </Box>
    );
};

export default CarItem;
