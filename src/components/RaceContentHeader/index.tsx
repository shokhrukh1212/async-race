import { useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CreateCar from "../CreateCar";
import UpdateCar from "../UpdateCar";
import GenerateCars from "../GenerateCars";
import useWindowWidth from "../../hooks/windowWidth";
import { CarContext } from "../../context/CarContext";
import resetCars from "../../utils/resetCars";
import raceCars from "../../utils/raceCars";

const RaceContentHeader = () => {
    const { isDisabled, winners, setIsDisabled, currentCars, setCurrentCars, setWinners } = useContext(CarContext);
    const { width } = useWindowWidth();

    const handleRace = async () => {
        setIsDisabled(true);
        await raceCars(currentCars, setCurrentCars, width, winners, setWinners);
    };

    const handleReset = async () => {
        setIsDisabled(false);
        await resetCars(currentCars, setCurrentCars);
    };

    return (
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
                <Box>
                    <Button variant="outlined" sx={{ fontSize: { xs: "0.5rem", sm: "0.7rem", md: "1rem" }, mr: { xs: 1, sm: 2, md: 3 } }} onClick={handleRace} disabled={isDisabled}>
                        Race
                        <KeyboardArrowRightIcon />
                    </Button>

                    <Button variant="outlined" sx={{ fontSize: { xs: "0.5rem", sm: "0.7rem", md: "1rem" }, mr: { xs: 1, sm: 2, md: 3 } }} onClick={handleReset} disabled={!isDisabled}>
                        Reset
                        <RestartAltIcon />
                    </Button>
                </Box>

                <CreateCar />
                <UpdateCar />
                <GenerateCars />
            </Box>
    );
};

export default RaceContentHeader;
