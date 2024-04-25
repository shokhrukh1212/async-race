import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Car from "../CarIcon";
import { CarItemProps } from "../../types/interfaces";

const CarItem: React.FC<CarItemProps> = ({ item }) => {
    return (
        <Box sx={{ position: "relative", borderBottom: "2px dashed #000", paddingBottom: 1, marginBottom: 2 }}>
            <Box sx={{ display: "flex", mb: 1 }}>
                <Button variant="outlined" size="small" sx={{ mr: 1 }}>Select</Button>
                <Button variant="outlined" size="small">Remove</Button>
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
