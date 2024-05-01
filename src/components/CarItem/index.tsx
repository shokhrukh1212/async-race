import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Car from "../CarIcon";
import { CarItemProps } from "../../types/interfaces";
import { CarContext } from "../../context/CarContext";
import useDeleteCar from "../../hooks/deleteCar";
import useDriveCar from "../../hooks/driveCar";
import useWindowWidth from "../../hooks/windowWidth";
import useStopCar from "../../hooks/stopCar";

const CarItem: React.FC<CarItemProps> = ({ item }) => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const { setChosenCar } = useContext(CarContext);
    const { width } = useWindowWidth();
    const { handleDriveCar } = useDriveCar();
    const { handleStopCar } = useStopCar(item);

    const handleDelete = useDeleteCar(item);
    const handleDrive = async () => {
        setDisabled(!disabled);
        await handleDriveCar(item, width);
    };
    const handleStop = async () => {
        setDisabled(!disabled);
        await handleStopCar();
    };

    return (
        <Box sx={{ position: "relative", borderBottom: "2px dashed #000", paddingBottom: 1, marginBottom: 2 }}>
            <Box sx={{ display: "flex", mb: 1 }}>
                <Button variant="outlined" size="small" sx={{ mr: 1 }} onClick={() => setChosenCar(item)}>Select</Button>
                <Button variant="outlined" size="small" onClick={handleDelete}>Remove</Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", padding: 0 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Button variant="outlined" size="small" sx={{ mb: 1 }} onClick={handleDrive} disabled={disabled}>A</Button>
                    <Button variant="outlined" size="small" onClick={handleStop} disabled={!disabled}>B</Button>
                </Box>
                <Car color={item.color} distance={item.distance} duration={item.duration} />
            </Box>

            <Typography variant="h5" sx={{ position: "absolute", top: "30px", left: "200px", opacity: "0.6" }}>{item.name}</Typography>
            <SportsScoreIcon sx={{ fontSize: "3rem", position: "absolute", right: "60px", top: "20px" }} />
        </Box>
    );
};

export default CarItem;
