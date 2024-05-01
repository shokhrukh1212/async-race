import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CreateCar from "../CreateCar";
import UpdateCar from "../UpdateCar";
import GenerateCars from "../GenerateCars";
import useWindowWidth from "../../hooks/windowWidth";
import useRaceCars from "../../hooks/raceCars";
import useResetCars from "../../hooks/resetCars";

const RaceContentHeader = () => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const { width } = useWindowWidth();
    const { handleRaceCars } = useRaceCars(width);
    const { handleResetCars } = useResetCars();

    const handleRace = async () => {
        setDisabled(!disabled);
        await handleRaceCars();
    };

    const handleReset = async () => {
        setDisabled(!disabled);
        await handleResetCars();
    };

    return (
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
                <Box>
                    <Button variant="outlined" sx={{ mr: 2, fontSize: "1rem" }} onClick={handleRace} disabled={disabled}>
                        Race
                        <KeyboardArrowRightIcon />
                    </Button>

                    <Button variant="outlined" sx={{ mr: 2, fontSize: "1rem" }} onClick={handleReset} disabled={!disabled}>
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
