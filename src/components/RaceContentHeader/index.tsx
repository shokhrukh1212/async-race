import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CreateCar from "../CreateCar";
import UpdateCar from "../UpdateCar";
import GenerateCars from "../GenerateCars";

const RaceContentHeader = () => {
    return (
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
                <Box>
                    <Button variant="outlined" sx={{ mr: 2, fontSize: "1rem" }}>
                        Race
                        <KeyboardArrowRightIcon />
                    </Button>

                    <Button variant="outlined" sx={{ mr: 2, fontSize: "1rem" }}>
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
