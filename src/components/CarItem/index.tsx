import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Car from "../CarIcon";
import { CarItemProps } from "../../types/interfaces";
import { CarContext } from "../../context/CarContext";
import useDeleteCar from "../../hooks/deleteCar";
import useWindowWidth from "../../hooks/windowWidth";
import startCarItem from "../../utils/startCar";
import stopCarItem from "../../utils/stopCar";

const CarItem: React.FC<CarItemProps> = ({ item }) => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const { currentCars, setCurrentCars, setChosenCar, isDisabled, setIsDisabled } = useContext(CarContext);
    const { width } = useWindowWidth();

    useEffect(() => {
        if (!isDisabled) setDisabled(false);
    }, [isDisabled]);

    const handleDelete = useDeleteCar(item);
    const handleDrive = async () => {
        setIsDisabled(true);
        setDisabled(true);
        await startCarItem(item, width, currentCars, setCurrentCars);
    };
    const handleStop = async () => {
        setIsDisabled(false);
        setDisabled(false);
        await stopCarItem(item, currentCars, setCurrentCars);
    };

    return (
        <Box sx={{ position: "relative", borderBottom: "2px dashed #000", paddingBottom: 1.5, marginBottom: 2 }}>
            <Box sx={{ display: "flex", mb: 1 }}>
                <Button variant="outlined" size="small" sx={{ mr: 1 }} onClick={() => setChosenCar(item)}>Select</Button>
                <Button variant="outlined" size="small" onClick={handleDelete}>Remove</Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", padding: 0 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Button variant="contained" size="small" sx={{ mb: 1 }} onClick={handleDrive} disabled={disabled}>A</Button>
                    <Button variant="contained" size="small" onClick={handleStop} disabled={!disabled}>B</Button>
                </Box>
                <Car color={item.color} distance={item.distance} duration={item.duration} />
            </Box>
            <Typography variant="h5" sx={{ position: "absolute", top: "30px", left: "200px", opacity: "0.6" }}>{item.name}</Typography>
            <SportsScoreIcon sx={{ fontSize: "3rem", position: "absolute", right: "60px", top: "20px" }} />
        </Box>
    );
};

export default CarItem;
